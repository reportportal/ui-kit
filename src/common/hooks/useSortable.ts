import { useEffect, useRef, useState, useCallback } from 'react';
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { UseSortableOptions, UseSortableReturn, DragItem, DropPosition } from '@common/types';

export const useSortable = ({
  id,
  index,
  type = DEFAULT_SORTABLE_TYPE,
  isDisabled = false,
  isLast = false,
  onDrop,
  hideDefaultPreview = false,
  // When true, uses cursor-based drop detection (for cases where dragged item disappears)
  // When false (default), uses index-based detection (original behavior)
  hidesDraggedItem = false,
}: UseSortableOptions): UseSortableReturn => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [cursorDropPosition, setCursorDropPosition] = useState<DropPosition>(null);

  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type,
      item: { id, index, type } as DragItem,
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => !isDisabled,
    }),
    [id, index, type, isDisabled],
  );

  // Hide the default browser drag preview when using custom DragLayer
  useEffect(() => {
    if (hideDefaultPreview) {
      previewRef(getEmptyImage(), { captureDraggingState: true });
    }
  }, [hideDefaultPreview, previewRef]);

  const [{ isOver, draggedItemIndex }, connectDropRef] = useDrop(
    () => ({
      accept: type,
      collect: (monitor: DropTargetMonitor) => {
        const draggedItem = monitor.getItem() as DragItem | null;
        const canDrop = draggedItem?.id !== id;
        const isCurrentlyOver = canDrop ? monitor.isOver() : false;

        return {
          isOver: isCurrentlyOver,
          draggedItemIndex: isCurrentlyOver ? (draggedItem?.index ?? null) : null,
        };
      },
      hover: (dragObject: DragItem, monitor: DropTargetMonitor) => {
        // Only track cursor position if using cursor-based detection
        if (!hidesDraggedItem) {
          return;
        }

        if (dragObject.id === id) {
          setCursorDropPosition(null);
          return;
        }

        const element = elementRef.current;
        if (!element) {
          setCursorDropPosition(null);
          return;
        }

        const hoverBoundingRect = element.getBoundingClientRect();
        const elementHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
        // Use 70% threshold - TOP line shows when in upper 70%, BOTTOM when in lower 30%
        const hoverThresholdY = elementHeight * 0.7;
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) {
          setCursorDropPosition(null);
          return;
        }

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        const isTopZone = hoverClientY < hoverThresholdY;

        // Show TOP line when in upper 70% of any item
        // Show BOTTOM line only for LAST item when in lower 30%
        if (isTopZone) {
          setCursorDropPosition('top');
        } else if (isLast) {
          setCursorDropPosition('bottom');
        } else {
          // Not last item and bottom zone -> next item's top line will show
          setCursorDropPosition(null);
        }
      },
      drop: (dragObject: DragItem, monitor: DropTargetMonitor) => {
        if (dragObject.id === id || !onDrop) {
          return;
        }

        // Use cursor-based drop calculation if hidesDraggedItem is true
        if (hidesDraggedItem) {
          const element = elementRef.current;
          if (!element) {
            return;
          }

          const hoverBoundingRect = element.getBoundingClientRect();
          const elementHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
          const hoverThresholdY = elementHeight * 0.7;
          const clientOffset = monitor.getClientOffset();

          if (!clientOffset) {
            return;
          }

          const hoverClientY = clientOffset.y - hoverBoundingRect.top;
          const isTopZone = hoverClientY < hoverThresholdY;

          let toIndex = index;
          const fromIndex = dragObject.index;

          if (isTopZone) {
            toIndex = fromIndex < index ? index - 1 : index;
          } else {
            toIndex = fromIndex > index ? index + 1 : index;
          }

          onDrop(fromIndex, toIndex);
        } else {
          // Original behavior - simple index-based drop
          onDrop(dragObject.index, index);
        }
      },
    }),
    [id, index, type, onDrop, isLast, hidesDraggedItem],
  );

  // Wrap dropRef to also store element reference (needed for cursor-based detection)
  const dropRef = useCallback(
    (node: Parameters<typeof connectDropRef>[0]) => {
      elementRef.current = node as HTMLElement | null;
      return connectDropRef(node);
    },
    [connectDropRef],
  ) as typeof connectDropRef;

  // Reset cursor drop position when not hovering
  useEffect(() => {
    if (!isOver) {
      setCursorDropPosition(null);
    }
  }, [isOver]);

  // Calculate drop position based on mode
  const getIndexBasedDropPosition = (): DropPosition => {
    if (draggedItemIndex === null) {
      return null;
    }
    return draggedItemIndex > index ? 'top' : 'bottom';
  };

  // Use cursor-based position if hidesDraggedItem, otherwise use index-based
  const dropPosition = hidesDraggedItem ? cursorDropPosition : getIndexBasedDropPosition();

  return {
    isDragging,
    isOver,
    draggedItemIndex,
    dropPosition,
    dragRef,
    dropRef,
    previewRef,
  };
};

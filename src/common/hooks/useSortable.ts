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
}: UseSortableOptions): UseSortableReturn => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [dropPosition, setDropPosition] = useState<DropPosition>(null);

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
        if (dragObject.id === id) {
          setDropPosition(null);
          return;
        }

        const element = elementRef.current;
        if (!element) {
          setDropPosition(null);
          return;
        }

        const hoverBoundingRect = element.getBoundingClientRect();
        const elementHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
        // Use 70% threshold - TOP line shows when in upper 70%, BOTTOM when in lower 30%
        const hoverThresholdY = elementHeight * 0.7;
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) {
          setDropPosition(null);
          return;
        }

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        const isTopZone = hoverClientY < hoverThresholdY;

        // Show TOP line when in upper 70% of any item
        // Show BOTTOM line only for LAST item when in lower 30%
        if (isTopZone) {
          setDropPosition('top');
        } else if (isLast) {
          setDropPosition('bottom');
        } else {
          // Not last item and bottom zone -> next item's top line will show
          setDropPosition(null);
        }
      },
      drop: (dragObject: DragItem, monitor: DropTargetMonitor) => {
        if (dragObject.id === id || !onDrop) {
          return;
        }

        const element = elementRef.current;
        if (!element) {
          return;
        }

        const hoverBoundingRect = element.getBoundingClientRect();
        const elementHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
        // Use same 70% threshold as hover
        const hoverThresholdY = elementHeight * 0.7;
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) {
          return;
        }

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        const isTopZone = hoverClientY < hoverThresholdY;

        // Calculate the correct toIndex based on cursor position
        let toIndex = index;
        const fromIndex = dragObject.index;

        if (isTopZone) {
          // Dropping in top zone: insert BEFORE this item
          toIndex = fromIndex < index ? index - 1 : index;
        } else {
          // Dropping in bottom zone: insert AFTER this item
          toIndex = fromIndex > index ? index + 1 : index;
        }

        onDrop(fromIndex, toIndex);
      },
    }),
    [id, index, type, onDrop, isLast],
  );

  // Wrap dropRef to also store element reference
  const dropRef = useCallback(
    (node: Parameters<typeof connectDropRef>[0]) => {
      elementRef.current = node as HTMLElement | null;
      return connectDropRef(node);
    },
    [connectDropRef],
  ) as typeof connectDropRef;

  // Reset drop position when not hovering
  useEffect(() => {
    if (!isOver) {
      setDropPosition(null);
    }
  }, [isOver]);

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

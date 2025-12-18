import { useEffect, useRef, useState, useCallback } from 'react';
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { UseSortableOptions, UseSortableReturn, DragItem, DropPosition } from '@common/types';
import { DROP_POSITIONS, DROP_DETECTION_MODE } from '@common/types';
import {
  calculateCursorBasedDropIndex,
  isInTopZone,
  getDropZone,
} from '@components/sortable/helpers';

export const useSortable = ({
  id,
  index,
  type = DEFAULT_SORTABLE_TYPE,
  isDisabled = false,
  isLast = false,
  onDrop,
  hideDefaultPreview = false,
  dropDetectionMode = DROP_DETECTION_MODE.INDEX_BASED,
}: UseSortableOptions): UseSortableReturn => {
  const isHoverMode = dropDetectionMode === DROP_DETECTION_MODE.HOVER;
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
        // Only track cursor position if using hover detection mode
        if (!isHoverMode) {
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
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) {
          setCursorDropPosition(null);
          return;
        }

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Get drop zone with dead zones at edges (5% top/bottom)
        const dropZone = getDropZone(hoverClientY, elementHeight);

        if (dropZone === null) {
          setCursorDropPosition(null);
        } else if (dropZone === 'top') {
          setCursorDropPosition(DROP_POSITIONS.TOP);
        } else {
          setCursorDropPosition(DROP_POSITIONS.BOTTOM);
        }
      },
      drop: (dragObject: DragItem, monitor: DropTargetMonitor) => {
        if (dragObject.id === id || !onDrop) {
          return;
        }

        // Use cursor-based drop calculation if hover mode
        if (isHoverMode) {
          const element = elementRef.current;
          if (!element) {
            return;
          }

          const hoverBoundingRect = element.getBoundingClientRect();
          const elementHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
          const clientOffset = monitor.getClientOffset();

          if (!clientOffset) {
            return;
          }

          const hoverClientY = clientOffset.y - hoverBoundingRect.top;
          const isTop = isInTopZone(hoverClientY, elementHeight);
          const fromIndex = dragObject.index;
          const toIndex = calculateCursorBasedDropIndex(fromIndex, index, isTop);

          onDrop(fromIndex, toIndex);
        } else {
          // Original behavior - simple index-based drop
          onDrop(dragObject.index, index);
        }
      },
    }),
    [id, index, type, onDrop, isLast, isHoverMode],
  );

  // Wrap dropRef to also store element reference (needed for hover detection mode)
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
    return draggedItemIndex > index ? DROP_POSITIONS.TOP : DROP_POSITIONS.BOTTOM;
  };

  // Use cursor-based position if hover mode, otherwise use index-based
  const dropPosition = isHoverMode ? cursorDropPosition : getIndexBasedDropPosition();

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

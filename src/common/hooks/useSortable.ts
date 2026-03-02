import { useEffect, useRef, useState, useCallback } from 'react';
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { UseSortableOptions, UseSortableReturn, DragItem, DropPosition } from '@common/types';
import { DROP_POSITIONS, DROP_DETECTION_MODE, SORTABLE_ORIENTATION } from '@common/types';
import {
  calculateCursorBasedDropIndex,
  getDropZone,
  getDropZoneHorizontal,
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
  orientation = SORTABLE_ORIENTATION.VERTICAL,
}: UseSortableOptions): UseSortableReturn => {
  const isHoverMode = dropDetectionMode === DROP_DETECTION_MODE.HOVER;
  const isHorizontal = orientation === SORTABLE_ORIENTATION.HORIZONTAL;
  const elementRef = useRef<HTMLElement | null>(null);
  const lastValidDropZoneRef = useRef<DropPosition>(null);
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
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) {
          setCursorDropPosition(null);
          return;
        }

        let dropZone: DropPosition;

        if (isHorizontal) {
          const elementWidth = hoverBoundingRect.right - hoverBoundingRect.left;
          const hoverClientX = clientOffset.x - hoverBoundingRect.left;
          dropZone = getDropZoneHorizontal(hoverClientX, elementWidth);
        } else {
          const elementHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
          const hoverClientY = clientOffset.y - hoverBoundingRect.top;
          dropZone = getDropZone(hoverClientY, elementHeight);
        }

        if (dropZone === null) {
          setCursorDropPosition(null);
          lastValidDropZoneRef.current = null;
        } else {
          setCursorDropPosition(dropZone);
          lastValidDropZoneRef.current = dropZone;
        }
      },
      drop: (dragObject: DragItem) => {
        if (dragObject.id === id || !onDrop) {
          return;
        }

        if (isHoverMode) {
          const dropZone = lastValidDropZoneRef.current;
          if (!dropZone) {
            return;
          }

          const isBeforeZone = isHorizontal
            ? dropZone === DROP_POSITIONS.LEFT
            : dropZone === DROP_POSITIONS.TOP;
          const toIndex = calculateCursorBasedDropIndex({
            fromIndex: dragObject.index,
            targetIndex: index,
            isTopZone: isBeforeZone,
          });

          onDrop(dragObject.index, toIndex);
        } else {
          onDrop(dragObject.index, index);
        }
      },
    }),
    [id, index, type, onDrop, isLast, isHoverMode, isHorizontal],
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

  const getIndexBasedDropPosition = (): DropPosition => {
    if (draggedItemIndex === null) {
      return null;
    }

    if (isHorizontal) {
      return draggedItemIndex > index ? DROP_POSITIONS.LEFT : DROP_POSITIONS.RIGHT;
    }

    return draggedItemIndex > index ? DROP_POSITIONS.TOP : DROP_POSITIONS.BOTTOM;
  };

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

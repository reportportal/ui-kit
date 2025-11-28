import { useEffect } from 'react';
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { UseSortableOptions, UseSortableReturn, DragItem } from '@common/types';

export const useSortable = ({
  id,
  index,
  type = DEFAULT_SORTABLE_TYPE,
  disabled = false,
  onDrop,
  hideDefaultPreview = false,
}: UseSortableOptions): UseSortableReturn => {
  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type,
      item: { id, index, type } as DragItem,
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => !disabled,
    }),
    [id, index, type, disabled],
  );

  // Hide the default browser drag preview when using custom DragLayer
  useEffect(() => {
    if (hideDefaultPreview) {
      previewRef(getEmptyImage(), { captureDraggingState: true });
    }
  }, [hideDefaultPreview, previewRef]);

  const [{ isOver, draggedItemIndex }, dropRef] = useDrop(
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
      drop: (dragObject: DragItem) => {
        if (dragObject.id !== id && onDrop) {
          onDrop(dragObject.index, index);
        }
      },
    }),
    [id, index, type, onDrop],
  );

  const getDropPosition = (): 'top' | 'bottom' | null => {
    if (draggedItemIndex === null) {
      return null;
    }
    return draggedItemIndex > index ? 'top' : 'bottom';
  };

  const dropPosition = getDropPosition();

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

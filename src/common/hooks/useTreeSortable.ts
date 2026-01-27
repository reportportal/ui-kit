import { useEffect, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type {
  UseTreeSortableOptions,
  UseTreeSortableReturn,
  TreeDragItem,
  TreeDropPosition,
} from '@common/types';
import { TREE_DROP_POSITIONS } from '@common/types';

const EDGE_ZONE_SIZE = 2;

const calculateDropPosition = (
  clientOffset: { x: number; y: number } | null,
  dropTargetRect: DOMRect | null,
): TreeDropPosition => {
  if (!clientOffset || !dropTargetRect) {
    return null;
  }

  const { top, height } = dropTargetRect;
  const relativeY = clientOffset.y - top;

  if (relativeY < EDGE_ZONE_SIZE) {
    return TREE_DROP_POSITIONS.BEFORE;
  }

  if (relativeY > height - EDGE_ZONE_SIZE) {
    return TREE_DROP_POSITIONS.AFTER;
  }

  return TREE_DROP_POSITIONS.INSIDE;
};

export const useTreeSortable = ({
  id,
  index,
  parentId = null,
  type = DEFAULT_SORTABLE_TYPE,
  isDisabled = false,
  acceptDrop = true,
  canDropOn,
  onDrop,
  hideDefaultPreview = false,
}: UseTreeSortableOptions): UseTreeSortableReturn => {
  const dropTargetRef = useRef<HTMLElement | null>(null);
  const dropPositionRef = useRef<TreeDropPosition>(null);

  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type,
      item: { id, index, type, parentId } as TreeDragItem,
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => !isDisabled,
    }),
    [id, index, type, parentId, isDisabled],
  );

  useEffect(() => {
    if (hideDefaultPreview) {
      previewRef(getEmptyImage(), { captureDraggingState: true });
    }
  }, [hideDefaultPreview, previewRef]);

  const [{ isOver, dropPosition }, dropRef] = useDrop(
    () => ({
      accept: type,
      collect: (monitor: DropTargetMonitor) => {
        const draggedItem = monitor.getItem() as TreeDragItem | null;
        const canDrop =
          draggedItem?.id !== id &&
          acceptDrop &&
          (!canDropOn || !draggedItem || canDropOn(draggedItem, id));
        const isCurrentlyOver = canDrop ? monitor.isOver({ shallow: true }) : false;

        let position: TreeDropPosition = null;
        if (isCurrentlyOver && dropTargetRef.current) {
          const clientOffset = monitor.getClientOffset();
          const rect = dropTargetRef.current.getBoundingClientRect();
          position = calculateDropPosition(clientOffset, rect);
          dropPositionRef.current = position;
        } else {
          dropPositionRef.current = null;
        }

        return {
          isOver: isCurrentlyOver,
          dropPosition: position,
        };
      },
      drop: (draggedItem: TreeDragItem, monitor) => {
        if (monitor.didDrop()) {
          return;
        }
        const canDrop = !canDropOn || canDropOn(draggedItem, id);
        if (draggedItem.id !== id && canDrop && onDrop && dropPositionRef.current) {
          onDrop(draggedItem, id, dropPositionRef.current);
        }
      },
    }),
    [id, type, acceptDrop, canDropOn, onDrop],
  );

  const combinedDropRef = (node: HTMLElement | null) => {
    dropTargetRef.current = node;
    dropRef(node);
  };

  return {
    isDragging,
    isOver,
    dropPosition,
    dragRef,
    dropRef: combinedDropRef,
    previewRef,
    elementRef: dropTargetRef,
  };
};

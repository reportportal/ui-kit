/*
 * Copyright 2025 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

const calculateDropPosition = (
  clientOffset: { x: number; y: number } | null,
  dropTargetRect: DOMRect | null,
  isLast = false,
): TreeDropPosition => {
  if (!clientOffset || !dropTargetRect) {
    return null;
  }

  const { top, height } = dropTargetRect;
  const relativeY = clientOffset.y - top;
  const relativeYPercent = relativeY / height;

  if (relativeY < 0 && relativeY >= -5) {
    return TREE_DROP_POSITIONS.BEFORE;
  }

  if (relativeY > height && relativeY <= height + 5) {
    return isLast ? TREE_DROP_POSITIONS.AFTER : TREE_DROP_POSITIONS.BEFORE;
  }

  if (relativeY < 0 || relativeY > height) {
    return null;
  }

  if (relativeYPercent <= 0.1) {
    return TREE_DROP_POSITIONS.BEFORE;
  }

  if (isLast && relativeYPercent >= 0.9) {
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
  isLast = false,
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

        const isDirectlyOver = canDrop && monitor.isOver({ shallow: true });

        let position: TreeDropPosition = null;

        if (isDirectlyOver && dropTargetRef.current) {
          const clientOffset = monitor.getClientOffset();
          const rect = dropTargetRef.current.getBoundingClientRect();
          position = calculateDropPosition(clientOffset, rect, isLast);
          dropPositionRef.current = position;
        } else {
          dropPositionRef.current = null;
        }

        return {
          isOver: isDirectlyOver,
          dropPosition: position,
        };
      },
      drop: (draggedItem: TreeDragItem, monitor) => {
        if (monitor.didDrop()) {
          return;
        }

        const canDropValidation = !canDropOn || canDropOn(draggedItem, id);

        if (
          draggedItem.id !== id &&
          acceptDrop &&
          canDropValidation &&
          onDrop &&
          dropPositionRef.current
        ) {
          onDrop(draggedItem, id, dropPositionRef.current);
        }
      },
    }),
    [id, type, acceptDrop, isLast, canDropOn, onDrop],
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

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

import { useEffect, useRef, useState } from 'react';
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
  const cursorY = clientOffset.y;
  const relativeY = cursorY - top;

  const EDGE_ZONE = 6;

  if (relativeY >= 0 && relativeY < EDGE_ZONE) {
    return TREE_DROP_POSITIONS.BEFORE;
  }

  if (isLast && relativeY >= height - EDGE_ZONE && relativeY <= height) {
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

  // CRITICAL FIX: useState for dropPosition to trigger re-renders
  // React-DND's collect doesn't trigger re-render on getClientOffset() changes (issue #179)
  const [dropPosition, setDropPosition] = useState<TreeDropPosition>(null);

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

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: type,
      hover: (draggedItem: TreeDragItem, monitor: DropTargetMonitor) => {
        if (dropTargetRef.current && draggedItem.id !== id && acceptDrop) {
          const isValidDropTarget = !canDropOn || canDropOn(draggedItem, id);

          if (isValidDropTarget) {
            const clientOffset = monitor.getClientOffset();
            const rect = dropTargetRef.current.getBoundingClientRect();

            if (clientOffset && rect) {
              const newPosition = calculateDropPosition(clientOffset, rect, isLast);

              if (newPosition !== dropPosition) {
                setDropPosition(newPosition);
                dropPositionRef.current = newPosition;
              }
            }
          } else {
            if (dropPosition !== null) {
              setDropPosition(null);
              dropPositionRef.current = null;
            }
          }
        }
      },
      collect: (monitor: DropTargetMonitor) => {
        const draggedItem = monitor.getItem() as TreeDragItem | null;
        const isBasicDropValid = draggedItem?.id !== id && acceptDrop;
        const isValidDropTarget = !canDropOn || !draggedItem || canDropOn(draggedItem, id);

        const isDirectlyOverThis = monitor.isOver({ shallow: true });
        const canDrop = isBasicDropValid && isValidDropTarget;

        if (!isDirectlyOverThis && dropPosition !== null) {
          setDropPosition(null);
          dropPositionRef.current = null;
        }

        return {
          isOver: isDirectlyOverThis && canDrop,
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
    [id, type, acceptDrop, isLast, canDropOn, onDrop, dropPosition],
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

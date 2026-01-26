import { useCallback, useRef } from 'react';
import classNames from 'classnames/bind';

import { useTreeSortable } from '@common/hooks';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { TreeSortableItemProps, TreeDragItem, TreeDropPosition } from '@common/types';
import { TREE_DROP_POSITIONS } from '@common/types';

import { useTreeSortableContext } from '../treeSortableContainer';
import styles from './treeSortableItem.module.scss';

const cx = classNames.bind(styles);

export const TreeSortableItem = ({
  id,
  index,
  parentId,
  type = DEFAULT_SORTABLE_TYPE,
  isDisabled = false,
  acceptDrop = true,
  isLast = false,
  canDropOn,
  className,
  draggingClassName,
  dropBeforeClassName,
  dropInsideClassName,
  dropAfterClassName,
  onDrop,
  hideDefaultPreview = false,
  children,
}: TreeSortableItemProps) => {
  const context = useTreeSortableContext();
  const wrapperRef = useRef<HTMLElement | null>(null);

  const handleDrop = useCallback(
    (draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => {
      if (context?.showDropConfirmation && wrapperRef.current) {
        context.requestDrop(draggedItem, targetId, position, wrapperRef.current);
      } else {
        onDrop?.(draggedItem, targetId, position);
      }
    },
    [context, onDrop],
  );

  const { isDragging, isOver, dropPosition, dragRef, dropRef, previewRef } = useTreeSortable({
    id,
    index,
    parentId,
    type,
    isDisabled,
    acceptDrop,
    canDropOn,
    onDrop: handleDrop,
    hideDefaultPreview,
  });

  // Check if this item is the pending dragged item (frozen state)
  const isPendingDrag = context?.pendingDraggedItemId === id;
  const showDraggingState = isDragging || isPendingDrag;

  // Check if this item is the pending target (show drop indicator)
  const isPendingTarget = context?.pendingTargetId === id;
  const pendingPosition = context?.pendingDropPosition;

  // Combine actual drop state with pending state for visuals
  const showDropBefore =
    (isOver && dropPosition === TREE_DROP_POSITIONS.BEFORE) ||
    (isPendingTarget && pendingPosition === TREE_DROP_POSITIONS.BEFORE);
  const showDropInside =
    (isOver && dropPosition === TREE_DROP_POSITIONS.INSIDE) ||
    (isPendingTarget && pendingPosition === TREE_DROP_POSITIONS.INSIDE);

  const showDropAfter =
    isLast &&
    ((isOver && dropPosition === TREE_DROP_POSITIONS.AFTER) ||
      (isPendingTarget && pendingPosition === TREE_DROP_POSITIONS.AFTER));

  const content =
    typeof children === 'function'
      ? children({
          isDragging: showDraggingState,
          isOver: isOver || isPendingTarget,
          dropPosition: isPendingTarget ? (pendingPosition ?? null) : dropPosition,
          dragRef,
        })
      : children;

  const wrapperClasses = cx('tree-sortable-item', className, {
    'tree-sortable-item--dragging': showDraggingState,
    'tree-sortable-item--pending': isPendingDrag,
    'tree-sortable-item--drop-before': showDropBefore,
    'tree-sortable-item--drop-inside': showDropInside,
    'tree-sortable-item--drop-after': showDropAfter,
    [draggingClassName || '']: showDraggingState && draggingClassName,
    [dropBeforeClassName || '']: showDropBefore && dropBeforeClassName,
    [dropInsideClassName || '']: showDropInside && dropInsideClassName,
    [dropAfterClassName || '']: showDropAfter && dropAfterClassName,
  });

  return (
    <div
      ref={(node) => {
        wrapperRef.current = node;
        dropRef(node);
        if (typeof children !== 'function') {
          (dragRef as (node: HTMLElement | null) => void)(node);
          (previewRef as (node: HTMLElement | null) => void)(node);
        }
      }}
      className={wrapperClasses}
    >
      {content}
    </div>
  );
};

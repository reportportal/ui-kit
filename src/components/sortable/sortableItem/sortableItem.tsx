import classNames from 'classnames/bind';
import { isFunction } from 'es-toolkit';

import { useSortable } from '@common/hooks';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { SortableItemProps } from '@common/types';
import { DROP_POSITIONS, DROP_DETECTION_MODE } from '@common/types';
import styles from './sortableItem.module.scss';

const cx = classNames.bind(styles);

export const SortableItem = ({
  id,
  index,
  type = DEFAULT_SORTABLE_TYPE,
  isDisabled = false,
  className,
  draggingClassName,
  dropTargetClassName,
  onDrop,
  hideDefaultPreview = false,
  dropDetectionMode = DROP_DETECTION_MODE.INDEX_BASED,
  isLast = false,
  children,
}: SortableItemProps) => {
  const { isDragging, dropPosition, dragRef, dropRef, previewRef } = useSortable({
    id,
    index,
    type,
    isDisabled,
    onDrop,
    hideDefaultPreview,
    dropDetectionMode,
    isLast,
  });

  const isRenderFunction = isFunction(children);

  const isHoverMode = dropDetectionMode === DROP_DETECTION_MODE.HOVER;

  const itemClassName = cx('sortable-item', className, {
    'sortable-item--dragging': isDragging,
    'sortable-item--hover-mode': isHoverMode,
    'sortable-item--drop-target-top': dropPosition === DROP_POSITIONS.TOP,
    'sortable-item--drop-target-bottom': dropPosition === DROP_POSITIONS.BOTTOM,
    [draggingClassName || '']: isDragging && draggingClassName,
    [dropTargetClassName || '']: dropPosition && dropTargetClassName,
  });

  // Combine refs for the container
  const setContainerRef = (node: HTMLDivElement | null) => {
    (dropRef as (node: HTMLElement | null) => void)(node);

    // Only apply previewRef if we're NOT hiding the default preview
    // When hideDefaultPreview is true, the previewRef is set to empty image in useSortable
    if (!hideDefaultPreview) {
      (previewRef as (node: HTMLElement | null) => void)(node);
    }

    // If children is not a render function, also attach drag ref to container
    if (!isRenderFunction) {
      (dragRef as (node: HTMLElement | null) => void)(node);
    }
  };

  return (
    <div ref={setContainerRef} className={itemClassName}>
      {isRenderFunction
        ? children({
            isDragging,
            isOver: dropPosition !== null,
            dragRef,
          })
        : children}
    </div>
  );
};

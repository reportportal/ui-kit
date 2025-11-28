import classNames from 'classnames/bind';
import { useSortable } from '@common/hooks';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { SortableItemProps } from '@common/types';
import styles from './sortableItem.module.scss';

const cx = classNames.bind(styles);

export const SortableItem = ({
  id,
  index,
  type = DEFAULT_SORTABLE_TYPE,
  disabled = false,
  className,
  draggingClassName,
  dropTargetClassName,
  onDrop,
  hideDefaultPreview = false,
  children,
}: SortableItemProps) => {
  const { isDragging, dropPosition, dragRef, dropRef, previewRef } = useSortable({
    id,
    index,
    type,
    disabled,
    onDrop,
    hideDefaultPreview,
  });

  const isRenderFunction = typeof children === 'function';

  const itemClassName = cx('sortable-item', className, {
    'sortable-item--dragging': isDragging,
    'sortable-item--drop-target-top': dropPosition === 'top',
    'sortable-item--drop-target-bottom': dropPosition === 'bottom',
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

import { useCallback } from 'react';
import { SortableItem } from '../sortableItem';
import { DEFAULT_SORTABLE_TYPE } from '@common/constants/sortable';
import type { SortableListProps } from '@common/types';

export const SortableList = <T extends { id: string | number }>({
  items,
  type = DEFAULT_SORTABLE_TYPE,
  isDisabled = false,
  className,
  itemClassName,
  onReorder,
  renderItem,
  keyExtractor = (item) => item.id,
}: SortableListProps<T>) => {
  const handleDrop = useCallback(
    (fromIndex: number, toIndex: number) => {
      const reorderedItems = [...items];
      const [movedItem] = reorderedItems.splice(fromIndex, 1);
      reorderedItems.splice(toIndex, 0, movedItem);
      onReorder(reorderedItems);
    },
    [items, onReorder],
  );

  return (
    <div className={className}>
      {items.map((item, index) => (
        <SortableItem
          key={keyExtractor(item)}
          id={keyExtractor(item)}
          index={index}
          type={type}
          isDisabled={isDisabled}
          className={itemClassName}
          onDrop={handleDrop}
        >
          {({ dragRef, isDragging }) => renderItem(item, index, dragRef, isDragging)}
        </SortableItem>
      ))}
    </div>
  );
};

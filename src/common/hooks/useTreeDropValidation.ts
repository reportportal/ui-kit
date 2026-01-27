import { useCallback } from 'react';

import type { TreeDragItem, TreeItem, UseTreeDropValidationOptions } from '@common/types';

const isDescendant = <T extends TreeItem<T>>(
  ancestorId: string | number,
  targetId: string | number,
  items: T[],
  childrenKey: 'children' | 'folders' = 'children',
): boolean => {
  const findItem = (id: string | number, searchItems: T[]): T | null => {
    for (const item of searchItems) {
      if (item.id === id) return item;
      const children = (item[childrenKey] as T[] | undefined) || [];
      if (children.length > 0) {
        const found = findItem(id, children);
        if (found) return found;
      }
    }
    return null;
  };

  const ancestor = findItem(ancestorId, items);
  if (!ancestor) return false;

  const checkDescendants = (searchItems: T[]): boolean => {
    for (const item of searchItems) {
      if (item.id === targetId) return true;
      const children = (item[childrenKey] as T[] | undefined) || [];
      if (children.length > 0 && checkDescendants(children)) return true;
    }
    return false;
  };

  const children = (ancestor[childrenKey] as T[] | undefined) || [];
  return checkDescendants(children);
};

export const useTreeDropValidation = <T extends TreeItem<T>>({
  items,
  childrenKey = 'children',
}: UseTreeDropValidationOptions<T>) => {
  const canDropOn = useCallback(
    (draggedItem: TreeDragItem, targetId: string | number): boolean => {
      const draggedId =
        typeof draggedItem.id === 'string' ? Number(draggedItem.id) : draggedItem.id;
      const normalizedTargetId = typeof targetId === 'string' ? Number(targetId) : targetId;

      if (draggedId === normalizedTargetId) {
        return false;
      }

      return !isDescendant(draggedId, normalizedTargetId, items, childrenKey);
    },
    [items, childrenKey],
  );

  return { canDropOn };
};

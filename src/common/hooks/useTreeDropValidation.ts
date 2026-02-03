/*!
 * Copyright 2026 EPAM Systems
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

import { useCallback } from 'react';
import { isEmpty } from 'es-toolkit/compat';

import type { TreeDragItem, TreeItem, UseTreeDropValidationOptions } from '@common/types';

const normalizeId = (id: string | number): string => String(id);

const isDescendant = <T extends TreeItem<T>>(
  ancestorId: string | number,
  targetId: string | number,
  items: T[],
  childrenKey: 'children' | 'folders' = 'children',
): boolean => {
  const normalizedAncestorId = normalizeId(ancestorId);
  const normalizedTargetId = normalizeId(targetId);

  const findItem = (id: string, searchItems: T[]): T | null => {
    for (const item of searchItems) {
      if (normalizeId(item.id) === id) {
        return item;
      }

      const children = (item[childrenKey] as T[] | undefined) || [];

      if (!isEmpty(children)) {
        const found = findItem(id, children);

        if (found) return found;
      }
    }

    return null;
  };

  const ancestor = findItem(normalizedAncestorId, items);

  if (!ancestor) return false;

  const checkDescendants = (searchItems: T[]): boolean => {
    for (const item of searchItems) {
      if (normalizeId(item.id) === normalizedTargetId) {
        return true;
      }

      const children = (item[childrenKey] as T[] | undefined) || [];

      if (!isEmpty(children) && checkDescendants(children)) {
        return true;
      }
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
      const draggedId = normalizeId(draggedItem.id);
      const normalizedTargetId = normalizeId(targetId);

      if (draggedId === normalizedTargetId) {
        return false;
      }

      return !isDescendant(draggedItem.id, targetId, items, childrenKey);
    },
    [items, childrenKey],
  );

  return { canDropOn };
};

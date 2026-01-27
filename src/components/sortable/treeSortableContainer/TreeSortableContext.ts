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

import { createContext, useContext } from 'react';

import type { TreeDragItem, TreeDropPosition } from '@common/types';

export interface TreeSortableContextValue {
  showDropConfirmation: boolean;
  pendingDraggedItemId: string | number | null;
  pendingTargetId: string | number | null;
  pendingDropPosition: TreeDropPosition;
  requestDrop: (
    draggedItem: TreeDragItem,
    targetId: string | number,
    position: TreeDropPosition,
    dropElement: HTMLElement,
  ) => void;
}

export const TreeSortableContext = createContext<TreeSortableContextValue | null>(null);

export const useTreeSortableContext = () => useContext(TreeSortableContext);

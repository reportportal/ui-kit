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

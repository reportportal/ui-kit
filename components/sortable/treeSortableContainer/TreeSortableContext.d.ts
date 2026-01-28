import { TreeDragItem, TreeDropPosition } from '../../../common/types';

export interface TreeSortableContextValue {
    showDropConfirmation: boolean;
    pendingDraggedItemId: string | number | null;
    pendingTargetId: string | number | null;
    pendingDropPosition: TreeDropPosition;
    requestDrop: (draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition, dropElement: HTMLElement) => void;
}
export declare const TreeSortableContext: import('../../../../node_modules/react').Context<TreeSortableContextValue | null>;
export declare const useTreeSortableContext: () => TreeSortableContextValue | null;

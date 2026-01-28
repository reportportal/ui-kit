import { TreeDragItem, TreeItem, UseTreeDropValidationOptions } from '../types';

export declare const useTreeDropValidation: <T extends TreeItem<T>>({ items, childrenKey, }: UseTreeDropValidationOptions<T>) => {
    canDropOn: (draggedItem: TreeDragItem, targetId: string | number) => boolean;
};

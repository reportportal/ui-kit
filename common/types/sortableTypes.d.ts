import { ReactNode, Ref, CSSProperties } from '../../../node_modules/react';
import { XYCoord, ConnectDragSource, ConnectDropTarget, ConnectDragPreview } from 'react-dnd';

export interface SortableItemData {
    id: string | number;
    index: number;
}
export interface DragItem extends SortableItemData {
    type: string;
}
export declare const DROP_POSITIONS: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
};
export type DropPositionValue = (typeof DROP_POSITIONS)[keyof typeof DROP_POSITIONS];
export declare const DROP_DETECTION_MODE: {
    readonly INDEX_BASED: "indexBased";
    readonly HOVER: "hover";
};
export type DropDetectionMode = (typeof DROP_DETECTION_MODE)[keyof typeof DROP_DETECTION_MODE];
export interface UseSortableOptions {
    id: string | number;
    index: number;
    type?: string;
    isDisabled?: boolean;
    isLast?: boolean;
    onDrop?: (fromIndex: number, toIndex: number) => void;
    hideDefaultPreview?: boolean;
    dropDetectionMode?: DropDetectionMode;
}
export interface UseSortableReturn {
    isDragging: boolean;
    isOver: boolean;
    draggedItemIndex: number | null;
    dropPosition: DropPosition;
    dragRef: ConnectDragSource;
    dropRef: ConnectDropTarget;
    previewRef: ConnectDragPreview;
}
export interface SortableItemRenderProps {
    isDragging: boolean;
    isOver: boolean;
    dragRef: Ref<HTMLElement>;
}
export interface SortableItemProps {
    id: string | number;
    index: number;
    type?: string;
    isDisabled?: boolean;
    isLast?: boolean;
    className?: string;
    draggingClassName?: string;
    dropTargetClassName?: string;
    onDrop?: (fromIndex: number, toIndex: number) => void;
    hideDefaultPreview?: boolean;
    dropDetectionMode?: DropDetectionMode;
    children: ReactNode | ((props: SortableItemRenderProps) => ReactNode);
}
export interface SortableListProps<T extends {
    id: string | number;
}> {
    items: T[];
    type?: string;
    isDisabled?: boolean;
    className?: string;
    itemClassName?: string;
    onReorder: (reorderedItems: T[]) => void;
    renderItem: (item: T, index: number, dragRef: Ref<HTMLElement>, isDragging: boolean) => ReactNode;
    keyExtractor?: (item: T) => string | number;
}
export interface DragLayerProps {
    type: string;
    renderPreview: (item: DragItem) => ReactNode;
    className?: string;
    previewClassName?: string;
    portalTarget?: Element | null;
}
export interface DragLayerCollectedProps {
    item: DragItem | null;
    itemType: string | symbol | null;
    clientOffset: XYCoord | null;
    isDragging: boolean;
}
export type DropPosition = 'top' | 'bottom' | null;
export declare const TREE_DROP_POSITIONS: {
    readonly BEFORE: "before";
    readonly INSIDE: "inside";
    readonly AFTER: "after";
};
export type TreeDropPositionValue = (typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS];
export type TreeDropPosition = TreeDropPositionValue | null;
export interface TreeDragItem extends DragItem {
    parentId?: string | number | null;
    depth?: number;
}
export type TreeDropHandler = (draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => void;
export interface UseTreeSortableOptions {
    id: string | number;
    index: number;
    parentId?: string | number | null;
    type?: string;
    isDisabled?: boolean;
    acceptDrop?: boolean;
    isLast?: boolean;
    canDropOn?: (draggedItem: TreeDragItem, targetId: string | number) => boolean;
    onDrop?: TreeDropHandler;
    hideDefaultPreview?: boolean;
}
export interface TreeSortableState {
    isDragging: boolean;
    isOver: boolean;
    dropPosition: TreeDropPosition;
    dragRef: ConnectDragSource;
}
export interface UseTreeSortableReturn extends TreeSortableState {
    dropRef: (node: HTMLElement | null) => void;
    previewRef: ConnectDragPreview;
    elementRef: React.RefObject<HTMLElement | null>;
}
export type TreeSortableItemRenderProps = TreeSortableState;
export interface TreeSortableItemProps {
    id: string | number;
    index: number;
    parentId?: string | number | null;
    type?: string;
    isDisabled?: boolean;
    acceptDrop?: boolean;
    isLast?: boolean;
    canDropOn?: (draggedItem: TreeDragItem, targetId: string | number) => boolean;
    className?: string;
    style?: CSSProperties;
    draggingClassName?: string;
    dropBeforeClassName?: string;
    dropInsideClassName?: string;
    dropAfterClassName?: string;
    onDrop?: TreeDropHandler;
    hideDefaultPreview?: boolean;
    children: ReactNode | ((props: TreeSortableItemRenderProps) => ReactNode);
}
export interface TreeItem<T = unknown> {
    id: string | number;
    children?: T[];
    folders?: T[];
}
export interface UseTreeDropValidationOptions<T extends TreeItem<T>> {
    items: T[];
    childrenKey?: 'children' | 'folders';
}
export declare const DROP_ACTIONS: {
    readonly MOVE: "move";
    readonly DUPLICATE: "duplicate";
    readonly CANCEL: "cancel";
};
export type DropAction = (typeof DROP_ACTIONS)[keyof typeof DROP_ACTIONS];
export interface PendingDropInfo {
    draggedItem: TreeDragItem;
    targetId: string | number;
    position: TreeDropPosition;
}
export type DropConfirmationLabels = Partial<Record<DropAction, string>>;
export interface TreeSortableContainerProps {
    children: ReactNode;
    showDropConfirmation?: boolean;
    confirmationLabels?: DropConfirmationLabels;
    portalTarget?: Element | null;
    onMove?: TreeDropHandler;
    onDuplicate?: TreeDropHandler;
    onCancel?: () => void;
}

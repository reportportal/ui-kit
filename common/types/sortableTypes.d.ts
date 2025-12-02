import { ReactNode, Ref } from '../../../node_modules/react';
import { XYCoord, ConnectDragSource, ConnectDropTarget, ConnectDragPreview } from 'react-dnd';

export interface SortableItemData {
    id: string | number;
    index: number;
}
export interface DragItem extends SortableItemData {
    type: string;
}
export interface UseSortableOptions {
    id: string | number;
    index: number;
    type?: string;
    isDisabled?: boolean;
    onDrop?: (fromIndex: number, toIndex: number) => void;
    hideDefaultPreview?: boolean;
}
export interface UseSortableReturn {
    isDragging: boolean;
    isOver: boolean;
    draggedItemIndex: number | null;
    dropPosition: 'top' | 'bottom' | null;
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
    className?: string;
    draggingClassName?: string;
    dropTargetClassName?: string;
    onDrop?: (fromIndex: number, toIndex: number) => void;
    hideDefaultPreview?: boolean;
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

import type { ReactNode, Ref } from 'react';
import type { XYCoord, ConnectDragSource, ConnectDropTarget, ConnectDragPreview } from 'react-dnd';

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

export interface SortableListProps<T extends { id: string | number }> {
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

// Tree Sortable Types (for nested structures like folders)
export type DropPosition = 'top' | 'bottom' | null;

export const TREE_DROP_POSITIONS = {
  BEFORE: 'before',
  INSIDE: 'inside',
  AFTER: 'after',
} as const;

export type TreeDropPositionValue = (typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS];
export type TreeDropPosition = TreeDropPositionValue | null;

export interface TreeDragItem extends DragItem {
  parentId?: string | number | null;
  depth?: number;
}

// Reusable callback type for tree drop operations
export type TreeDropHandler = (
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void;

export interface UseTreeSortableOptions {
  id: string | number;
  index: number;
  parentId?: string | number | null;
  type?: string;
  isDisabled?: boolean;
  acceptDrop?: boolean;
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
  className?: string;
  draggingClassName?: string;
  dropBeforeClassName?: string;
  dropInsideClassName?: string;
  dropAfterClassName?: string;
  onDrop?: TreeDropHandler;
  hideDefaultPreview?: boolean;
  children: ReactNode | ((props: TreeSortableItemRenderProps) => ReactNode);
}

// Drop Confirmation Types
export const DROP_ACTIONS = {
  MOVE: 'move',
  DUPLICATE: 'duplicate',
  CANCEL: 'cancel',
} as const;

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

import type { ReactNode, Ref } from 'react';
import type { XYCoord, ConnectDragSource, ConnectDropTarget, ConnectDragPreview } from 'react-dnd';

export interface SortableItemData {
  id: string | number;
  index: number;
}

export interface DragItem extends SortableItemData {
  type: string;
}

export const DROP_POSITIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export type DropPositionValue = (typeof DROP_POSITIONS)[keyof typeof DROP_POSITIONS];
export type DropPosition = DropPositionValue | null;

export const DROP_DETECTION_MODE = {
  INDEX_BASED: 'indexBased',
  HOVER: 'hover',
} as const;

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

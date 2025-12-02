import { SortableListProps } from '../../../common/types';

export declare const SortableList: <T extends {
    id: string | number;
}>({ items, type, isDisabled, className, itemClassName, onReorder, renderItem, keyExtractor, }: SortableListProps<T>) => import("react/jsx-runtime").JSX.Element;

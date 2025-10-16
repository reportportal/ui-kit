import { ReactNode } from '../../../../../node_modules/react';

type VariantType = 'light' | 'dark';
interface SelectedItemProps<T> {
    item: T;
    onRemoveItem: (item: T) => void;
    parseValueToString?: (value: T) => string;
    editItem: (oldItem: T, newValue: string) => void;
    disabled?: boolean;
    mobileDisabled?: boolean;
    error?: string | boolean;
    editable?: boolean;
    getAdditionalCreationCondition?: (value: string) => boolean;
    storedOption?: boolean;
    highlightUnStoredItem?: boolean;
    variant?: VariantType;
    getItemName?: (item: T) => string;
    changeItemHandler?: (item: T, value: string) => T;
}
type SelectedItemsProps<T> = Omit<SelectedItemProps<T>, 'item' | 'editItem'> & {
    items?: T[];
    onRemoveItem?: (item: T) => void;
    parseValueToString: (value: T | null) => string;
    editItem: (oldItem: T, newValue: string) => void;
    disabled?: boolean;
    mobileDisabled?: boolean;
    storedItemsMap?: Record<string, boolean>;
    highlightUnStoredItem?: boolean;
    editable?: boolean;
    variant?: VariantType;
    getItemValidationErrorType?: ((item: T) => string) | null;
    renderCustomSelectedItem?: (item: T) => ReactNode;
};
export declare const SelectedItems: <T>({ items, parseValueToString, getItemValidationErrorType, storedItemsMap, highlightUnStoredItem, renderCustomSelectedItem, ...props }: SelectedItemsProps<T>) => (string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | null | undefined)[];
export {};

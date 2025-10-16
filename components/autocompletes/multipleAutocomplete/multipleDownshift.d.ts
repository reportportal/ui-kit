import { ControllerStateAndHelpers, DownshiftProps } from 'downshift';

export type DownshiftStore<T> = {
    [key: string]: boolean;
} | T[];
export interface MultipleDownshiftProps<T> extends Partial<DownshiftProps<T>> {
    options: T[];
    selectedItems: T[];
    handleUnStoredItemCb: ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void) | null;
    existingItemsMap: {
        [key: string]: boolean;
    };
    customizeNewSelectedValue: (value: T) => T;
    getOptionUniqKey?: (option: T) => keyof T;
    getOptionUniqKeyValue?: (option: T) => string;
    onChange: (selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void;
}
export type GetStateAndHelpersT<T> = ControllerStateAndHelpers<T> & {
    removeItem: (removedItem: T, downshift: ControllerStateAndHelpers<T> | null) => void;
    editItem: (oldItem: T, newValue: string) => void;
    handleChange: MultipleDownshiftProps<T>['onChange'];
    getOptionUniqKeyValue?: (option: T) => string;
    storedItemsMap: MultipleDownshiftProps<T>['existingItemsMap'];
};
export declare const MultipleDownshift: <T>({ options, onChange, selectedItems, handleUnStoredItemCb, existingItemsMap, children, customizeNewSelectedValue, getOptionUniqKey, getOptionUniqKeyValue, ...props }: MultipleDownshiftProps<T>) => import("react/jsx-runtime").JSX.Element;

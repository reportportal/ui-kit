import { ReactNode } from '../../../../node_modules/react';
import { GetItemPropsT } from '../types';

export interface AutocompleteOptionsProps<T> {
    options: T[];
    loading?: boolean;
    inputValue: string;
    parseValueToString: (value: T | null) => string;
    getItemProps: GetItemPropsT<T>;
    renderOption?: (item: T, index: number, isNew: boolean, getItemProps: GetItemPropsT<T>) => ReactNode;
    async?: boolean;
    optionVariant: 'key-variant' | 'value-variant' | '';
    createWithoutConfirmation: boolean;
    customEmptyListMessage?: string;
    customNoMatchesMessage?: string;
    getUniqKey?: (item: T) => string;
    newItemButtonText: string;
    limitationText?: string;
    optionsLimit?: number;
    shouldShowEmptyListMessage?: boolean;
}
export declare const AutocompleteOptions: <T>(props: AutocompleteOptionsProps<T>) => import("react/jsx-runtime").JSX.Element | null;

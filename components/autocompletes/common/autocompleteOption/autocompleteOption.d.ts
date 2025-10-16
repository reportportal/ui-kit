import { HTMLAttributes, ReactNode } from '../../../../../node_modules/react';

type AutocompleteOptionProps = {
    isActive?: boolean;
    isSelected?: boolean;
    isNew?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    optionVariant?: 'key-variant' | 'value-variant' | '';
    newItemButtonText?: string;
} & HTMLAttributes<HTMLLIElement | HTMLButtonElement>;
export declare const AutocompleteOption: ({ isActive, isSelected, isNew, children, disabled, optionVariant, newItemButtonText, ...props }: AutocompleteOptionProps) => import("react/jsx-runtime").JSX.Element;
export {};

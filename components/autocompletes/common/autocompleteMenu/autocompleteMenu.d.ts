import { AutocompleteOptionsProps } from '../autocompleteOptions';

export declare const AutocompleteMenu: <T>(props: {
    isOpen?: boolean | undefined;
    style?: import('../../../../../node_modules/react').CSSProperties | undefined;
    isDropdownMode?: boolean | undefined;
    minLength?: number | null | undefined;
    inputValue?: string | undefined;
    className?: string | undefined;
    optionsLimit?: number | undefined;
    limitationText?: string | undefined;
} & AutocompleteOptionsProps<T> & import('../../../../../node_modules/react').RefAttributes<HTMLUListElement>) => import('../../../../../node_modules/react').ReactElement<any, string | import('../../../../../node_modules/react').JSXElementConstructor<any>> | null;

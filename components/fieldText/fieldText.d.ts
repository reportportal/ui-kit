import { ChangeEventHandler, InputHTMLAttributes, ReactElement, ReactNode } from '../../../node_modules/react';

type InputType = 'password' | 'text' | 'email';
export interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    className?: string;
    classNameHelpText?: string;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: ChangeEventHandler<HTMLInputElement>;
    touched?: boolean;
    title?: string;
    label?: string;
    helpText?: string;
    defaultWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    clearable?: boolean;
    onClear?: (prevValue?: string) => void;
    isRequired?: boolean;
    hasDoubleMessage?: boolean;
    type?: InputType;
    displayError?: boolean;
    maxLengthDisplay?: number;
    collapsible?: boolean;
    loading?: boolean;
    capsLockMessage?: string;
}
export declare const FieldText: (props: FieldTextProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>) => ReactElement<any, string | import('../../../node_modules/react').JSXElementConstructor<any>> | null;
export {};

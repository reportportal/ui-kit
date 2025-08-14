import { HTMLAttributes, FocusEventHandler } from '../../../node_modules/react';

type FieldNumberValue = number | string;
interface FieldNumberProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus'> {
    onChange: (value: number | string) => void;
    value?: FieldNumberValue;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    postfix?: string;
    min?: number;
    max?: number;
    title?: string;
    error?: string;
    onFocus?: () => void | FocusEventHandler<HTMLInputElement>;
}
export declare const FieldNumber: ({ value, placeholder, disabled, onChange, onFocus, onBlur, label, postfix, min, max, title, error, id, ...rest }: FieldNumberProps) => import("react/jsx-runtime").JSX.Element;
export {};

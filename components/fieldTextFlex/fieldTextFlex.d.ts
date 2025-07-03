import { ChangeEventHandler, ComponentPropsWithRef, FocusEventHandler, KeyboardEventHandler } from '../../../node_modules/react';

export interface FieldTextFlexProps extends ComponentPropsWithRef<'textarea'> {
    value: string;
    readonly?: boolean;
    error?: string;
    touched?: boolean;
    label?: string;
    helpText?: string;
    maxLengthDisplay?: number;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
}
export declare const FieldTextFlex: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<FieldTextFlexProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;

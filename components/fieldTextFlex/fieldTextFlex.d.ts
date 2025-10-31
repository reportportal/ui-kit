import { ChangeEventHandler, ComponentPropsWithRef, FocusEventHandler, KeyboardEventHandler } from '../../../node_modules/react';

export interface FieldTextFlexProps extends ComponentPropsWithRef<'textarea'> {
    value: string;
    readonly?: boolean;
    error?: string;
    touched?: boolean;
    label?: string;
    helpText?: string;
    maxLengthDisplay?: number;
    minHeight?: number;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
}
export declare const FieldTextFlex: (props: FieldTextFlexProps & import('../../../node_modules/react').RefAttributes<HTMLTextAreaElement>) => import('../../../node_modules/react').ReactElement<any, string | import('../../../node_modules/react').JSXElementConstructor<any>> | null;

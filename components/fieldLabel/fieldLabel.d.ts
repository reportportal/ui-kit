import { DetailedHTMLProps, LabelHTMLAttributes } from '../../../node_modules/react';

interface FieldLabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    isRequired?: boolean;
}
export declare const FieldLabel: ({ children, isRequired, className, ...rest }: FieldLabelProps) => import("react/jsx-runtime").JSX.Element;
export {};

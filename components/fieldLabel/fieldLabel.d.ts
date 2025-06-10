import { DetailedHTMLProps, FC, LabelHTMLAttributes } from '../../../node_modules/react';

interface FieldLabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    isRequired?: boolean;
}
export declare const FieldLabel: FC<FieldLabelProps>;
export {};

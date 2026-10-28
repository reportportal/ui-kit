import { ChangeEventHandler, InputHTMLAttributes, ReactNode, FC } from '../../../node_modules/react';

export type RadioValue = string | number;
export type RadioOption = {
    value: RadioValue;
    label: string | ReactNode;
    disabled: boolean;
};
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'type'> {
    option: RadioOption;
    value?: RadioValue;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const Radio: FC<RadioProps>;

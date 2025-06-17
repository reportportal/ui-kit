import { ReactNode, ComponentPropsWithRef, MouseEventHandler } from '../../../node_modules/react';

type IconPlace = 'start' | 'end';
type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'text';
type ButtonWidth = 'content' | 'wide-content' | 'parent' | 'min-width';
export interface ButtonProps extends ComponentPropsWithRef<'button'> {
    children?: ReactNode;
    icon?: ReactNode;
    iconPlace?: IconPlace;
    adjustWidthOn?: ButtonWidth;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    className?: string;
    variant?: ButtonVariant;
}
export declare const Button: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export {};

import { PropsWithChildren } from '../../../../node_modules/react';
import { ButtonProps } from '../../button';

type BrowseButtonProps = Omit<ButtonProps, 'onClick' | 'disabled' | 'children'> & {
    className?: string;
    variant?: ButtonProps['variant'];
};
export declare const BrowseButton: ({ children, className, variant, ...buttonProps }: PropsWithChildren<BrowseButtonProps>) => import("react/jsx-runtime").JSX.Element;
export {};

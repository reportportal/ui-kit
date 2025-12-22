import { ReactNode, MouseEvent } from '../../../node_modules/react';

export type ChipVariant = 'default' | 'error' | 'warning' | 'link';
export interface ChipProps {
    children: ReactNode;
    variant?: ChipVariant;
    link?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    maxWidth?: number;
    title?: string;
    disabled?: boolean;
}
export declare const Chip: ({ children, variant, link, onClick, onRemove, className, maxWidth, title, disabled, }: ChipProps) => import("react/jsx-runtime").JSX.Element;

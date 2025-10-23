import { ReactNode } from '../../../node_modules/react';

export interface SidePanelProps {
    className?: string;
    title?: ReactNode;
    headerComponent?: ReactNode;
    descriptionComponent?: ReactNode;
    contentComponent?: ReactNode;
    footerComponent?: ReactNode;
    top?: number;
    side?: 'left' | 'right';
    isOpen?: boolean;
    onClose?: () => void;
    closeButtonAriaLabel?: string;
}
export declare const SidePanel: ({ className, title, descriptionComponent, headerComponent, contentComponent, footerComponent, top, side, isOpen, onClose, closeButtonAriaLabel, }: SidePanelProps) => import("react/jsx-runtime").JSX.Element;
export default SidePanel;

import { FC, ReactNode } from '../../../node_modules/react';
import { Placement, Strategy } from '@floating-ui/react';

export interface PopoverProps {
    content: ReactNode;
    children: ReactNode;
    placement?: Placement;
    fallbackPlacements?: Placement[];
    className?: string;
    title?: string;
    arrowOffset?: number;
    safeZone?: number;
    arrowColor?: string;
    dataAutomationId?: string;
    isOpened?: boolean;
    isCentered?: boolean;
    strategy?: Strategy;
    setIsOpened?: (isOpened: boolean) => void;
}
export declare const Popover: FC<PopoverProps>;

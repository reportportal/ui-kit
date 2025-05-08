import { FC, ReactNode } from '../../../node_modules/react';
import { Placement } from '@floating-ui/react';

interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    wrapperClassName?: string;
    tooltipClassName?: string;
    contentClassName?: string;
    dynamicWidth?: boolean;
    width?: number;
    minWidth?: number;
    placement?: Placement;
    dataAutomationId?: string;
    arrowColor?: string;
    safeZone?: number;
    zIndex?: number;
    mainAxis?: boolean;
    portalRoot?: Element;
    isFloating?: boolean;
}
export declare const Tooltip: FC<TooltipProps>;
export {};

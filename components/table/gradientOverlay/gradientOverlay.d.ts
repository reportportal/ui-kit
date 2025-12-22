import { ReactElement } from '../../../../node_modules/react';

export interface GradientOverlayProps {
    portalContainer?: HTMLElement | null;
    visible: boolean;
    position: {
        top: number;
        left?: number;
        right?: number;
    };
    size: {
        width: number;
        height: number;
    };
    direction: 'left' | 'right';
    className?: string;
    dataTestId?: string;
}
export declare const GradientOverlay: ({ portalContainer, visible, position, size, direction, className, dataTestId, }: GradientOverlayProps) => ReactElement | null;

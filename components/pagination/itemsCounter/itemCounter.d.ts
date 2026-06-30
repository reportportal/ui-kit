import { ReactElement, ReactNode } from '../../../../node_modules/react';

export interface ItemCounterProps {
    activePage: number;
    pageSize: number;
    totalItems: number;
    ofText: string;
    itemsText: string;
    limitExceeded?: boolean;
    warningContent?: ReactNode;
    accentTotalTooltip?: ReactNode;
}
export declare const ItemCounter: ({ activePage, pageSize, totalItems, ofText, itemsText, limitExceeded, warningContent, accentTotalTooltip, }: ItemCounterProps) => ReactElement;

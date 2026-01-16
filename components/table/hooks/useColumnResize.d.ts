import { MutableRefObject } from '../../../../node_modules/react';
import { ResizeCallbackData } from 'react-resizable';
import { PrimaryColumn, FixedColumn } from '../types';

interface UseColumnResizeProps {
    enabled?: boolean;
    minWidth?: number;
    maxWidth?: number;
    columns?: (PrimaryColumn | FixedColumn)[];
    columnWidthsRef?: MutableRefObject<Map<string, number>>;
    onColumnResize?: (columnKey: string, width: number) => void;
    initialColumnWidths?: Record<string, number>;
}
interface UseColumnResizeReturn {
    columnWidths: Record<string, number>;
    handleResize: (columnKey: string) => (e: React.SyntheticEvent, data: ResizeCallbackData) => void;
    handleResizeStop: (columnKey: string) => () => void;
    handleResizeStart: () => void;
}
export declare const useColumnResize: ({ enabled, minWidth, maxWidth, columns, columnWidthsRef, onColumnResize, initialColumnWidths, }: UseColumnResizeProps) => UseColumnResizeReturn;
export {};

import { MutableRefObject } from '../../../../node_modules/react';
import { ResizeCallbackData } from 'react-resizable';

interface UseColumnResizeProps {
    enabled?: boolean;
    minWidth?: number;
    maxWidth?: number;
    columnWidthsRef?: MutableRefObject<Map<string, number>>;
    onColumnResize?: (columnKey: string, width: number) => void;
}
interface UseColumnResizeReturn {
    columnWidths: Record<string, number>;
    handleResize: (columnKey: string) => (e: React.SyntheticEvent, data: ResizeCallbackData) => void;
    handleResizeStop: (columnKey: string) => () => void;
    handleResizeStart: () => void;
}
export declare const useColumnResize: ({ enabled, minWidth, maxWidth, columnWidthsRef, onColumnResize, }: UseColumnResizeProps) => UseColumnResizeReturn;
export {};

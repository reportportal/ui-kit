import { MutableRefObject } from '../../../../node_modules/react';

interface UseColumnWidthsReturn {
    columnWidthsRef: MutableRefObject<Map<string, number>>;
    setCellRef: (columnKey: string) => (element: HTMLDivElement | null) => void;
}
export declare const useColumnWidths: () => UseColumnWidthsReturn;
export {};

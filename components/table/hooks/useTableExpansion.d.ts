import { Column, FixedColumn } from '../types';

interface UseTableExpansionProps {
    primaryColumns: Column[];
    fixedColumns: FixedColumn[];
    expandedRowIds: (string | number)[];
    onToggleRowExpansion: (id: string | number) => void;
}
interface UseTableExpansionReturn {
    expandedCells: Set<string>;
    handleToggleRowExpansion: (id: string | number) => void;
    isCellExpanded: (rowId: string | number, columnKey: string) => boolean;
}
export declare const useTableExpansion: ({ primaryColumns, fixedColumns, expandedRowIds, onToggleRowExpansion, }: UseTableExpansionProps) => UseTableExpansionReturn;
export {};

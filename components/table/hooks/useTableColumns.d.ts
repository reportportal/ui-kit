import { PrimaryColumn, FixedColumn, Column } from '../types';

interface UseTableColumnsProps {
    primaryColumns: Column[];
    fixedColumns: FixedColumn[];
    pinnedColumnKeys: string[];
}
interface UseTableColumnsReturn {
    pinnedColumns: (PrimaryColumn | FixedColumn)[];
    scrollableColumns: (PrimaryColumn | FixedColumn)[];
}
export declare const useTableColumns: ({ primaryColumns, fixedColumns, pinnedColumnKeys, }: UseTableColumnsProps) => UseTableColumnsReturn;
export {};

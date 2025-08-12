import { Column, RowData, SortConfig, SortingDirection } from './types';

export declare const isAsc: (direction: SortingDirection) => boolean;
export declare const sortTableData: (tableData: RowData[], sortConfig?: SortConfig) => RowData[];
export declare const getColumnsKeys: (columns: Column[]) => string[];
export declare const toggleDirection: (direction: SortingDirection) => "asc" | "desc";

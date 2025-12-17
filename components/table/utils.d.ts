import { CSSProperties, MutableRefObject } from '../../../node_modules/react';
import { Column, RowData, SortConfig, SortingDirection, PrimaryColumn, FixedColumn } from './types';

export declare const isAsc: (direction: SortingDirection) => boolean;
export declare const sortTableData: (tableData: RowData[], sortConfig?: SortConfig) => RowData[];
export declare const getColumnsKeys: (columns: Column[]) => string[];
export declare const toggleDirection: (direction: SortingDirection) => "asc" | "desc";
export declare const isPrimaryColumn: (column: PrimaryColumn | FixedColumn) => boolean;
export declare const getRowSizeClassName: (rowData: RowData) => string;
export declare const calculatePinnedPosition: (columnIndex: number, columns: (PrimaryColumn | FixedColumn)[], columnWidthsRef: MutableRefObject<Map<string, number>>, isRowsExpandable: boolean, selectable: boolean) => number;
export declare const getCellStyle: (column: FixedColumn | PrimaryColumn, isPinned: boolean, pinnedIndex: number | undefined, pinnedColumns: (PrimaryColumn | FixedColumn)[], columnWidthsRef: MutableRefObject<Map<string, number>>, isRowsExpandable: boolean, selectable: boolean) => CSSProperties;
export declare const getGridTemplateColumns: (pinnedColumns: (PrimaryColumn | FixedColumn)[], scrollableColumns: (PrimaryColumn | FixedColumn)[], isRowsExpandable: boolean, selectable: boolean, renderRowActions: boolean, isHeader?: boolean, columnWidths?: Record<string, number>) => string;

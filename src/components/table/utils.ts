import { CSSProperties } from 'react';
import {
  ASC,
  DESC,
  EXPANDABLE_CHECKBOX_COLUMN_WIDTH,
  PRIMARY_COLUMN_DEFAULT_WIDTH,
  ACTION_MENU_COLUMN_WIDTH,
} from './constants';
import { Column, RowData, SortConfig, SortingDirection, PrimaryColumn, FixedColumn } from './types';
import { isString } from '@common/utils';

export const isAsc = (direction: SortingDirection) => {
  return direction.toLowerCase() === ASC;
};

export const sortTableData = (tableData: RowData[], sortConfig?: SortConfig): RowData[] => {
  if (sortConfig) {
    tableData.sort((a, b) => {
      const contentA = a[sortConfig.key].content || a[sortConfig.key];
      const contentB = b[sortConfig.key].content || b[sortConfig.key];

      if (contentA < contentB) {
        return isAsc(sortConfig.direction) ? -1 : 1;
      }
      if (contentA > contentB) {
        return isAsc(sortConfig.direction) ? 1 : -1;
      }
      return 0;
    });
  }
  return tableData;
};

export const getColumnsKeys = (columns: Column[]): string[] => {
  return columns.map((column) => column.key);
};

export const toggleDirection = (direction: SortingDirection) => {
  return isAsc(direction) ? DESC : ASC;
};

export const isPrimaryColumn = (column: PrimaryColumn | FixedColumn): boolean => {
  return 'primary' in column && column.primary === true;
};

export const getRowSizeClassName = (rowData: RowData): string => {
  const rowSize = rowData.rowConfigs?.size ?? 'default';
  return `size-${rowSize}`;
};

export const calculatePinnedPosition = (
  columnIndex: number,
  columns: (PrimaryColumn | FixedColumn)[],
  columnWidthsRef: React.MutableRefObject<Map<string, number>>,
  isRowsExpandable: boolean,
  selectable: boolean,
): number => {
  let position = 0;

  if (isRowsExpandable) {
    position += EXPANDABLE_CHECKBOX_COLUMN_WIDTH;
  }

  if (selectable) {
    position += EXPANDABLE_CHECKBOX_COLUMN_WIDTH;
  }

  for (let i = 0; i < columnIndex; i++) {
    const column = columns[i];
    if (isPrimaryColumn(column)) {
      const actualWidth = columnWidthsRef.current.get(column.key) || PRIMARY_COLUMN_DEFAULT_WIDTH;
      position += actualWidth;
    } else {
      const fixedColumn = column as FixedColumn;
      const width = isString(fixedColumn.width)
        ? parseInt(fixedColumn.width, 10)
        : fixedColumn.width;
      position += width;
    }
  }
  return position;
};

export const getCellStyle = (
  column: FixedColumn | PrimaryColumn,
  isPinned: boolean,
  pinnedIndex: number | undefined,
  pinnedColumns: (PrimaryColumn | FixedColumn)[],
  columnWidthsRef: React.MutableRefObject<Map<string, number>>,
  isRowsExpandable: boolean,
  selectable: boolean,
): CSSProperties => {
  const baseStyle: CSSProperties = {};

  if (!isPrimaryColumn(column)) {
    const fixedColumn = column as FixedColumn;
    baseStyle.textAlign = fixedColumn.align;
  }

  if (isPinned && pinnedIndex !== undefined) {
    const leftPosition = calculatePinnedPosition(
      pinnedIndex,
      pinnedColumns,
      columnWidthsRef,
      isRowsExpandable,
      selectable,
    );
    baseStyle.left = `${leftPosition}px`;
  }

  return baseStyle;
};

export const getGridTemplateColumns = (
  pinnedColumns: (PrimaryColumn | FixedColumn)[],
  scrollableColumns: (PrimaryColumn | FixedColumn)[],
  isRowsExpandable: boolean,
  selectable: boolean,
  renderRowActions: boolean,
  isHeader = false,
): string => {
  const columns: string[] = [];

  if (isRowsExpandable) {
    columns.push(`${EXPANDABLE_CHECKBOX_COLUMN_WIDTH}px`);
  }

  if (isHeader && selectable) {
    columns.push(`${EXPANDABLE_CHECKBOX_COLUMN_WIDTH}px`);
  }

  const addColumnWidth = (column: Column) => {
    if (isPrimaryColumn(column as PrimaryColumn | FixedColumn)) {
      columns.push(`minmax(${PRIMARY_COLUMN_DEFAULT_WIDTH}px, 1fr)`);
    } else {
      const fixedColumn = column as FixedColumn;
      const width = isString(fixedColumn.width) ? fixedColumn.width : `${fixedColumn.width}px`;
      columns.push(width);
    }
  };

  pinnedColumns.forEach(addColumnWidth);
  scrollableColumns.forEach(addColumnWidth);

  if (renderRowActions) {
    columns.push(`${ACTION_MENU_COLUMN_WIDTH}px`);
  }

  return columns.join(' ');
};

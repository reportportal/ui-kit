import { ASC, DESC } from './constants';
import { Column, RowData, SortConfig, SortingDirection } from './types';

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

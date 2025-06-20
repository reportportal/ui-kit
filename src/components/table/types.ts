import { ReactNode } from 'react';
import { ASC, DESC } from './constants';

export interface Column {
  key: string;
  header: string;
}
export interface PrimaryColumn extends Column {
  primary: boolean;
}
export interface FixedColumn extends Column {
  width: string | number;
  align?: 'left' | 'center' | 'right';
}
export interface RowConfigs {
  size?: 'small' | 'medium' | 'large';
}
export interface DetailedCellData {
  content: string | number;
  component: ReactNode;
}
export interface MetaData {
  [key: string]: any;
}
export interface RowData {
  id: string | number;
  [key: string]: DetailedCellData | RowConfigs | string | number | any;
  rowConfigs?: RowConfigs;
  metaData?: MetaData;
}
export type SortingDirection = typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>;
export interface SortConfig {
  key: string;
  direction: SortingDirection;
}
export interface TableComponentProps {
  data: RowData[];
  primaryColumn: Column;
  fixedColumns: FixedColumn[];
  renderRowActions?: (metaData?: MetaData) => ReactNode;
  selectable?: boolean;
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  selectedRowIds?: (string | number)[];
  sortingDirection?: SortingDirection;
  sortingColumn?: Column;
  sortableColumns?: string[];
  onChangeSorting?: (sortConfig?: SortConfig) => void;
  onToggleRowSelection?: (id: string | number) => void;
  onToggleAllRowsSelection?: () => void;
}

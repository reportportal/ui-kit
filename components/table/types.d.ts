import { Dispatch, ReactNode, RefObject, SetStateAction } from '../../../node_modules/react';
import { ASC, DESC } from './constants';

export interface Column {
    key: string;
    header: string;
}
export interface PrimaryColumn extends Column {
    primary: boolean;
    width?: string | number;
    minWidth?: number;
    maxWidth?: number;
}
export interface FixedColumn extends Column {
    width: string | number;
    align?: 'left' | 'center' | 'right';
    minWidth?: number;
    maxWidth?: number;
}
export interface PinnedColumn extends FixedColumn {
    pinned: boolean;
    pinnedPosition?: number;
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
    primaryColumn: Column | Column[];
    fixedColumns: FixedColumn[];
    renderRowActions?: (metaData?: MetaData) => ReactNode;
    selectable?: boolean;
    isCheckboxOutside?: boolean;
    className?: string;
    wrapperClassName?: string;
    headerClassName?: string;
    bodyClassName?: string;
    rowClassName?: string;
    checkboxColumnClassName?: string;
    selectedRowIds?: (string | number)[];
    sortingDirection?: SortingDirection;
    sortingColumn?: Column;
    sortableColumns?: string[];
    isHeaderFixed?: boolean;
    isHorizontallyScrollable?: boolean;
    pinnedColumnKeys?: string[];
    isRowsExpandable?: boolean;
    expandedRowIds?: (string | number)[];
    isSelectAllCheckboxAlwaysVisible?: boolean;
    disabledRowIds?: (string | number)[];
    setExpandedRowIds?: Dispatch<SetStateAction<Set<string | number>>>;
    isAllExpandedByDefault?: boolean;
    expandAllTooltip?: ReactNode;
    sortDisabledColumnTooltips?: Record<string, ReactNode>;
    isResizable?: boolean;
    minColumnWidth?: number;
    maxColumnWidth?: number;
    onChangeSorting?: (sortConfig?: SortConfig) => void;
    onToggleRowSelection?: (id: string | number) => void;
    onToggleAllRowsSelection?: () => void;
    onToggleRowExpansion?: (id: string | number) => void;
    onToggleAllRowsExpansion?: () => void;
    onColumnResize?: (columnKey: string, width: number) => void;
    getRowCheckboxTooltip?: (rowId: string | number) => ReactNode;
    externalScrollContainerRef?: RefObject<HTMLElement> | RefObject<Element> | null | undefined;
    portalContainer?: HTMLElement | null;
    rightGradientClassName?: string;
    pinnedGradientClassName?: string;
}

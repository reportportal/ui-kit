import { CSSProperties, useMemo, useState, FC, useRef, useCallback } from 'react';
import styles from './table.module.scss';
import classNames from 'classnames/bind';
import { ArrowDownIcon, ArrowUpIcon, ChevronDownDropdownIcon } from '@components/icons';
import { Column, FixedColumn, PrimaryColumn, RowData, TableComponentProps } from './types';
import { Checkbox } from '@components/checkbox';
import { getColumnsKeys, isAsc } from './utils';
import { ASC } from './constants';

const cx = classNames.bind(styles);

export const Table: FC<TableComponentProps> = ({
  data,
  primaryColumns: primaryColumnsInput,
  fixedColumns,
  renderRowActions,
  className = '',
  rowClassName = '',
  headerClassName = '',
  selectable = false,
  selectedRowIds = [],
  sortingDirection = ASC,
  sortingColumn,
  sortableColumns,
  isHeaderFixed = false,
  isHorizontallyScrollable = false,
  pinnedColumnKeys = [],
  isRowsExpandable = false,
  expandedRowIds = [],
  onChangeSorting = () => {},
  onToggleRowSelection = () => {},
  onToggleAllRowsSelection = () => {},
  onToggleRowExpansion = () => {},
}) => {
  const primaryColumns = Array.isArray(primaryColumnsInput) ? primaryColumnsInput : [primaryColumnsInput];
  
  const defaultSortingColumn = sortingColumn ?? primaryColumns[0];
  const defaultSortableColumns = sortableColumns ?? getColumnsKeys([...primaryColumns, ...fixedColumns]);
  
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [expandedCells, setExpandedCells] = useState<Set<string>>(new Set());
  const columnWidthsRef = useRef<Map<string, number>>(new Map());
  const { pinnedColumns, scrollableColumns } = useMemo(() => {
    const pinned: (PrimaryColumn | FixedColumn)[] = [];
    const scrollable: (PrimaryColumn | FixedColumn)[] = [];
    
    primaryColumns.forEach(primaryCol => {
      const primaryColumn = { ...primaryCol, primary: true };
      if (pinnedColumnKeys.includes(primaryCol.key)) {
        pinned.push(primaryColumn);
      } else {
        scrollable.push(primaryColumn);
      }
    });
    
    fixedColumns.forEach(column => {
      if (pinnedColumnKeys.includes(column.key)) {
        pinned.push(column);
      } else {
        scrollable.push(column);
      }
    });
    
    return {
      pinnedColumns: pinned,
      scrollableColumns: scrollable
    };
  }, [primaryColumns, fixedColumns, pinnedColumnKeys]);

  const setCellRef = useCallback((columnKey: string) => (element: HTMLDivElement | null) => {
    if (element) {
      const width = element.getBoundingClientRect().width;
      if (width > 0) {
        columnWidthsRef.current.set(columnKey, width);
      }
    }
  }, []);

  const handleSort = (key: string) => {
    if (!defaultSortableColumns.includes(key)) return;
    onChangeSorting({ key, direction: sortingDirection });
  };

  const calculatePinnedPosition = (columnIndex: number, columns: (PrimaryColumn | FixedColumn)[]): number => {
    let position = 0;
    
    if (isRowsExpandable) {
      position += 32; 
    }
    
    for (let i = 0; i < columnIndex; i++) {
      const column = columns[i];
      const isPrimaryColumn = 'primary' in column && column.primary;
      if (isPrimaryColumn) {
        const actualWidth = columnWidthsRef.current.get(column.key) || 100;
        position += actualWidth;
      } else {
        const fixedColumn = column as FixedColumn;
        const width = typeof fixedColumn.width === 'string' ? parseInt(fixedColumn.width, 10) : fixedColumn.width;
        position += width;
      }
    }
    return position;
  };

  const getCellStyle = (column: FixedColumn | PrimaryColumn, isPinned = false, pinnedIndex?: number): CSSProperties => {
    const isPrimaryColumn = 'primary' in column && column.primary;
    
    const baseStyle: CSSProperties = {};
    
    if (!isPrimaryColumn) {
      const fixedColumn = column as FixedColumn;
      baseStyle.textAlign = fixedColumn.align;
    }
    
    if (isPinned && pinnedIndex !== undefined) {
      const leftPosition = calculatePinnedPosition(pinnedIndex, pinnedColumns);
      baseStyle.left = `${leftPosition}px`;
    }
    
    return baseStyle;
  };

  const handleColumnMouseEnter = (columnKey: string) => {
    setHoveredColumn(columnKey);
  };

  const handleColumnMouseLeave = () => {
    setHoveredColumn(null);
  };

  const handleRowMouseEnter = (rowIndex: number) => {
    setHoveredRow(rowIndex);
  };

  const handleRowMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleSingleRowSelection = (id: number | string) => {
    onToggleRowSelection(id);
  };

  const handleSelectAllRows = () => {
    onToggleAllRowsSelection();
  };

  const handleToggleRowExpansion = (id: string | number) => {
    const newExpandedCells = new Set(expandedCells);
    const isRowCurrentlyExpanded = expandedRowIds.includes(id);
    
    const allColumnKeys = [...primaryColumns.map(col => col.key), ...fixedColumns.map(col => col.key)];
    
    if (isRowCurrentlyExpanded) {
      allColumnKeys.forEach(columnKey => {
        const cellId = `${id}-${columnKey}`;
        newExpandedCells.delete(cellId);
      });
    } else {
      allColumnKeys.forEach(columnKey => {
        const cellId = `${id}-${columnKey}`;
        newExpandedCells.add(cellId);
      });
    }
    
    setExpandedCells(newExpandedCells);
    onToggleRowExpansion(id);
  };

  const isCellExpanded = (rowId: string | number, columnKey: string): boolean => {
    const cellId = `${rowId}-${columnKey}`;
    return expandedCells.has(cellId);
  };

  const isAllRowsSelected: boolean = data.every((row) => selectedRowIds.includes(row.id));
  const isAnyRowSelected: boolean = data.some((row) => selectedRowIds.includes(row.id));
  const hasSelectedRows = selectedRowIds?.length > 0;

  const getRowSizeClassName = (rowData: RowData): string => {
    const rowSize = rowData.rowConfigs?.size ?? 'default';
    return `size-${rowSize}`;
  };

  const getSortIcon = (columnKey: string) => {
    if (!defaultSortableColumns.includes(columnKey)) return null;
    
    if (defaultSortingColumn?.key === columnKey) {
      return isAsc(sortingDirection) ? <ArrowUpIcon /> : <ArrowDownIcon />;
    }
    
    return <ArrowUpIcon />;
  };

  const getGridTemplateColumns = (): string => {
    const columns: string[] = [];
    
    if (isRowsExpandable) {
      columns.push('32px');
    }
    
    const addColumnWidth = (column: Column) => {
      const isPrimaryColumn = 'primary' in column && column.primary;
      if (isPrimaryColumn) {
        columns.push('minmax(100px, 1fr)');
      } else {
        const fixedColumn = column as FixedColumn;
        const width = typeof fixedColumn.width === 'string' ? fixedColumn.width : `${fixedColumn.width}px`;
        columns.push(width);
      }
    };
    
    pinnedColumns.forEach(addColumnWidth);
    scrollableColumns.forEach(addColumnWidth);
    
    if (renderRowActions) {
      columns.push('48px');
    }
    
    return columns.join(' ');
  };

  const gridTemplateColumns = getGridTemplateColumns();

  return (
    <div className={cx('table', { 
      'fixed-header': isHeaderFixed,
      'horizontally-scrollable-container': isHeaderFixed && isHorizontallyScrollable
    }, className)}>
      <div 
        className={cx('table-header', { 
          'sticky-header': isHeaderFixed,
          'horizontally-scrollable': isHorizontallyScrollable
        }, headerClassName)}
        style={{ gridTemplateColumns }}>
       
        {selectable && (
          <div className={cx('table-header-cell', 'checkbox-cell')}>
            {hasSelectedRows && (
              <Checkbox
                value={isAllRowsSelected}
                partiallyChecked={isAnyRowSelected}
                onChange={handleSelectAllRows}
                className={cx('checkbox-cell')}
              />
            )}
          </div>
        )}
         {isRowsExpandable && (
          <div className={cx('table-header-cell', 'expand-cell')}>
          <button onClick={() => {}}>
            <span className={cx('expand-icon', { 'expanded': true })}>
              <ChevronDownDropdownIcon />
            </span>
          </button>
        </div>
        )}
        {pinnedColumns.map((column, index) => (
          <button
            key={column.key}
            className={cx('table-header-cell', 'pinned-column', {
              [`align-${(column as FixedColumn).align}`]: 'align' in column,
              'primary-cell': 'primary' in column && column.primary,
              'sortable-cell': defaultSortableColumns.includes(column.key),
            })}
            style={getCellStyle(column, true, index)}
          >
            <div
              className={cx('label')}
              onClick={() => handleSort(column.key)}
              onMouseEnter={() => handleColumnMouseEnter(column.key)}
              onMouseLeave={handleColumnMouseLeave}
            >
              <span>{column.header}</span>
              {(hoveredColumn === column.key || defaultSortingColumn?.key === column.key) &&
                getSortIcon(column.key)}
            </div>
          </button>
        ))}
        {scrollableColumns.map((column) => (
          <button
            key={column.key}
            className={cx('table-header-cell', {
              [`align-${(column as FixedColumn).align}`]: 'align' in column,
              'primary-cell': 'primary' in column && column.primary,
              'sortable-cell': defaultSortableColumns.includes(column.key),
            })}
            style={getCellStyle(column)}
          >
            <div
              className={cx('label')}
              onClick={() => handleSort(column.key)}
              onMouseEnter={() => handleColumnMouseEnter(column.key)}
              onMouseLeave={handleColumnMouseLeave}
            >
              <span>{column.header}</span>
              {(hoveredColumn === column.key || defaultSortingColumn?.key === column.key) &&
                getSortIcon(column.key)}
            </div>
          </button>
        ))}
        {renderRowActions && <div className={cx('table-header-cell', 'action-menu-cell')} />}
      </div>

      <div 
        className={cx('table-body', { 
          'scrollable-body': isHeaderFixed,
          'horizontally-scrollable': isHorizontallyScrollable
        })}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={cx('table-row', getRowSizeClassName(item), rowClassName)}
            onMouseEnter={() => handleRowMouseEnter(index)}
            onMouseLeave={handleRowMouseLeave}
          >
            {selectable && (
              <div className={cx('table-cell', 'checkbox-cell')}>
                {(hasSelectedRows || hoveredRow === index) && (
                  <Checkbox
                    value={selectedRowIds.includes(item.id)}
                    onChange={() => handleSingleRowSelection(item.id)}
                    className={cx('checkbox-cell')}
                  />
                )}
              </div>
            )}
            <div className={cx('table-row-content')} style={{ gridTemplateColumns }}>
              {isRowsExpandable && (
                <div className={cx('table-cell', 'expand-cell')}>
                  <button onClick={() => handleToggleRowExpansion(item.id)}>
                    <span className={cx('expand-icon', { 'expanded': expandedRowIds.includes(item.id) })}>
                      <ChevronDownDropdownIcon />
                    </span>
                  </button>
                </div>
              )}
              {pinnedColumns.map((column, colIndex) => {
                const isPrimaryColumn = 'primary' in column && column.primary;
                const isExpanded = isCellExpanded(item.id, column.key);
                
                return (
                  <div
                    key={column.key}
                    ref={isPrimaryColumn ? setCellRef(column.key) : undefined}
                    className={cx('table-cell', 'pinned-column', {
                      'primary-cell': isPrimaryColumn,
                      'expanded-cell': isExpanded,
                    })}
                    style={getCellStyle(column, true, colIndex)}
                  >
                    {item[column.key].component || item[column.key].content || item[column.key]}
                  </div>
                );
              })}
              {scrollableColumns.map((column) => {
                const isPrimaryColumn = 'primary' in column && column.primary;
                const isExpanded = isCellExpanded(item.id, column.key);
                
                return (
                  <div
                    key={column.key}
                    ref={isPrimaryColumn ? setCellRef(column.key) : undefined}
                    className={cx('table-cell', {
                      'primary-cell': isPrimaryColumn,
                      'expanded-cell': isExpanded,
                    })}
                    style={getCellStyle(column)}
                  >
                    {item[column.key].component || item[column.key].content || item[column.key]}
                  </div>
                );
              })}

              {renderRowActions && (
                <div className={cx('table-cell', 'action-menu-cell')}>
                  {renderRowActions(item.metaData)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

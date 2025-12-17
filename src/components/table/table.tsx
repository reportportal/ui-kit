import { useMemo, FC, useEffect, useRef, useState } from 'react';
import { Resizable } from 'react-resizable';
import styles from './table.module.scss';
import classNames from 'classnames/bind';
import { ArrowDownIcon, ArrowUpIcon, ChevronDownDropdownIcon } from '@components/icons';
import { TableComponentProps, FixedColumn, Column, PrimaryColumn } from './types';
import { Checkbox } from '@components/checkbox';
import { Tooltip } from '@components/tooltip';
import {
  getColumnsKeys,
  isPrimaryColumn,
  getRowSizeClassName,
  getCellStyle,
  getGridTemplateColumns,
  isAsc,
} from './utils';
import { ASC, EXPANDABLE_CHECKBOX_COLUMN_WIDTH } from './constants';
import {
  useTableColumns,
  useTableHover,
  useTableExpansion,
  useColumnWidths,
  useColumnResize,
} from './hooks';
import { ResizeHandle } from './resizeHandle';

const cx = classNames.bind(styles);

const ColumnHeaderText: FC<{ column: PrimaryColumn | FixedColumn }> = ({ column }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      const scrollWidth = spanRef.current.scrollWidth;
      setShowTitle(scrollWidth > width);
    }
  }, [column.header]);

  return (
    <span ref={spanRef} title={showTitle ? column.header : undefined}>
      {column.header}
    </span>
  );
};

export const Table: FC<TableComponentProps> = ({
  data,
  primaryColumn: primaryColumnsInput,
  fixedColumns,
  renderRowActions,
  className = '',
  rowClassName = '',
  headerClassName = '',
  bodyClassName = '',
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
  isAllExpandedByDefault,
  expandAllTooltip,
  isResizable = false,
  minColumnWidth = 50,
  maxColumnWidth = 500,
  onChangeSorting = () => {},
  onToggleRowSelection = () => {},
  onToggleAllRowsSelection = () => {},
  onToggleRowExpansion = () => {},
  onToggleAllRowsExpansion = () => {},
  onColumnResize = () => {},
}) => {
  const primaryColumns: Column[] = useMemo(
    () => (Array.isArray(primaryColumnsInput) ? primaryColumnsInput : [primaryColumnsInput]),
    [primaryColumnsInput],
  );

  const defaultSortingColumn = sortingColumn ?? primaryColumns[0];
  const defaultSortableColumns =
    sortableColumns ?? getColumnsKeys([...primaryColumns, ...fixedColumns]);

  const { pinnedColumns, scrollableColumns } = useTableColumns({
    primaryColumns,
    fixedColumns,
    pinnedColumnKeys,
  });

  const {
    hoveredColumn,
    hoveredRow,
    handleColumnMouseEnter,
    handleColumnMouseLeave,
    handleRowMouseEnter,
    handleRowMouseLeave,
  } = useTableHover();

  const { columnWidthsRef, setCellRef } = useColumnWidths();

  const { handleToggleRowExpansion, isCellExpanded } = useTableExpansion({
    primaryColumns,
    fixedColumns,
    expandedRowIds,
    onToggleRowExpansion,
  });

  const { columnWidths, handleResize, handleResizeStop, handleResizeStart } = useColumnResize({
    enabled: isResizable,
    minWidth: minColumnWidth,
    maxWidth: maxColumnWidth,
    columnWidthsRef,
    onColumnResize,
  });

  const wrapWithResizable = (column: PrimaryColumn | FixedColumn, headerCell: JSX.Element) => (
    <Resizable
      key={column.key}
      width={
        columnWidths[column.key] ??
        (typeof column.width === 'number' ? column.width : minColumnWidth)
      }
      height={0}
      axis="x"
      handle={<ResizeHandle />}
      onResizeStart={handleResizeStart}
      onResize={handleResize(column.key)}
      onResizeStop={handleResizeStop(column.key)}
      minConstraints={[minColumnWidth, 0]}
      maxConstraints={[maxColumnWidth, 0]}
    >
      {headerCell}
    </Resizable>
  );

  const handleSort = (key: string) => {
    if (!defaultSortableColumns.includes(key)) return;
    onChangeSorting({ key, direction: sortingDirection });
  };

  const handleSingleRowSelection = (id: number | string) => {
    onToggleRowSelection(id);
  };

  const handleSelectAllRows = () => {
    onToggleAllRowsSelection();
  };

  const handleToggleAllRowsExpansion = () => {
    onToggleAllRowsExpansion();
  };

  const getSortIcon = (columnKey: string) => {
    if (!defaultSortableColumns.includes(columnKey)) return null;

    if (defaultSortingColumn?.key === columnKey) {
      return isAsc(sortingDirection) ? <ArrowUpIcon /> : <ArrowDownIcon />;
    }

    return <ArrowUpIcon />;
  };

  const isAllRowsSelected: boolean = data.every((row) => selectedRowIds.includes(row.id));
  const isAnyRowSelected: boolean = data.some((row) => selectedRowIds.includes(row.id));
  const hasSelectedRows = selectedRowIds?.length > 0;

  const isAllRowsExpanded: boolean = data.every((row) => expandedRowIds.includes(row.id));
  const expandAllIconState =
    isAllExpandedByDefault !== undefined ? isAllExpandedByDefault : isAllRowsExpanded;

  const gridTemplateColumns = getGridTemplateColumns(
    pinnedColumns,
    scrollableColumns,
    isRowsExpandable,
    selectable,
    !!renderRowActions,
    false,
    isResizable ? columnWidths : undefined,
  );

  const headerGridTemplateColumns = getGridTemplateColumns(
    pinnedColumns,
    scrollableColumns,
    isRowsExpandable,
    selectable,
    !!renderRowActions,
    true,
    isResizable ? columnWidths : undefined,
  );

  const expandAllButton = (
    <button onClick={handleToggleAllRowsExpansion} aria-label="Toggle all rows expansion">
      <span className={cx('expand-icon', { expanded: expandAllIconState })}>
        <ChevronDownDropdownIcon />
      </span>
    </button>
  );

  return (
    <div
      className={cx(
        'table',
        {
          'fixed-header': isHeaderFixed,
          'horizontally-scrollable-container':
            isHeaderFixed && (isHorizontallyScrollable || isResizable),
        },
        className,
      )}
    >
      <div
        className={cx(
          'table-header',
          {
            'sticky-header': isHeaderFixed,
            'horizontally-scrollable': isHorizontallyScrollable,
            resizable: isResizable,
          },
          headerClassName,
        )}
        style={{ gridTemplateColumns: headerGridTemplateColumns }}
      >
        {selectable && (
          <div
            className={cx('table-header-cell', 'checkbox-cell')}
            style={{ left: isRowsExpandable ? `${EXPANDABLE_CHECKBOX_COLUMN_WIDTH}px` : '0' }}
          >
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
          <div className={cx('table-header-cell', 'expand-cell')} style={{ left: '0' }}>
            {expandAllTooltip ? (
              <Tooltip
                content={expandAllTooltip}
                placement="top"
                wrapperClassName={cx('expand-all-tooltip-wrapper')}
                contentClassName={cx('expand-all-tooltip-content')}
              >
                {expandAllButton}
              </Tooltip>
            ) : (
              expandAllButton
            )}
          </div>
        )}
        {pinnedColumns.map((column, index) => {
          const headerCell = (
            <button
              key={column.key}
              className={cx('table-header-cell', 'pinned-column', {
                [`align-${(column as FixedColumn).align}`]: 'align' in column,
                'primary-cell': isPrimaryColumn(column),
                'sortable-cell': defaultSortableColumns.includes(column.key),
                resizable: isResizable,
              })}
              style={getCellStyle(
                column,
                true,
                index,
                pinnedColumns,
                columnWidthsRef,
                isRowsExpandable,
                selectable,
              )}
            >
              <div
                className={cx('label')}
                onClick={() => handleSort(column.key)}
                onMouseEnter={() => handleColumnMouseEnter(column.key)}
                onMouseLeave={handleColumnMouseLeave}
              >
                <ColumnHeaderText column={column} />
                {(hoveredColumn === column.key || defaultSortingColumn?.key === column.key) &&
                  getSortIcon(column.key)}
              </div>
            </button>
          );

          return isResizable ? wrapWithResizable(column, headerCell) : headerCell;
        })}
        {scrollableColumns.map((column) => {
          const headerCell = (
            <button
              key={column.key}
              className={cx('table-header-cell', {
                [`align-${(column as FixedColumn).align}`]: 'align' in column,
                'primary-cell': isPrimaryColumn(column),
                'sortable-cell': defaultSortableColumns.includes(column.key),
                resizable: isResizable,
              })}
              style={getCellStyle(
                column,
                false,
                undefined,
                pinnedColumns,
                columnWidthsRef,
                isRowsExpandable,
                selectable,
              )}
            >
              <div
                className={cx('label')}
                onClick={() => handleSort(column.key)}
                onMouseEnter={() => handleColumnMouseEnter(column.key)}
                onMouseLeave={handleColumnMouseLeave}
              >
                <ColumnHeaderText column={column} />
                {(hoveredColumn === column.key || defaultSortingColumn?.key === column.key) &&
                  getSortIcon(column.key)}
              </div>
            </button>
          );

          return isResizable ? wrapWithResizable(column, headerCell) : headerCell;
        })}
        {renderRowActions && <div className={cx('table-header-cell', 'action-menu-cell')} />}
      </div>

      <div
        className={cx(
          'table-body',
          {
            'scrollable-body': isHeaderFixed,
            'horizontally-scrollable': isHorizontallyScrollable,
            resizable: isResizable,
          },
          bodyClassName,
        )}
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className={cx('table-row', getRowSizeClassName(item), rowClassName, {
              selectable: selectable,
            })}
            onMouseEnter={() => handleRowMouseEnter(index)}
            onMouseLeave={handleRowMouseLeave}
          >
            {selectable && (
              <div
                className={cx('table-cell', 'checkbox-cell')}
                style={{ left: isRowsExpandable ? `${EXPANDABLE_CHECKBOX_COLUMN_WIDTH}px` : '0' }}
              >
                {(hasSelectedRows || hoveredRow === index) && (
                  <Checkbox
                    value={selectedRowIds.includes(item.id)}
                    onChange={() => handleSingleRowSelection(item.id)}
                    className={cx('checkbox-cell')}
                  />
                )}
              </div>
            )}
            <div className={cx('row-content-wrapper')}>
              <div className={cx('table-row-content')} style={{ gridTemplateColumns }}>
                {isRowsExpandable && (
                  <div className={cx('table-cell', 'expand-cell')} style={{ left: '0' }}>
                    <button
                      onClick={() => handleToggleRowExpansion(item.id)}
                      aria-label={expandedRowIds.includes(item.id) ? 'Collapse row' : 'Expand row'}
                      aria-expanded={expandedRowIds.includes(item.id)}
                    >
                      <span
                        className={cx('expand-icon', {
                          expanded: expandedRowIds.includes(item.id),
                        })}
                      >
                        <ChevronDownDropdownIcon />
                      </span>
                    </button>
                  </div>
                )}
                {pinnedColumns.map((column, colIndex) => {
                  const isExpanded = isCellExpanded(item.id, column.key);
                  const isPrimary = isPrimaryColumn(column);

                  return (
                    <div
                      key={column.key}
                      ref={isPrimary ? setCellRef(column.key) : undefined}
                      className={cx('table-cell', 'pinned-column', {
                        'primary-cell': isPrimary,
                        'expanded-cell': isExpanded,
                      })}
                      style={getCellStyle(
                        column,
                        true,
                        colIndex,
                        pinnedColumns,
                        columnWidthsRef,
                        isRowsExpandable,
                        selectable,
                      )}
                    >
                      {item[column.key].component || item[column.key].content || item[column.key]}
                    </div>
                  );
                })}
                {scrollableColumns.map((column) => {
                  const isExpanded = isCellExpanded(item.id, column.key);
                  const isPrimary = isPrimaryColumn(column);

                  return (
                    <div
                      key={column.key}
                      ref={isPrimary ? setCellRef(column.key) : undefined}
                      className={cx('table-cell', {
                        'primary-cell': isPrimary,
                        'expanded-cell': isExpanded,
                      })}
                      style={getCellStyle(
                        column,
                        false,
                        undefined,
                        pinnedColumns,
                        columnWidthsRef,
                        isRowsExpandable,
                        selectable,
                      )}
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
          </div>
        ))}
      </div>
    </div>
  );
};

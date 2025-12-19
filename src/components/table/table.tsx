import { useMemo, FC, useEffect, useRef, useState } from 'react';
import { Resizable } from 'react-resizable';
import { isEmpty } from 'es-toolkit/compat';
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
  isSelectAllCheckboxAlwaysVisible = false,
  onChangeSorting = () => {},
  onToggleRowSelection = () => {},
  onToggleAllRowsSelection = () => {},
  onToggleRowExpansion = () => {},
  onToggleAllRowsExpansion = () => {},
  onColumnResize = () => {},
  externalScrollContainerRef,
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
      className={cx('resizable-column')}
    >
      {headerCell}
    </Resizable>
  );
  const tableRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isHeaderPinned, setIsHeaderPinned] = useState(false);
  const isUnpinningRef = useRef(false);
  const prevExpandedRowIdsRef = useRef<Set<string | number>>(new Set());

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
  const hasRows = !isEmpty(data);
  const isSelectAllCheckboxVisible =
    (isSelectAllCheckboxAlwaysVisible && hasRows) || hasSelectedRows;

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
    isResizable,
  );

  const headerGridTemplateColumns = getGridTemplateColumns(
    pinnedColumns,
    scrollableColumns,
    isRowsExpandable,
    selectable,
    !!renderRowActions,
    true,
    isResizable ? columnWidths : undefined,
    isResizable,
  );

  const expandAllButton = (
    <button onClick={handleToggleAllRowsExpansion} aria-label="Toggle all rows expansion">
      <span className={cx('expand-icon', { expanded: expandAllIconState })}>
        <ChevronDownDropdownIcon />
      </span>
    </button>
  );

  useEffect(() => {
    if (!externalScrollContainerRef?.current || !tableRef.current || !headerRef.current) {
      return undefined;
    }

    const scrollContainer = externalScrollContainerRef.current;
    const table = tableRef.current;
    const header = headerRef.current;

    const updatePinnedState = () => {
      const tableRect = table.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const headerHeight = header.offsetHeight;

      const tableTop = tableRect.top - containerRect.top;
      const tableBottom = tableRect.bottom - containerRect.top;
      const { scrollTop } = scrollContainer;
      const shouldPin = scrollTop > 0 && tableTop <= 0 && tableBottom > headerHeight;

      setIsHeaderPinned(shouldPin);

      if (shouldPin) {
        const tableLeft = tableRect.left;
        const topOffset = containerRect.top;

        header.classList.add(cx('pinned-header'));
        // Immediately hide overflow to prevent scrollbar flicker
        if (isHorizontallyScrollable) {
          header.style.overflow = 'hidden';
          header.style.overflowX = 'hidden';
        }
        header.style.left = `${tableLeft}px`;
        header.style.top = `${topOffset}px`;
        header.style.width = `${tableRect.width}px`;
      } else {
        // Save table scroll position before unpinning to prevent loss
        const savedScrollLeft = table.scrollLeft;

        // Set flag to prevent scroll sync during unpinning
        isUnpinningRef.current = true;

        header.classList.remove(cx('pinned-header'));
        // Reset header scroll to prevent sync conflicts
        if (isHorizontallyScrollable) {
          header.scrollLeft = 0;
        }
        header.style.left = '';
        header.style.top = '';
        header.style.width = '';
        // Restore overflow when unpinned
        if (isHorizontallyScrollable) {
          header.style.overflow = '';
          header.style.overflowX = '';
        }

        // Restore table scroll position after a brief delay to ensure DOM updates
        if (isHorizontallyScrollable && savedScrollLeft > 0) {
          requestAnimationFrame(() => {
            table.scrollLeft = savedScrollLeft;
            // Reset flag after scroll is restored
            setTimeout(() => {
              isUnpinningRef.current = false;
            }, 0);
          });
        } else {
          // Reset flag immediately if no scroll to restore
          isUnpinningRef.current = false;
        }
      }
    };

    const timeoutId = setTimeout(() => {
      updatePinnedState();
    }, 200);

    scrollContainer.addEventListener('scroll', updatePinnedState);
    window.addEventListener('resize', updatePinnedState);

    return () => {
      clearTimeout(timeoutId);
      scrollContainer.removeEventListener('scroll', updatePinnedState);
      window.removeEventListener('resize', updatePinnedState);
    };
  }, [externalScrollContainerRef]);

  useEffect(() => {
    if (
      !externalScrollContainerRef?.current ||
      !tableRef.current ||
      !headerRef.current ||
      !isHeaderPinned
    ) {
      return undefined;
    }

    const scrollContainer = externalScrollContainerRef.current;
    const table = tableRef.current;
    const header = headerRef.current;

    const updateHeaderPosition = () => {
      const tableRect = table.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();

      header.style.left = `${tableRect.left}px`;
      header.style.top = `${containerRect.top}px`;
      header.style.width = `${tableRect.width}px`;
    };

    const syncHorizontalScroll = (source: HTMLElement) => {
      // Skip sync during unpinning to prevent scroll position loss
      if (isUnpinningRef.current) {
        return;
      }
      if (source === header) {
        table.scrollLeft = header.scrollLeft;
      } else {
        header.scrollLeft = table.scrollLeft;
      }
    };

    const handleTableScroll = () => {
      syncHorizontalScroll(table);
      updateHeaderPosition();
    };

    const handleHeaderScroll = () => {
      syncHorizontalScroll(header);
    };

    const handleContainerScroll = () => {
      updateHeaderPosition();
    };

    table.addEventListener('scroll', handleTableScroll);
    if (isHorizontallyScrollable) {
      header.addEventListener('scroll', handleHeaderScroll);
    }
    scrollContainer.addEventListener('scroll', handleContainerScroll);
    window.addEventListener('resize', updateHeaderPosition);
    syncHorizontalScroll(table);
    updateHeaderPosition();

    return () => {
      table.removeEventListener('scroll', handleTableScroll);
      if (isHorizontallyScrollable) {
        header.removeEventListener('scroll', handleHeaderScroll);
      }
      scrollContainer.removeEventListener('scroll', handleContainerScroll);
      window.removeEventListener('resize', updateHeaderPosition);
    };
  }, [isHeaderPinned, externalScrollContainerRef, isHorizontallyScrollable]);

  useEffect(() => {
    if (!tableRef.current || !isHorizontallyScrollable) {
      return undefined;
    }

    const table = tableRef.current;
    const header = headerRef.current;
    const scrollContainer = externalScrollContainerRef?.current;

    const updateTableGradients = () => {
      const allElements = Array.from(table.querySelectorAll('*'));
      const getElementClassName = (el: Element): string => {
        const { className: elementClassName } = el as HTMLElement;
        if (typeof elementClassName === 'string') return elementClassName;
        if (typeof elementClassName === 'object' && elementClassName !== null) {
          return Object.values(elementClassName).join(' ') || '';
        }
        return '';
      };

      const pinnedColumnElements = allElements.filter((el) => {
        const elementClassName = getElementClassName(el);
        return elementClassName.includes('pinned-column');
      });

      const hasLeftScroll = table.scrollLeft > 0;

      if (hasLeftScroll && pinnedColumnElements.length > 0) {
        // Group pinned columns by their index to find the last one
        const pinnedByIndex = new Map<number, HTMLElement[]>();
        pinnedColumnElements.forEach((col) => {
          const htmlCol = col as HTMLElement;
          const pinnedIndex = parseInt(htmlCol.getAttribute('data-pinned-index') || '-1', 10);
          if (pinnedIndex >= 0) {
            if (!pinnedByIndex.has(pinnedIndex)) {
              pinnedByIndex.set(pinnedIndex, []);
            }
            const pinnedArray = pinnedByIndex.get(pinnedIndex);
            if (pinnedArray) {
              pinnedArray.push(htmlCol);
            }
          }
        });

        // Find the maximum index (last pinned column)
        const maxIndex =
          pinnedByIndex.size > 0 ? Math.max(...Array.from(pinnedByIndex.keys())) : -1;

        // Add class only to elements with maximum index (last pinned column)
        pinnedColumnElements.forEach((column) => {
          const htmlCol = column as HTMLElement;
          const pinnedIndex = parseInt(htmlCol.getAttribute('data-pinned-index') || '-1', 10);
          if (pinnedIndex === maxIndex) {
            htmlCol.classList.add(cx('has-scroll'));
          } else {
            htmlCol.classList.remove(cx('has-scroll'));
          }
        });
      } else {
        // Remove class from all pinned columns
        pinnedColumnElements.forEach((column) => {
          (column as HTMLElement).classList.remove(cx('has-scroll'));
        });
      }

      const hasRightScroll = table.scrollLeft + table.clientWidth < table.scrollWidth;

      if (hasRightScroll) {
        const tableRect = table.getBoundingClientRect();
        let gradientTop: number;
        let gradientHeight: number;

        if (isHeaderPinned && scrollContainer) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const headerHeight = header?.offsetHeight || 0;
          gradientTop = containerRect.top + headerHeight;
          gradientHeight = containerRect.height - headerHeight;
        } else {
          gradientTop = tableRect.top + 36;
          gradientHeight = tableRect.height - 24;
        }

        const gradientRight = window.innerWidth - tableRect.right - 18;

        table.classList.add(cx('has-right-scroll'));
        table.style.setProperty('--right-gradient-top', `${gradientTop}px`);
        table.style.setProperty('--right-gradient-right', `${gradientRight}px`);
        table.style.setProperty('--right-gradient-height', `${gradientHeight}px`);
      } else {
        table.classList.remove(cx('has-right-scroll'));
        table.style.removeProperty('--right-gradient-top');
        table.style.removeProperty('--right-gradient-right');
        table.style.removeProperty('--right-gradient-height');
      }
    };

    const handleTableScrollForGradients = () => {
      updateTableGradients();
    };

    const handleContainerScrollForGradients = () => {
      updateTableGradients();
    };

    table.addEventListener('scroll', handleTableScrollForGradients, { passive: true });
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleContainerScrollForGradients, {
        passive: true,
      });
    }
    window.addEventListener('resize', updateTableGradients);
    updateTableGradients();

    // Use ResizeObserver to track table size changes (e.g., when rows expand/collapse)
    const resizeObserver = new ResizeObserver(() => {
      updateTableGradients();
    });

    if (table) {
      resizeObserver.observe(table);
    }

    return () => {
      table.removeEventListener('scroll', handleTableScrollForGradients);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleContainerScrollForGradients);
      }
      window.removeEventListener('resize', updateTableGradients);
      resizeObserver.disconnect();
    };
  }, [isHorizontallyScrollable, externalScrollContainerRef, isHeaderPinned, expandedRowIds]);

  // Initialize all left-border-accent styles on mount and when data changes
  useEffect(() => {
    if (!tableRef.current) {
      return undefined;
    }

    const table = tableRef.current;
    const header = headerRef.current;

    const updateLeftBorderAccentStyle = (element: HTMLElement) => {
      // Exclude header cells
      if (header && header.contains(element)) {
        return;
      }

      const rowContent = element.parentElement as HTMLElement;
      if (!rowContent) {
        return;
      }

      const rowContentStyle = window.getComputedStyle(rowContent);
      const paddingTop = parseFloat(rowContentStyle.paddingTop) || 0;
      const paddingBottom = parseFloat(rowContentStyle.paddingBottom) || 0;

      // Element height + padding from parent (rowContent) to cover full height
      const elementHeight = element.offsetHeight;
      const totalHeight = elementHeight + paddingTop + paddingBottom;

      element.style.setProperty('--expand-cell-top', `${paddingTop}px`);
      element.style.setProperty('--expand-cell-height', `${totalHeight}px`);
    };

    const updateAllLeftBorderAccentStyles = () => {
      // Find all expand-cells by data attribute
      // Can't use class selectors due to CSS Modules hashing
      const expandCells = Array.from(table.querySelectorAll<HTMLElement>('[data-base-left="0"]'));
      expandCells.forEach(updateLeftBorderAccentStyle);
    };

    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      updateAllLeftBorderAccentStyles();
    });
  }, [isRowsExpandable, data]);

  // Update only changed rows on expand/collapse
  useEffect(() => {
    if (!tableRef.current) {
      return undefined;
    }

    const table = tableRef.current;
    const header = headerRef.current;
    const currentExpanded = new Set(expandedRowIds);
    const prevExpanded = prevExpandedRowIdsRef.current;

    // Find rows that changed (expanded or collapsed)
    const changedRowIds = new Set<string | number>();
    expandedRowIds.forEach((id) => {
      if (!prevExpanded.has(id)) {
        changedRowIds.add(id);
      }
    });
    prevExpanded.forEach((id) => {
      if (!currentExpanded.has(id)) {
        changedRowIds.add(id);
      }
    });

    if (changedRowIds.size === 0) {
      prevExpandedRowIdsRef.current = currentExpanded;
      return undefined;
    }

    const updateLeftBorderAccentStyle = (element: HTMLElement) => {
      // Exclude header cells
      if (header && header.contains(element)) {
        return;
      }

      const rowContent = element.parentElement as HTMLElement;
      if (!rowContent) {
        return;
      }

      const rowContentStyle = window.getComputedStyle(rowContent);
      const paddingTop = parseFloat(rowContentStyle.paddingTop) || 0;
      const paddingBottom = parseFloat(rowContentStyle.paddingBottom) || 0;

      // Element height + padding from parent (rowContent) to cover full height
      const elementHeight = element.offsetHeight;
      const totalHeight = elementHeight + paddingTop + paddingBottom;

      element.style.setProperty('--expand-cell-top', `${paddingTop}px`);
      element.style.setProperty('--expand-cell-height', `${totalHeight}px`);
    };

    // Update only changed rows
    requestAnimationFrame(() => {
      changedRowIds.forEach((rowId) => {
        const expandCell = table.querySelector<HTMLElement>(
          `[data-base-left="0"][data-row-id="${rowId}"]`,
        );
        if (expandCell) {
          updateLeftBorderAccentStyle(expandCell);
        }
      });
    });

    prevExpandedRowIdsRef.current = currentExpanded;
  }, [isRowsExpandable, expandedRowIds]);

  return (
    <div
      ref={tableRef}
      className={cx(
        'table',
        {
          'fixed-header': isHeaderFixed,
          'horizontally-scrollable-container':
            isHeaderFixed && (isHorizontallyScrollable || isResizable),
          'external-scroll-container': isHeaderFixed && !!externalScrollContainerRef,
        },
        className,
      )}
    >
      <div
        ref={headerRef}
        className={cx(
          'table-header',
          {
            'sticky-header': isHeaderFixed && !isHeaderPinned,
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
            data-base-left={isRowsExpandable ? EXPANDABLE_CHECKBOX_COLUMN_WIDTH : 0}
          >
            {isSelectAllCheckboxVisible && (
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
          <div
            className={cx('table-header-cell', 'expand-cell', 'left-border-accent')}
            data-base-left="0"
          >
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
              data-column-key={column.key}
              data-pinned-index={index}
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
        ref={bodyRef}
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
                data-base-left={isRowsExpandable ? EXPANDABLE_CHECKBOX_COLUMN_WIDTH : 0}
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
                  <div
                    className={cx('table-cell', 'expand-cell', 'left-border-accent')}
                    data-base-left="0"
                    data-row-id={item.id}
                  >
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
                      data-column-key={column.key}
                      data-pinned-index={colIndex}
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

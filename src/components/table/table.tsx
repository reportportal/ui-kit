import { useMemo, FC, useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react';
import { Resizable } from 'react-resizable';
import { isEmpty } from 'es-toolkit/compat';
import styles from './table.module.scss';
import classNames from 'classnames/bind';
import { ArrowDownIcon, ArrowUpIcon, ChevronDownDropdownIcon } from '@components/icons';
import { TableComponentProps, FixedColumn, Column, PrimaryColumn, RowData } from './types';
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
  useRightGradientPosition,
  usePinnedGradientPosition,
  useCheckboxRowSync,
} from './hooks';
import { ResizeHandle } from './resizeHandle';
import { GradientOverlay } from './gradientOverlay';

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
  wrapperClassName = '',
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
  isCheckboxOutside = false,
  disabledRowIds,
  onChangeSorting = () => {},
  onToggleRowSelection = () => {},
  onToggleAllRowsSelection = () => {},
  onToggleRowExpansion = () => {},
  onToggleAllRowsExpansion = () => {},
  onColumnResize = () => {},
  getRowCheckboxTooltip = () => {},
  externalScrollContainerRef,
  portalContainer = typeof document !== 'undefined' ? document.body : null,
  rightGradientClassName,
  pinnedGradientClassName,
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

  const columnWidthsFromProps = useMemo(() => {
    const widths: Record<string, number> = {};

    primaryColumns.forEach((col) => {
      if ('width' in col && typeof col.width === 'number') {
        widths[col.key] = col.width;
      }
    });

    fixedColumns.forEach((col) => {
      if ('width' in col && typeof col.width === 'number') {
        widths[col.key] = col.width;
      }
    });

    return Object.keys(widths).length > 0 ? widths : undefined;
  }, [primaryColumns, fixedColumns]);

  const { handleToggleRowExpansion, isCellExpanded } = useTableExpansion({
    primaryColumns,
    fixedColumns,
    expandedRowIds,
    onToggleRowExpansion,
  });

  const allTableColumns = useMemo(
    () => [...pinnedColumns, ...scrollableColumns],
    [pinnedColumns, scrollableColumns],
  );

  const { columnWidths, handleResize, handleResizeStop, handleResizeStart } = useColumnResize({
    enabled: isResizable,
    minWidth: minColumnWidth,
    maxWidth: maxColumnWidth,
    columns: allTableColumns,
    columnWidthsRef,
    onColumnResize,
    initialColumnWidths: columnWidthsFromProps,
  });

  const { setTableRowRef, setCheckboxRowRef } = useCheckboxRowSync({
    enabled: selectable && isCheckboxOutside,
    rowCount: data.length,
  });

  const wrapWithResizable = (column: PrimaryColumn | FixedColumn, headerCell: JSX.Element) => {
    const effectiveMinWidth = column.minWidth ?? minColumnWidth;
    const effectiveMaxWidth = column.maxWidth ?? maxColumnWidth;

    return (
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
        minConstraints={[effectiveMinWidth, 0]}
        maxConstraints={[effectiveMaxWidth, 0]}
        className={cx('resizable-column')}
      >
        {headerCell}
      </Resizable>
    );
  };
  const tableRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const checkboxColumnRef = useRef<HTMLDivElement>(null);
  const checkboxHeaderRef = useRef<HTMLDivElement>(null);
  const [isHeaderPinned, setIsHeaderPinned] = useState(false);

  const updateLeftBorderAccentStyle = useCallback((element: HTMLElement) => {
    const header = headerRef.current;
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

    const elementHeight = element.offsetHeight;
    const totalHeight = elementHeight + paddingTop + paddingBottom;

    element.style.setProperty('--expand-cell-top', `${paddingTop}px`);
    element.style.setProperty('--expand-cell-height', `${totalHeight}px`);
  }, []);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [tableScrollWidth, setTableScrollWidth] = useState(0);
  const [gradientUpdateCounter, setGradientUpdateCounter] = useState(0);
  const isUnpinningRef = useRef(false);
  const prevExpandedRowIdsRef = useRef<Set<string | number>>(new Set());
  const updateTableGradientsRef = useRef<(() => void) | null>(null);

  const rightGradientPosition = useRightGradientPosition(
    tableRef.current,
    headerRef.current,
    externalScrollContainerRef?.current instanceof HTMLElement
      ? externalScrollContainerRef.current
      : null,
    isHeaderPinned,
    scrollLeft,
    scrollTop,
    tableScrollWidth,
    gradientUpdateCounter,
  );

  const pinnedGradientPosition = usePinnedGradientPosition(
    tableRef.current,
    scrollLeft,
    headerRef.current,
    externalScrollContainerRef?.current instanceof HTMLElement
      ? externalScrollContainerRef.current
      : null,
    isHeaderPinned,
    scrollTop,
    tableScrollWidth,
    gradientUpdateCounter,
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

  const isRowDisabled = (id: string | number) => disabledRowIds?.includes(id) ?? false;
  const isAllRowsSelected: boolean = data.every(
    (row) => isRowDisabled(row.id) || selectedRowIds.includes(row.id),
  );
  const isAnyRowSelected: boolean = data.some(
    (row) => !isRowDisabled(row.id) && selectedRowIds.includes(row.id),
  );
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
    isCheckboxOutside,
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
    isCheckboxOutside,
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
    const checkboxHeader = checkboxHeaderRef.current;

    const updatePinnedState = () => {
      const tableRect = table.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const headerHeight = header.offsetHeight;

      const tableTop = tableRect.top - containerRect.top;
      const tableBottom = tableRect.bottom - containerRect.top;
      const containerScrollTop = scrollContainer.scrollTop;
      const shouldPin = containerScrollTop > 0 && tableTop <= 0 && tableBottom > headerHeight;

      setIsHeaderPinned(shouldPin);

      if (shouldPin) {
        const tableLeft = tableRect.left;
        const topOffset = containerRect.top;

        header.classList.add(cx('pinned-header'));
        if (isHorizontallyScrollable) {
          header.style.overflow = 'hidden';
          header.style.overflowX = 'hidden';
        }
        header.style.left = `${tableLeft}px`;
        header.style.top = `${topOffset}px`;
        header.style.width = `${tableRect.width}px`;

        if (checkboxHeader && isCheckboxOutside) {
          checkboxHeader.style.top = `${topOffset}px`;
        }
      } else {
        const savedScrollLeft = table.scrollLeft;

        isUnpinningRef.current = true;

        header.classList.remove(cx('pinned-header'));
        if (isHorizontallyScrollable) {
          header.scrollLeft = 0;
        }
        header.style.left = '';
        header.style.top = '';
        header.style.width = '';
        if (isHorizontallyScrollable) {
          header.style.overflow = '';
          header.style.overflowX = '';
        }

        if (checkboxHeader && isCheckboxOutside) {
          checkboxHeader.style.top = '';
          checkboxHeader.classList.remove(cx('pinned-header'));
        }

        if (isHorizontallyScrollable && savedScrollLeft > 0) {
          requestAnimationFrame(() => {
            table.scrollLeft = savedScrollLeft;
            setTimeout(() => {
              isUnpinningRef.current = false;
            }, 0);
          });
        } else {
          isUnpinningRef.current = false;
        }
      }
    };

    const rafId = requestAnimationFrame(() => {
      updatePinnedState();
    });

    scrollContainer.addEventListener('scroll', updatePinnedState);
    window.addEventListener('resize', updatePinnedState);

    return () => {
      cancelAnimationFrame(rafId);
      scrollContainer.removeEventListener('scroll', updatePinnedState);
      window.removeEventListener('resize', updatePinnedState);
    };
  }, [externalScrollContainerRef, isHorizontallyScrollable, isCheckboxOutside]);

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
    const checkboxHeader = checkboxHeaderRef.current;

    const updateHeaderPosition = () => {
      const tableRect = table.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();

      header.style.left = `${tableRect.left}px`;
      header.style.top = `${containerRect.top}px`;
      header.style.width = `${tableRect.width}px`;

      if (checkboxHeader && isCheckboxOutside) {
        checkboxHeader.style.top = `${containerRect.top}px`;
      }
    };

    const syncHorizontalScroll = (source: HTMLElement) => {
      if (isUnpinningRef.current) {
        return;
      }
      if (source === header) {
        table.scrollLeft = header.scrollLeft;
      } else {
        header.scrollLeft = table.scrollLeft;
      }
      if (updateTableGradientsRef.current) {
        updateTableGradientsRef.current();
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
  }, [isHeaderPinned, externalScrollContainerRef, isHorizontallyScrollable, isCheckboxOutside]);

  useEffect(() => {
    if (!tableRef.current || !isHorizontallyScrollable) {
      return undefined;
    }

    const table = tableRef.current;
    const scrollContainer = externalScrollContainerRef?.current;

    setScrollLeft(table.scrollLeft);
    setScrollTop(scrollContainer?.scrollTop || table.scrollTop || 0);
    setTableScrollWidth(table.scrollWidth);

    const updateTableGradients = () => {
      if (table) {
        setScrollLeft(table.scrollLeft);
        setScrollTop(scrollContainer?.scrollTop || table.scrollTop || 0);
        setTableScrollWidth(table.scrollWidth);
      }
    };

    let rafId: number | null = null;

    const scheduleGradientUpdate = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateTableGradients();
          rafId = null;
        });
      }
    };

    const handleTableScrollForGradients = () => {
      scheduleGradientUpdate();
    };

    const handleContainerScrollForGradients = () => {
      scheduleGradientUpdate();
    };

    table.addEventListener('scroll', handleTableScrollForGradients, { passive: true });
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleContainerScrollForGradients, {
        passive: true,
      });
    }
    const handleWindowResize = () => {
      updateTableGradients();
      setGradientUpdateCounter((prev) => prev + 1);
    };
    window.addEventListener('resize', handleWindowResize);
    updateTableGradientsRef.current = updateTableGradients;
    updateTableGradients();

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
      window.removeEventListener('resize', handleWindowResize);
      resizeObserver.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
  }, [isHorizontallyScrollable, externalScrollContainerRef, isHeaderPinned, expandedRowIds]);

  useEffect(() => {
    if (!tableRef.current || !isHorizontallyScrollable) {
      return;
    }

    const table = tableRef.current;
    const scrollContainer = externalScrollContainerRef?.current;

    requestAnimationFrame(() => {
      if (table) {
        setScrollLeft(table.scrollLeft);
        setScrollTop(scrollContainer?.scrollTop || table.scrollTop || 0);
        setTableScrollWidth(table.scrollWidth);
        if (updateTableGradientsRef.current) {
          updateTableGradientsRef.current();
        }
      }
    });
  }, [columnWidths, isHorizontallyScrollable, externalScrollContainerRef]);

  useEffect(() => {
    if (!tableRef.current) {
      return undefined;
    }

    const table = tableRef.current;

    const updateAllLeftBorderAccentStyles = () => {
      const expandCells = Array.from(table.querySelectorAll<HTMLElement>('[data-base-left="0"]'));
      expandCells.forEach(updateLeftBorderAccentStyle);
    };

    requestAnimationFrame(() => {
      updateAllLeftBorderAccentStyles();
    });
  }, [isRowsExpandable, data, updateLeftBorderAccentStyle]);

  useEffect(() => {
    if (!tableRef.current) {
      return undefined;
    }

    const table = tableRef.current;
    const currentExpanded = new Set(expandedRowIds);
    const prevExpanded = prevExpandedRowIdsRef.current;

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

    const timeoutId = setTimeout(() => {
      changedRowIds.forEach((rowId) => {
        const expandCell = table.querySelector<HTMLElement>(
          `[data-base-left="0"][data-row-id="${rowId}"]`,
        );
        if (expandCell) {
          updateLeftBorderAccentStyle(expandCell);
        }
      });

      // Force gradient recalculation after expand/collapse as table dimensions changed
      setGradientUpdateCounter((prev) => prev + 1);
    }, 0);

    prevExpandedRowIdsRef.current = currentExpanded;

    return () => clearTimeout(timeoutId);
  }, [isRowsExpandable, expandedRowIds, updateLeftBorderAccentStyle]);

  useEffect(() => {
    if (!checkboxColumnRef.current || !tableRef.current || !isCheckboxOutside) {
      return undefined;
    }

    const checkboxColumn = checkboxColumnRef.current;
    const table = tableRef.current;

    const handleTableScroll = () => {
      requestAnimationFrame(() => {
        checkboxColumn.scrollTop = table.scrollTop;
      });
    };

    table.addEventListener('scroll', handleTableScroll);

    return () => {
      table.removeEventListener('scroll', handleTableScroll);
    };
  }, [data, isCheckboxOutside]);

  useLayoutEffect(() => {
    if (!tableRef.current || !checkboxColumnRef.current) return;

    const table = tableRef.current;
    const checkboxColumn = checkboxColumnRef.current;

    const syncHeight = () => {
      const newHeight = `${table.clientHeight}px`;
      if (checkboxColumn.style.height !== newHeight) {
        checkboxColumn.style.height = newHeight;
      }
    };

    syncHeight();

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(syncHeight);
    });
    observer.observe(table);

    return () => observer.disconnect();
  }, []);

  const renderRowCheckbox = (item: RowData) => {
    const isDisabled = isRowDisabled(item.id);
    const tooltipContent = getRowCheckboxTooltip?.(item.id);
    const checkbox = (
      <Checkbox
        value={selectedRowIds.includes(item.id)}
        disabled={isDisabled}
        onChange={() => handleSingleRowSelection(item.id)}
        className={cx('checkbox-cell')}
      />
    );
    return tooltipContent ? (
      <Tooltip
        content={tooltipContent}
        placement="top"
        wrapperClassName={cx('checkbox-tooltip-wrapper')}
        portalRoot={portalContainer ?? undefined}
      >
        {checkbox}
      </Tooltip>
    ) : (
      checkbox
    );
  };

  const renderCheckboxColumn = () => (
    <div className={cx('checkbox-column')} ref={checkboxColumnRef}>
      <div
        ref={checkboxHeaderRef}
        className={cx(
          'table-header',
          'checkbox-header',
          { 'pinned-header': isHeaderPinned },
          headerClassName,
        )}
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
      <div className={cx('checkbox-body', bodyClassName)}>
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={setCheckboxRowRef(item.id)}
            className={cx('checkbox-row', 'table-row', getRowSizeClassName(item), rowClassName)}
            onMouseEnter={() => handleRowMouseEnter(index)}
            onMouseLeave={handleRowMouseLeave}
          >
            {(hasSelectedRows || hoveredRow === index) && renderRowCheckbox(item)}
          </div>
        ))}
      </div>
    </div>
  );

  const renderTable = () => (
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
        {selectable && !isCheckboxOutside && (
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
                isCheckboxOutside,
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
                isCheckboxOutside,
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
            data-row-index={index}
            data-row-id={item.id}
            ref={setTableRowRef(item.id)}
            className={cx('table-row', getRowSizeClassName(item), rowClassName, {
              selectable: selectable && !isCheckboxOutside,
            })}
            onMouseEnter={() => handleRowMouseEnter(index)}
            onMouseLeave={handleRowMouseLeave}
          >
            {selectable && !isCheckboxOutside && (
              <div
                className={cx('table-cell', 'checkbox-cell')}
                data-base-left={isRowsExpandable ? EXPANDABLE_CHECKBOX_COLUMN_WIDTH : 0}
              >
                {(hasSelectedRows || hoveredRow === index) && renderRowCheckbox(item)}
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
                        isCheckboxOutside,
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
                        isCheckboxOutside,
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
      {isHorizontallyScrollable && (
        <>
          <GradientOverlay
            portalContainer={portalContainer}
            visible={rightGradientPosition.visible}
            position={rightGradientPosition.position}
            size={rightGradientPosition.size}
            direction="right"
            className={rightGradientClassName}
            dataTestId="right-gradient"
          />
          <GradientOverlay
            portalContainer={portalContainer}
            visible={pinnedGradientPosition.visible}
            position={pinnedGradientPosition.position}
            size={pinnedGradientPosition.size}
            direction="left"
            className={pinnedGradientClassName}
            dataTestId="pinned-gradient"
          />
        </>
      )}
    </div>
  );

  return isCheckboxOutside ? (
    <div className={cx('table-wrapper', { 'fixed-header': isHeaderFixed }, wrapperClassName)}>
      {renderCheckboxColumn()}
      {renderTable()}
    </div>
  ) : (
    renderTable()
  );
};

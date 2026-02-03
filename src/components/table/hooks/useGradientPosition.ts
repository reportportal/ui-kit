import { useMemo } from 'react';
import { GRADIENT_OVERLAY_WIDTH } from '../constants';

export interface RightGradientPosition {
  visible: boolean;
  position: { top: number; left: number };
  size: { width: number; height: number };
}

export interface PinnedGradientPosition {
  visible: boolean;
  position: { top: number; left: number };
  size: { width: number; height: number };
}

export const useRightGradientPosition = (
  table: HTMLElement | null,
  header: HTMLElement | null,
  scrollContainer: HTMLElement | null,
  isHeaderPinned: boolean,
  scrollLeft: number,
  scrollTop: number,
  tableScrollWidth: number,
  gradientUpdateCounter: number,
): RightGradientPosition => {
  return useMemo(() => {
    if (!table) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const hasRightScroll = scrollLeft + table.clientWidth < tableScrollWidth;
    if (!hasRightScroll) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const tableRect = table.getBoundingClientRect();
    const headerHeight = header?.offsetHeight || 0;
    const containerRect = scrollContainer?.getBoundingClientRect();

    const visibleTableBottom = Math.min(
      tableRect.bottom,
      containerRect?.bottom || Number.MAX_SAFE_INTEGER,
    );

    let gradientTop: number;

    if (isHeaderPinned && scrollContainer && containerRect) {
      gradientTop = containerRect.top - tableRect.top + headerHeight;
    } else {
      gradientTop = headerHeight;
    }

    const gradientTopAbsolute = tableRect.top + gradientTop;
    const hasHorizontalScrollbar = table.scrollWidth > table.clientWidth;
    const scrollbarHeight = hasHorizontalScrollbar ? table.offsetHeight - table.clientHeight : 0;
    const gradientHeight = visibleTableBottom - gradientTopAbsolute - scrollbarHeight;

    const hasVerticalScrollbar = table.scrollHeight > table.clientHeight;
    const verticalScrollbarWidth = hasVerticalScrollbar ? table.offsetWidth - table.clientWidth : 0;

    const gradientLeft = tableRect.right - GRADIENT_OVERLAY_WIDTH - verticalScrollbarWidth;

    return {
      visible: true,
      position: {
        top: gradientTopAbsolute,
        left: gradientLeft,
      },
      size: {
        width: GRADIENT_OVERLAY_WIDTH,
        height: gradientHeight,
      },
    };
    // scrollTop is needed for recalculation on vertical scroll, but values are read from DOM via getBoundingClientRect()
    // gradientUpdateCounter forces recalculation on layout changes (window resize, expand/collapse, etc.)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    table,
    header,
    scrollContainer,
    isHeaderPinned,
    scrollLeft,
    scrollTop,
    tableScrollWidth,
    gradientUpdateCounter,
  ]);
};

export const usePinnedGradientPosition = (
  table: HTMLElement | null,
  scrollLeft: number,
  header: HTMLElement | null,
  scrollContainer: HTMLElement | null,
  isHeaderPinned: boolean,
  scrollTop: number,
  tableScrollWidth: number,
  gradientUpdateCounter: number,
): PinnedGradientPosition => {
  return useMemo(() => {
    if (!table) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const hasLeftScroll = scrollLeft > 0;
    if (!hasLeftScroll) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const firstRow = table.querySelector('[data-row-index="0"]') as HTMLElement | null;
    if (!firstRow) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const pinnedColumns = Array.from(firstRow.querySelectorAll('[data-pinned-index]'));
    if (pinnedColumns.length === 0) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const maxIndex = Math.max(
      ...pinnedColumns.map((col) =>
        parseInt((col as HTMLElement).getAttribute('data-pinned-index') || '-1', 10),
      ),
    );

    if (maxIndex < 0) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const lastPinnedColumn = pinnedColumns.find(
      (col) =>
        parseInt((col as HTMLElement).getAttribute('data-pinned-index') || '-1', 10) === maxIndex,
    ) as HTMLElement;

    if (!lastPinnedColumn) {
      return {
        visible: false,
        position: { top: 0, left: 0 },
        size: { width: 0, height: 0 },
      };
    }

    const columnRect = lastPinnedColumn.getBoundingClientRect();
    const tableRect = table.getBoundingClientRect();
    const headerHeight = header?.offsetHeight || 0;
    const containerRect = scrollContainer?.getBoundingClientRect();

    const gradientLeft = columnRect.right;

    const visibleTableBottom = Math.min(
      tableRect.bottom,
      containerRect?.bottom || Number.MAX_SAFE_INTEGER,
    );

    let gradientTop: number;

    if (isHeaderPinned && scrollContainer && containerRect) {
      gradientTop = containerRect.top - tableRect.top + headerHeight;
    } else {
      gradientTop = headerHeight;
    }

    const gradientTopAbsolute = tableRect.top + gradientTop;
    const hasHorizontalScrollbar = table.scrollWidth > table.clientWidth;
    const scrollbarHeight = hasHorizontalScrollbar ? table.offsetHeight - table.clientHeight : 0;
    const gradientHeight = visibleTableBottom - gradientTopAbsolute - scrollbarHeight;

    return {
      visible: true,
      position: {
        top: gradientTopAbsolute,
        left: gradientLeft,
      },
      size: {
        width: GRADIENT_OVERLAY_WIDTH,
        height: gradientHeight,
      },
    };
    // scrollTop and tableScrollWidth are needed for recalculation, but values are read from DOM via getBoundingClientRect()
    // gradientUpdateCounter forces recalculation on layout changes (window resize, expand/collapse, etc.)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    table,
    scrollLeft,
    header,
    scrollContainer,
    isHeaderPinned,
    scrollTop,
    tableScrollWidth,
    gradientUpdateCounter,
  ]);
};

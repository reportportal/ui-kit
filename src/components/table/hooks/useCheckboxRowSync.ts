import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

interface UseCheckboxRowSyncProps {
  enabled: boolean;
  rowCount: number;
}

export const useCheckboxRowSync = ({ enabled, rowCount }: UseCheckboxRowSyncProps) => {
  const tableRowRefs = useRef<Map<number, HTMLElement>>(new Map());
  const checkboxRowRefs = useRef<Map<number, HTMLElement>>(new Map());

  const setTableRowRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      if (el) {
        tableRowRefs.current.set(index, el);
      } else {
        tableRowRefs.current.delete(index);
      }
    },
    [],
  );

  const setCheckboxRowRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      if (el) {
        checkboxRowRefs.current.set(index, el);
      } else {
        checkboxRowRefs.current.delete(index);
      }
    },
    [],
  );

  const syncRowHeight = useCallback((tableRow: HTMLElement, checkboxRow: HTMLElement) => {
    const newHeight = `${tableRow.offsetHeight}px`;
    if (checkboxRow.style.height !== newHeight) {
      checkboxRow.style.height = newHeight;
    }
  }, []);

  const syncAllHeights = useCallback(() => {
    tableRowRefs.current.forEach((tableRow, index) => {
      const checkboxRow = checkboxRowRefs.current.get(index);
      if (checkboxRow) {
        syncRowHeight(tableRow, checkboxRow);
      }
    });
  }, [syncRowHeight]);

  useEffect(() => {
    if (!enabled) return;

    const resizeObserver = new ResizeObserver((entries) => {
      requestAnimationFrame(() => {
        entries.forEach((entry) => {
          const tableRow = entry.target as HTMLElement;
          const index = parseInt(tableRow.dataset.rowIndex || '-1', 10);
          const checkboxRow = checkboxRowRefs.current.get(index);

          if (checkboxRow && index >= 0) {
            syncRowHeight(tableRow, checkboxRow);
          }
        });
      });
    });

    tableRowRefs.current.forEach((el) => resizeObserver.observe(el));

    return () => resizeObserver.disconnect();
  }, [enabled, rowCount, syncRowHeight]);

  useLayoutEffect(() => {
    if (!enabled) return;

    syncAllHeights();
  }, [enabled, rowCount, syncAllHeights]);

  return { setTableRowRef, setCheckboxRowRef, syncAllHeights };
};

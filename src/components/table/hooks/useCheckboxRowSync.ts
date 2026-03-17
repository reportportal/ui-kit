import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

interface UseCheckboxRowSyncProps {
  enabled: boolean;
  rowCount: number;
}

export const useCheckboxRowSync = ({ enabled, rowCount }: UseCheckboxRowSyncProps) => {
  const tableRowRefs = useRef<Map<string, HTMLElement>>(new Map());
  const checkboxRowRefs = useRef<Map<string, HTMLElement>>(new Map());

  const setTableRowRef = useCallback(
    (rowId: string | number) => (el: HTMLElement | null) => {
      const key = String(rowId);
      if (el) {
        tableRowRefs.current.set(key, el);
      } else {
        tableRowRefs.current.delete(key);
      }
    },
    [],
  );

  const setCheckboxRowRef = useCallback(
    (rowId: string | number) => (el: HTMLElement | null) => {
      const key = String(rowId);
      if (el) {
        checkboxRowRefs.current.set(key, el);
      } else {
        checkboxRowRefs.current.delete(key);
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
    tableRowRefs.current.forEach((tableRow, rowId) => {
      const checkboxRow = checkboxRowRefs.current.get(rowId);
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
          const rowId = tableRow.dataset.rowId;
          const checkboxRow = rowId ? checkboxRowRefs.current.get(rowId) : undefined;

          if (checkboxRow) {
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

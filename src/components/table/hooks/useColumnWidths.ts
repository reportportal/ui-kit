import { useRef, useCallback } from 'react';

interface UseColumnWidthsReturn {
  columnWidthsRef: React.MutableRefObject<Map<string, number>>;
  setCellRef: (columnKey: string) => (element: HTMLDivElement | null) => void;
}

export const useColumnWidths = (): UseColumnWidthsReturn => {
  const columnWidthsRef = useRef<Map<string, number>>(new Map());

  const setCellRef = useCallback(
    (columnKey: string) => (element: HTMLDivElement | null) => {
      if (element) {
        const width = element.getBoundingClientRect().width;
        if (width > 0) {
          columnWidthsRef.current.set(columnKey, width);
        }
      }
    },
    [],
  );

  return {
    columnWidthsRef,
    setCellRef,
  };
};

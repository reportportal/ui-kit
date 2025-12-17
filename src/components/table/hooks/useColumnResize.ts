import { useState, useCallback, MutableRefObject } from 'react';
import { ResizeCallbackData } from 'react-resizable';

interface UseColumnResizeProps {
  enabled?: boolean;
  minWidth?: number;
  maxWidth?: number;
  columnWidthsRef?: MutableRefObject<Map<string, number>>;
  onColumnResize?: (columnKey: string, width: number) => void;
}

interface UseColumnResizeReturn {
  columnWidths: Record<string, number>;
  handleResize: (columnKey: string) => (e: React.SyntheticEvent, data: ResizeCallbackData) => void;
  handleResizeStop: (columnKey: string) => () => void;
  handleResizeStart: () => void;
}

export const useColumnResize = ({
  enabled = false,
  minWidth = 50,
  maxWidth = 500,
  columnWidthsRef,
  onColumnResize,
}: UseColumnResizeProps): UseColumnResizeReturn => {
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});

  const handleResizeStart = useCallback(() => {
    if (!enabled || Object.keys(columnWidths).length > 0 || !columnWidthsRef) return;

    const widths: Record<string, number> = {};
    columnWidthsRef.current.forEach((width, key) => {
      widths[key] = width;
    });
    setColumnWidths(widths);
  }, [enabled, columnWidths, columnWidthsRef]);

  const handleResize = useCallback(
    (columnKey: string) =>
      (_e: React.SyntheticEvent, { size }: ResizeCallbackData) => {
        if (!enabled) return;

        const clampedWidth = Math.min(maxWidth, Math.max(minWidth, size.width));
        setColumnWidths((prev) => ({ ...prev, [columnKey]: clampedWidth }));
      },
    [enabled, minWidth, maxWidth],
  );

  const handleResizeStop = useCallback(
    (columnKey: string) => () => {
      if (!enabled || !columnWidths[columnKey]) return;

      onColumnResize?.(columnKey, columnWidths[columnKey]);
    },
    [enabled, columnWidths, onColumnResize],
  );

  return {
    columnWidths,
    handleResize,
    handleResizeStop,
    handleResizeStart,
  };
};

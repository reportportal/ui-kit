import { useState, useCallback, MutableRefObject, useEffect } from 'react';
import { ResizeCallbackData } from 'react-resizable';
import { PrimaryColumn, FixedColumn } from '../types';

interface UseColumnResizeProps {
  enabled?: boolean;
  minWidth?: number;
  maxWidth?: number;
  columns?: (PrimaryColumn | FixedColumn)[];
  columnWidthsRef?: MutableRefObject<Map<string, number>>;
  onColumnResize?: (columnKey: string, width: number) => void;
  initialColumnWidths?: Record<string, number>;
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
  columns = [],
  columnWidthsRef,
  onColumnResize,
  initialColumnWidths,
}: UseColumnResizeProps): UseColumnResizeReturn => {
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});

  const getColumnLimits = useCallback(
    (columnKey: string) => {
      const column = columns.find((col) => col.key === columnKey);
      return {
        minWidth: column?.minWidth ?? minWidth,
        maxWidth: column?.maxWidth ?? maxWidth,
      };
    },
    [columns, minWidth, maxWidth],
  );
  useEffect(() => {
    if (initialColumnWidths) {
      const constrainedWidths: Record<string, number> = {};
      Object.entries(initialColumnWidths).forEach(([columnKey, width]) => {
        const column = columns.find((col) => col.key === columnKey);
        const colMinWidth = column?.minWidth ?? minWidth;
        const colMaxWidth = column?.maxWidth ?? maxWidth;
        constrainedWidths[columnKey] = Math.min(colMaxWidth, Math.max(colMinWidth, width));
      });
      setColumnWidths(constrainedWidths);
    }
  }, [initialColumnWidths, columns, minWidth, maxWidth]);

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

        const { minWidth: colMinWidth, maxWidth: colMaxWidth } = getColumnLimits(columnKey);
        const clampedWidth = Math.min(colMaxWidth, Math.max(colMinWidth, size.width));
        setColumnWidths((prev) => ({ ...prev, [columnKey]: clampedWidth }));
      },
    [enabled, getColumnLimits],
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

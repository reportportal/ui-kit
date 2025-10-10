import { useState, useCallback } from 'react';

interface UseTableHoverReturn {
  hoveredColumn: string | null;
  hoveredRow: number | null;
  handleColumnMouseEnter: (columnKey: string) => void;
  handleColumnMouseLeave: () => void;
  handleRowMouseEnter: (rowIndex: number) => void;
  handleRowMouseLeave: () => void;
}

export const useTableHover = (): UseTableHoverReturn => {
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleColumnMouseEnter = useCallback((columnKey: string) => {
    setHoveredColumn(columnKey);
  }, []);

  const handleColumnMouseLeave = useCallback(() => {
    setHoveredColumn(null);
  }, []);

  const handleRowMouseEnter = useCallback((rowIndex: number) => {
    setHoveredRow(rowIndex);
  }, []);

  const handleRowMouseLeave = useCallback(() => {
    setHoveredRow(null);
  }, []);

  return {
    hoveredColumn,
    hoveredRow,
    handleColumnMouseEnter,
    handleColumnMouseLeave,
    handleRowMouseEnter,
    handleRowMouseLeave,
  };
};

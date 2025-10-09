import { useState, useCallback, useEffect } from 'react';
import { Column, FixedColumn } from '../types';

interface UseTableExpansionProps {
  primaryColumns: Column[];
  fixedColumns: FixedColumn[];
  expandedRowIds: (string | number)[];
  onToggleRowExpansion: (id: string | number) => void;
}

interface UseTableExpansionReturn {
  expandedCells: Set<string>;
  handleToggleRowExpansion: (id: string | number) => void;
  isCellExpanded: (rowId: string | number, columnKey: string) => boolean;
}

export const useTableExpansion = ({
  primaryColumns,
  fixedColumns,
  expandedRowIds,
  onToggleRowExpansion,
}: UseTableExpansionProps): UseTableExpansionReturn => {
  const [expandedCells, setExpandedCells] = useState<Set<string>>(new Set());

  useEffect(() => {
    const allColumnKeys = [
      ...primaryColumns.map((col) => col.key),
      ...fixedColumns.map((col) => col.key),
    ];

    const derivedExpandedCells = new Set<string>();

    expandedRowIds.forEach((rowId) => {
      allColumnKeys.forEach((columnKey) => {
        derivedExpandedCells.add(`${rowId}-${columnKey}`);
      });
    });

    setExpandedCells((prevExpandedCells) => {
      if (prevExpandedCells.size === derivedExpandedCells.size) {
        let isSame = true;

        prevExpandedCells.forEach((value) => {
          if (!derivedExpandedCells.has(value)) {
            isSame = false;
          }
        });

        if (isSame) {
          return prevExpandedCells;
        }
      }

      return derivedExpandedCells;
    });
  }, [expandedRowIds, primaryColumns, fixedColumns]);

  const handleToggleRowExpansion = useCallback(
    (id: string | number) => {
      const newExpandedCells = new Set(expandedCells);
      const isRowCurrentlyExpanded = expandedRowIds.includes(id);

      const allColumnKeys = [
        ...primaryColumns.map((col) => col.key),
        ...fixedColumns.map((col) => col.key),
      ];

      if (isRowCurrentlyExpanded) {
        allColumnKeys.forEach((columnKey) => {
          const cellId = `${id}-${columnKey}`;
          newExpandedCells.delete(cellId);
        });
      } else {
        allColumnKeys.forEach((columnKey) => {
          const cellId = `${id}-${columnKey}`;
          newExpandedCells.add(cellId);
        });
      }

      setExpandedCells(newExpandedCells);
      onToggleRowExpansion(id);
    },
    [expandedCells, expandedRowIds, primaryColumns, fixedColumns, onToggleRowExpansion],
  );

  const isCellExpanded = useCallback(
    (rowId: string | number, columnKey: string): boolean => {
      const cellId = `${rowId}-${columnKey}`;
      return expandedCells.has(cellId);
    },
    [expandedCells],
  );

  return {
    expandedCells,
    handleToggleRowExpansion,
    isCellExpanded,
  };
};

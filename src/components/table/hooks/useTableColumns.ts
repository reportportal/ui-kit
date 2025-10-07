import { useMemo } from 'react';
import { PrimaryColumn, FixedColumn, Column } from '../types';

interface UseTableColumnsProps {
  primaryColumns: Column[];
  fixedColumns: FixedColumn[];
  pinnedColumnKeys: string[];
}

interface UseTableColumnsReturn {
  pinnedColumns: (PrimaryColumn | FixedColumn)[];
  scrollableColumns: (PrimaryColumn | FixedColumn)[];
}

export const useTableColumns = ({
  primaryColumns,
  fixedColumns,
  pinnedColumnKeys,
}: UseTableColumnsProps): UseTableColumnsReturn => {
  return useMemo(() => {
    const pinned: (PrimaryColumn | FixedColumn)[] = [];
    const scrollable: (PrimaryColumn | FixedColumn)[] = [];

    primaryColumns.forEach((primaryCol) => {
      const primaryColumn = { ...primaryCol, primary: true };
      if (pinnedColumnKeys.includes(primaryCol.key)) {
        pinned.push(primaryColumn);
      } else {
        scrollable.push(primaryColumn);
      }
    });

    fixedColumns.forEach((column) => {
      if (pinnedColumnKeys.includes(column.key)) {
        pinned.push(column);
      } else {
        scrollable.push(column);
      }
    });

    return {
      pinnedColumns: pinned,
      scrollableColumns: scrollable,
    };
  }, [primaryColumns, fixedColumns, pinnedColumnKeys]);
};

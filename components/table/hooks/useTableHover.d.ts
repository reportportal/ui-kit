interface UseTableHoverReturn {
    hoveredColumn: string | null;
    hoveredRow: number | null;
    handleColumnMouseEnter: (columnKey: string) => void;
    handleColumnMouseLeave: () => void;
    handleRowMouseEnter: (rowIndex: number) => void;
    handleRowMouseLeave: () => void;
}
export declare const useTableHover: () => UseTableHoverReturn;
export {};

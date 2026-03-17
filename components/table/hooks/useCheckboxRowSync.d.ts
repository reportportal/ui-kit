interface UseCheckboxRowSyncProps {
    enabled: boolean;
    rowCount: number;
}
export declare const useCheckboxRowSync: ({ enabled, rowCount }: UseCheckboxRowSyncProps) => {
    setTableRowRef: (rowId: string | number) => (el: HTMLElement | null) => void;
    setCheckboxRowRef: (rowId: string | number) => (el: HTMLElement | null) => void;
    syncAllHeights: () => void;
};
export {};

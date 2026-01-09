interface UseCheckboxRowSyncProps {
    enabled: boolean;
    rowCount: number;
}
export declare const useCheckboxRowSync: ({ enabled, rowCount }: UseCheckboxRowSyncProps) => {
    setTableRowRef: (index: number) => (el: HTMLElement | null) => void;
    setCheckboxRowRef: (index: number) => (el: HTMLElement | null) => void;
    syncAllHeights: () => void;
};
export {};

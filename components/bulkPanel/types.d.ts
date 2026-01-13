export interface BulkPanelItem {
    id: string | number;
    label: string;
}
export interface BulkPanelProps {
    className?: string;
    items: BulkPanelItem[];
    captions?: {
        selected?: string;
        clearSelection?: string;
        selectedItems?: string;
    };
    onRemoveItem: (id: string | number) => void;
    onClearSelection: () => void;
    portalRoot?: Element;
}

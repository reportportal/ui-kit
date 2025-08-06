import { ClearSelection } from './types';

export interface SelectionProps {
    selectedCount: number;
    onClearSelection: ClearSelection;
    captions?: {
        selected?: string;
        buttonCaption?: string;
    };
    icon?: React.ReactNode;
}
export declare const Selection: ({ selectedCount, onClearSelection, captions, icon, }: SelectionProps) => import("react/jsx-runtime").JSX.Element;

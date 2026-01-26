import { ReactElement } from '../../../node_modules/react';
import { ActionItem } from '../actionMenu';

export interface FilterItemProps {
    id: string;
    caption: string;
    actions: ActionItem[];
    onClick?: (id: string) => void;
    onHover?: (id: string, isHovering: boolean) => void;
    className?: string;
    captionClassName?: string;
    disabled?: boolean;
    selected?: boolean;
    editMode?: boolean;
}
export declare const FilterItem: ({ id, caption, actions, onClick, onHover, className, captionClassName, disabled, selected, editMode, }: FilterItemProps) => ReactElement;
export default FilterItem;

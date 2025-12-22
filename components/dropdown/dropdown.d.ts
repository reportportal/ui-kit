import { ReactNode, FC } from '../../../node_modules/react';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from './types';

export interface DropdownProps {
    options: DropdownOptionType[];
    value: DropdownValue | DropdownValue[];
    disabled?: boolean;
    error?: string;
    mobileDisabled?: boolean;
    title?: string;
    touched?: boolean;
    icon?: ReactNode;
    variant?: DropdownVariant;
    placeholder?: string;
    transparentBackground?: boolean;
    className?: string;
    toggleButtonClassName?: string;
    selectListClassName?: string;
    label?: ReactNode;
    onChange: (value: DropdownValue | DropdownValue[]) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    renderOption?: RenderDropdownOption;
    isListWidthLimited?: boolean;
    multiSelect?: boolean;
    optionAll?: DropdownOptionType;
    isOptionAllVisible?: boolean;
    onSelectAll?: () => void;
    formatDisplayedValue?: (value: string | undefined) => string;
    notScrollable?: boolean;
    footer?: ReactNode | ((closeHandler: () => void) => ReactNode);
    /**
     * For nested options: whether to include parent group values in the onChange callback
     * when all children are selected. Default: false (only leaf values are included)
     */
    includeGroupValue?: boolean;
    /** Whether to show a clear button to reset the selection */
    clearable?: boolean;
    /** Callback fired when the clear button is clicked */
    onClear?: () => void;
    /** ARIA label for the clear button */
    clearButtonAriaLabel?: string;
    /**
     * Portal root element for dropdown menu rendering.
     * When provided, the menu will be rendered in this element using React Portal.
     * Useful for preventing clipping in containers with overflow: hidden (e.g., Modal, SidePanel).
     * @example menuPortalRoot={document.body}
     */
    menuPortalRoot?: Element;
    /** Whether to render selected values as tags using AdaptiveTagList (only for multiSelect mode) */
    isMultiSelectWithTags?: boolean;
    /** Message to display when no options match the search term */
    noMatchesMessage?: string;
}
export declare const Dropdown: FC<DropdownProps>;

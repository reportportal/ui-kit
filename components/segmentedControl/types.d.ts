import { ReactNode } from '../../../node_modules/react';

export type SegmentedControlValue = string | number;
export type SegmentedControlOption = {
    value: SegmentedControlValue;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
    selected?: boolean;
    className?: string;
};
export interface SegmentedControlProps {
    options: SegmentedControlOption[];
    onChange?: (value: SegmentedControlValue) => void;
    className?: string;
    fullWidth?: boolean;
    ariaLabel?: string;
}

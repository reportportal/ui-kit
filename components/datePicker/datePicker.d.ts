import { ReactNode, ReactElement } from '../../../node_modules/react';
import { Placement } from '@floating-ui/react';

type DateRangeValue = [Date | null, Date | null];
interface DatePickerBaseProps {
    onBlur?: () => void;
    onFocus?: () => void;
    headerNodes?: ReactNode;
    disabled?: boolean;
    shouldCloseOnSelect?: boolean;
    fixedHeight?: boolean;
    customClassName?: string;
    popperClassName?: string;
    calendarClassName?: string;
    customTimeInput?: ReactElement;
    language?: string;
    yearsOptions?: number[];
    placeholder?: string;
    dateFormat?: string;
    popperPlacement?: Placement;
    minDate?: Date | null;
    maxDate?: Date | null;
}
interface DatePickerSingleProps extends DatePickerBaseProps {
    selectsRange?: false;
    value?: Date | null;
    onChange?: (date: Date | null) => void;
}
interface DatePickerRangeProps extends DatePickerBaseProps {
    selectsRange: true;
    value?: DateRangeValue;
    onChange?: (dates: DateRangeValue) => void;
}
type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;
export declare const DatePicker: (props: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};

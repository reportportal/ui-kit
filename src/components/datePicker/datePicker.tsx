import { ReactNode, useRef, ReactElement, forwardRef } from 'react';
import { isNil } from 'es-toolkit/compat';
import { default as ReactDatePicker } from 'react-datepicker/dist/es/index.js';
import { Placement } from '@floating-ui/react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import classNames from 'classnames/bind';
import { FieldText, FieldTextProps } from '@components/fieldText';
import { DatePickerHeader } from './header/datePickerHeader';
import styles from './datePicker.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_LANGUAGE = 'en';
const DEFAULT_DATE_FORMAT = 'MM-dd-yyyy';
const DATE_RANGE_SEPARATOR = ' to ';

type DateRangeValue = [Date | null, Date | null];

const dateBoundForPicker = (value: Date | null | undefined): Date | undefined =>
  isNil(value) ? undefined : value;

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

const DateInput = forwardRef<HTMLInputElement, FieldTextProps & { selectsRange: boolean }>(
  ({ selectsRange, value, ...rest }, ref) => {
    return (
      <FieldText
        {...rest}
        className={cx('input', selectsRange ? 'input-range' : '')}
        defaultWidth={false}
        value={selectsRange ? (value?.replace(' - ', DATE_RANGE_SEPARATOR) ?? '') : value}
        ref={ref}
        readOnly
      />
    );
  },
);

export const DatePicker = (props: DatePickerProps) => {
  const {
    onChange = () => {},
    disabled = false,
    onBlur = () => {},
    onFocus = () => {},
    headerNodes = null,
    customClassName = '',
    customTimeInput = undefined,
    shouldCloseOnSelect = true,
    popperClassName = '',
    calendarClassName = '',
    popperPlacement = 'bottom-start',
    fixedHeight = true,
    language = DEFAULT_LANGUAGE,
    yearsOptions = [],
    dateFormat = DEFAULT_DATE_FORMAT,
    value = null,
  } = props;
  const { minDate, maxDate } = props;
  const pickerMinDate = dateBoundForPicker(minDate);
  const pickerMaxDate = dateBoundForPicker(maxDate);

  const selectsRange = 'selectsRange' in props && props.selectsRange === true;
  const inputRef = useRef(null);

  const startDate = selectsRange ? ((value as DateRangeValue)?.[0] ?? undefined) : undefined;
  const endDate = selectsRange ? ((value as DateRangeValue)?.[1] ?? undefined) : undefined;

  const startDateString = startDate?.toDateString();
  const endDateString = endDate?.toDateString();
  const isValidEndDate = endDate && startDate && endDate > startDate;

  const defaultPlaceholder = selectsRange ? 'Select date range' : 'Select date';
  const placeholder = props.placeholder ?? defaultPlaceholder;

  const getDayClassName = (displayedDates: Date) => {
    if (!selectsRange) {
      const selectedDate = (value as Date | null)?.toDateString();
      const displayedDateString = displayedDates.toDateString();
      return cx('date', {
        'current-date': displayedDateString === selectedDate,
        disabled,
      });
    }

    const displayedDateString = displayedDates.toDateString();
    const isCurrentDate = displayedDateString === startDateString;
    const isEndDateMatch = isValidEndDate && displayedDateString === endDateString;
    const isInsideSelectedRange =
      startDate && endDate && displayedDates > startDate && displayedDates < endDate;

    return cx('date', {
      'current-date': isCurrentDate,
      'selected-range': isInsideSelectedRange && !isEndDateMatch,
      'end-date': isEndDateMatch && isValidEndDate,
      disabled,
    });
  };

  const customInput = <DateInput ref={inputRef} selectsRange={selectsRange} />;

  const commonProps = {
    customInput,
    placeholderText: placeholder,
    disabled,
    shouldCloseOnSelect,
    fixedHeight,
    locale: language,
    showPopperArrow: false,
    dayClassName: getDayClassName,
    calendarClassName: cx(calendarClassName, 'calendar'),
    renderCustomHeader: (customHeaderProps: ReactDatePickerCustomHeaderProps) => (
      <DatePickerHeader
        {...customHeaderProps}
        headerNodes={headerNodes}
        customClassName={customClassName}
        yearsOptions={yearsOptions}
        locale={language}
      />
    ),
    onBlur,
    onFocus,
    customTimeInput,
    showTimeInput: Boolean(customTimeInput),
    popperClassName: cx(popperClassName, 'popper'),
    dateFormat,
    className: cx('datepicker'),
    popperPlacement,
  };

  if (selectsRange) {
    return (
      <ReactDatePicker
        {...commonProps}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={onChange as (dates: DateRangeValue) => void}
        minDate={pickerMinDate}
        maxDate={pickerMaxDate}
      />
    );
  }

  return (
    <ReactDatePicker
      {...commonProps}
      selected={value as Date | null}
      onChange={onChange as (date: Date | null) => void}
      minDate={pickerMinDate}
      maxDate={pickerMaxDate}
    />
  );
};

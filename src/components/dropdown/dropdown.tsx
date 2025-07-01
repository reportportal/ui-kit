import { useRef, useState, ReactNode, FC, ReactElement, KeyboardEventHandler } from 'react';
import classNames from 'classnames/bind';
import { useFloating, offset, flip } from '@floating-ui/react-dom';
import { useSelect } from 'downshift';
import { useOnClickOutside } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { BaseIconButton } from '@components/baseIconButton';
import { DropdownIcon } from '@components/icons';
import { FieldLabel } from '@components/fieldLabel';
import { OptionsList } from './shared/OptionsList';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from './types';
import { OPEN_DROPDOWN_KEY_CODES, CLOSE_DROPDOWN_KEY_CODES, EventName } from './constants';
import { calculateDefaultIndex, calculateNextIndex, calculatePrevIndex } from './utils';
import styles from './dropdown.module.scss';

const cx = classNames.bind(styles);

export interface DropdownProps {
  // TODO: make value and options optional
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
  footer?: ReactNode;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=3424-12207&mode=design&t=dDq6moPaTzQLviS1-0
export const Dropdown: FC<DropdownProps> = ({
  multiSelect = false,
  value = multiSelect ? [] : '',
  options = [],
  disabled = false,
  error,
  onChange,
  onFocus,
  onBlur,
  mobileDisabled,
  title,
  touched = false,
  icon,
  variant,
  placeholder = '',
  label = '',
  renderOption,
  transparentBackground = false,
  className,
  toggleButtonClassName,
  isListWidthLimited = false,
  optionAll = { value: 'all', label: 'All' },
  isOptionAllVisible = false,
  onSelectAll = () => {},
  formatDisplayedValue,
  notScrollable = false,
  footer,
}): ReactElement => {
  const [opened, setOpened] = useState(false);
  const containerRef = useRef(null);
  const [eventName, setEventName] = useState<string | null>(null);
  const multiSelectedItems: DropdownOptionType[] | null =
    multiSelect && Array.isArray(value)
      ? options.filter((option) => value.includes(option.value))
      : null;
  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    middleware: [
      offset(5),
      flip({
        fallbackPlacements: ['bottom-start', 'top-start', 'bottom', 'top'],
      }),
    ],
  });
  const handleSelectAll = () => {
    if (isOptionAllVisible && Array.isArray(value)) {
      const allValues = options.map((item) => item.value);
      onChange(value.length === options.length ? [] : allValues);
      onSelectAll();
    }
  };

  const handleClickOutside = () => {
    if (opened) {
      setOpened(false);
      onBlur?.();
    }
  };
  useOnClickOutside(containerRef, handleClickOutside);

  const handleChange = (option: DropdownOptionType) => {
    if (option.disabled) {
      return;
    }
    if (multiSelect) {
      const newValue = Array.isArray(value) ? [...value] : [];
      const index = newValue.indexOf(option.value);
      if (index === -1) {
        newValue.push(option.value);
      } else {
        newValue.splice(index, 1);
      }
      onChange(newValue);
    } else {
      onChange(option.value);
    }
    setOpened((prevState) => multiSelect || !prevState);
  };

  const getSelectedOption = (): DropdownOptionType =>
    options.find(({ value: optionValue }) => optionValue === value) as DropdownOptionType;

  const defaultHighlightedIndex = calculateDefaultIndex(options, value);

  const {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    setHighlightedIndex,
    highlightedIndex,
    selectedItem,
  } = useSelect<DropdownOptionType>({
    items: options,
    itemToString: (item): string => (item?.label ? String(item.label) : placeholder) || '',
    selectedItem: getSelectedOption(),
    isOpen: opened,
    circularNavigation: true,
    defaultHighlightedIndex,
    onHighlightedIndexChange: (changes) => {
      switch (changes.type) {
        case useSelect.stateChangeTypes.MenuKeyDownArrowUp:
          setEventName(EventName.ON_KEY_DOWN);
          setHighlightedIndex(calculatePrevIndex(options, changes.highlightedIndex));
          return changes;

        case useSelect.stateChangeTypes.MenuKeyDownArrowDown:
          setEventName(EventName.ON_KEY_DOWN);
          setHighlightedIndex(calculateNextIndex(options, changes.highlightedIndex));
          return changes;

        default:
          return changes;
      }
    },
  });

  const onDropdownClick = () => {
    if (!disabled) {
      setOpened((prevState) => !prevState);
      if (opened) {
        onBlur?.();
      } else {
        onFocus?.();
      }
      setEventName(EventName.ON_CLICK);
    }
  };

  const getDisplayedValue = () => {
    if (multiSelect && Array.isArray(value) && options.length === value.length) {
      return optionAll.label;
    }

    const displayedValue = options.reduce<string[]>((labels, option) => {
      if ((Array.isArray(value) && value.includes(option.value)) || option.value === value) {
        labels.push(option.label);
      }
      return labels;
    }, []);

    if (displayedValue.length > 0) {
      return displayedValue.join(', ');
    }

    if ((!value && value !== false && value !== 0) || (Array.isArray(value) && !value.length)) {
      return placeholder;
    }
  };

  const displayedValue = getDisplayedValue();

  const handleToggleButtonKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    const { keyCode } = event;
    if (OPEN_DROPDOWN_KEY_CODES.includes(keyCode) && !opened) {
      event.preventDefault();
      setHighlightedIndex(defaultHighlightedIndex);
      setOpened(true);
      onFocus?.();
      setEventName(EventName.ON_KEY_DOWN);
    }
  };

  const handleKeyDownMenu: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCodes.ENTER_KEY_CODE) {
      const option = options[highlightedIndex];
      handleChange(option);
      if (!multiSelect) {
        setOpened(false);
        onBlur?.();
      }
      return;
    }

    if (CLOSE_DROPDOWN_KEY_CODES.includes(keyCode)) {
      event.stopPropagation();
      setOpened(false);
      onBlur?.();
    }
  };

  return (
    <div ref={containerRef} className={cx('container', className)} title={title}>
      {label && <FieldLabel {...getLabelProps()}>{label}</FieldLabel>}
      <button
        disabled={disabled}
        {...getToggleButtonProps({
          className: cx('dropdown', variant, toggleButtonClassName, {
            'transparent-background': transparentBackground,
            opened,
            disabled,
            error,
            touched,
            'mobile-disabled': mobileDisabled,
          }),
          onClick: onDropdownClick,
          onKeyDown: handleToggleButtonKeyDown,
          ref: refs.setReference,
        })}
        type="button"
      >
        {icon && <span className={cx('icon')}>{icon}</span>}
        <span
          className={cx('value', {
            placeholder: displayedValue === placeholder,
          })}
        >
          {formatDisplayedValue ? formatDisplayedValue(displayedValue) : displayedValue}
        </span>
        <BaseIconButton className={cx('arrow')} tabIndex={-1}>
          <DropdownIcon />
        </BaseIconButton>
      </button>
      {opened && (
        <div
          style={floatingStyles}
          className={cx('select-list', { opened, 'limited-width': isListWidthLimited })}
          {...getMenuProps({
            onKeyDown: handleKeyDownMenu,
            ref: refs.setFloating,
          })}
        >
          <OptionsList
            options={options}
            getItemProps={getItemProps}
            selectedItem={selectedItem}
            selectedItems={multiSelectedItems}
            highlightedIndex={highlightedIndex}
            eventName={eventName}
            multiSelect={multiSelect}
            renderOption={renderOption}
            onChange={handleChange}
            onMouseEnter={setHighlightedIndex}
            footer={footer}
            notScrollable={notScrollable}
            optionAll={optionAll}
            isOptionAllVisible={isOptionAllVisible}
            onSelectAll={handleSelectAll}
            value={value}
          />
        </div>
      )}
    </div>
  );
};

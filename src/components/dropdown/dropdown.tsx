import {
  useRef,
  useState,
  ReactNode,
  FC,
  ReactElement,
  KeyboardEventHandler,
  useCallback,
  useMemo,
  useLayoutEffect,
  MouseEvent,
  useEffect,
} from 'react';
import classNames from 'classnames/bind';
import { useFloating, offset, flip } from '@floating-ui/react-dom';
import { useSelect } from 'downshift';
import { Scrollbars } from 'rc-scrollbars';
import { useOnClickOutside } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { BaseIconButton } from '@components/baseIconButton';
import { ClearIcon, DropdownIcon } from '@components/icons';
import { Tooltip } from '@components/tooltip';
import { FieldLabel } from '@components/fieldLabel';
import { DropdownOption } from './dropdownOption';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from './types';
import {
  OPEN_DROPDOWN_KEY_CODES,
  CLOSE_DROPDOWN_KEY_CODES,
  EventName,
  SCROLLBARS_AUTO_HEIGHT_MAX,
} from './constants';
import {
  calculateDefaultIndex,
  calculateNextIndex,
  calculatePrevIndex,
  flattenOptions,
  getLeafOptions,
  getOptionLeafValues,
} from './utils';
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
  selectListClassName,
  isListWidthLimited = false,
  optionAll = { value: 'all', label: 'All' },
  isOptionAllVisible = false,
  onSelectAll = () => {},
  formatDisplayedValue,
  notScrollable = false,
  footer,
  includeGroupValue = false,
  clearable = false,
  onClear = () => {},
  clearButtonAriaLabel = 'Clear selection',
}): ReactElement => {
  const [opened, setOpened] = useState(false);
  const containerRef = useRef(null);
  const scrollbarsRef = useRef<Scrollbars | null>(null);
  const scrollPositionRef = useRef(0);
  const valueRef = useRef<HTMLSpanElement>(null);
  const [isValueOverflowed, setIsValueOverflowed] = useState(false);
  const [eventName, setEventName] = useState<string | null>(null);
  const savedHighlightedIndexRef = useRef<number | null>(null);
  const flattenedOptions = useMemo(() => flattenOptions(options), [options]);
  const selectableOptions = useMemo(
    () => flattenedOptions.map(({ option }) => option),
    [flattenedOptions],
  );
  const groupOptions = useMemo(() => {
    return flattenedOptions
      .filter(({ option }) => option.children?.length)
      .map(({ option }) => option);
  }, [flattenedOptions]);
  const leafOptions = useMemo(() => getLeafOptions(options), [options]);
  const leafValues = useMemo(
    () => leafOptions.map(({ value: optionValue }) => optionValue),
    [leafOptions],
  );
  const leafValuesByOption = useMemo(() => {
    const map = new Map<DropdownValue, DropdownValue[]>();
    groupOptions.forEach((option) => {
      map.set(option.value, getOptionLeafValues(option));
    });
    return map;
  }, [groupOptions]);
  const normalizeSelectedValues = useCallback(
    (selectedSet: Set<DropdownValue>) => {
      groupOptions.forEach((groupOption) => {
        const groupLeafValues = leafValuesByOption.get(groupOption.value) ?? [];
        const hasAllLeafValues =
          groupLeafValues.length > 0 &&
          groupLeafValues.every((leafValue) => selectedSet.has(leafValue));

        if (includeGroupValue && hasAllLeafValues) {
          selectedSet.add(groupOption.value);
        } else {
          selectedSet.delete(groupOption.value);
        }
      });

      return selectedSet;
    },
    [groupOptions, includeGroupValue, leafValuesByOption],
  );
  const selectedValuesSet = useMemo(() => {
    if (!multiSelect || !Array.isArray(value)) {
      return new Set<DropdownValue>();
    }
    return normalizeSelectedValues(new Set<DropdownValue>(value));
  }, [multiSelect, value, normalizeSelectedValues]);
  const hasSelectedValue = multiSelect
    ? Array.isArray(value) && value.length > 0
    : value || value === false || value === 0;
  const shouldShowClearButton = clearable && hasSelectedValue && !disabled;

  const handleScrollFrame = useCallback((values: { scrollTop: number }) => {
    scrollPositionRef.current = values.scrollTop;
  }, []);

  useLayoutEffect(() => {
    if (
      opened &&
      !notScrollable &&
      scrollbarsRef.current &&
      !(multiSelect && savedHighlightedIndexRef.current !== null)
    ) {
      scrollbarsRef.current.scrollTop(scrollPositionRef.current);
    }
  }, [opened, notScrollable, value, multiSelect]);

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
    if (!isOptionAllVisible) {
      return;
    }

    const currentValue = Array.isArray(value) ? value : [];
    const nextValueSet = new Set<DropdownValue>(currentValue);
    const shouldSelectAll = leafValues.some((leafValue) => !nextValueSet.has(leafValue));

    leafValues.forEach((leafValue) => {
      if (shouldSelectAll) {
        nextValueSet.add(leafValue);
      } else {
        nextValueSet.delete(leafValue);
      }
    });

    const normalizedValues = normalizeSelectedValues(nextValueSet);
    onChange(Array.from(normalizedValues));
    onSelectAll();
  };

  const closeHandler = useCallback(() => {
    setOpened(false);
    onBlur?.();
  }, [onBlur]);

  const performClear = useCallback(() => {
    if (disabled) {
      return;
    }
    const clearedValue = multiSelect ? [] : '';
    onChange(clearedValue);
    onClear();
    closeHandler();
    requestAnimationFrame(() => {
      const referenceElement = refs.reference.current;
      if (referenceElement && referenceElement instanceof HTMLElement) {
        referenceElement.focus();
      }
    });
  }, [disabled, multiSelect, onChange, onClear, closeHandler, refs]);

  const handleClear = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      performClear();
    },
    [performClear],
  );

  const handleClickOutside = () => {
    if (opened) {
      closeHandler();
    }
  };
  useOnClickOutside(containerRef, handleClickOutside);

  const handleChange = (option: DropdownOptionType) => {
    if (option.disabled) {
      return;
    }
    if (multiSelect) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValueSet = new Set<DropdownValue>(currentValue);

      if (option.children?.length) {
        const leafValuesForOption = leafValuesByOption.get(option.value) ?? [];
        const shouldSelect = leafValuesForOption.some((leafValue) => !newValueSet.has(leafValue));
        leafValuesForOption.forEach((leafValue) => {
          if (shouldSelect) {
            newValueSet.add(leafValue);
          } else {
            newValueSet.delete(leafValue);
          }
        });
      } else if (newValueSet.has(option.value)) {
        newValueSet.delete(option.value);
      } else {
        newValueSet.add(option.value);
      }

      const normalizedValues = normalizeSelectedValues(newValueSet);
      onChange(Array.from(normalizedValues));
    } else {
      onChange(option.value);
    }
    setOpened((prevState) => multiSelect || !prevState);
  };

  const getSelectedOption = (): DropdownOptionType =>
    selectableOptions.find(({ value: optionValue }) => optionValue === value) as DropdownOptionType;

  const defaultHighlightedIndex = calculateDefaultIndex(selectableOptions, value);

  const {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    setHighlightedIndex,
    highlightedIndex,
    selectedItem,
  } = useSelect<DropdownOptionType>({
    items: selectableOptions,
    itemToString: (item): string => (item?.label ? String(item.label) : placeholder) || '',
    selectedItem: getSelectedOption(),
    isOpen: opened,
    circularNavigation: true,
    defaultHighlightedIndex,
    onHighlightedIndexChange: (changes) => {
      switch (changes.type) {
        case useSelect.stateChangeTypes.MenuKeyDownArrowUp:
          setEventName(EventName.ON_KEY_DOWN);
          setHighlightedIndex(calculatePrevIndex(selectableOptions, changes.highlightedIndex));
          return changes;

        case useSelect.stateChangeTypes.MenuKeyDownArrowDown:
          setEventName(EventName.ON_KEY_DOWN);
          setHighlightedIndex(calculateNextIndex(selectableOptions, changes.highlightedIndex));
          return changes;

        default:
          return changes;
      }
    },
  });

  useEffect(() => {
    if (
      multiSelect &&
      opened &&
      savedHighlightedIndexRef.current !== null &&
      savedHighlightedIndexRef.current >= 0 &&
      savedHighlightedIndexRef.current < selectableOptions.length
    ) {
      setHighlightedIndex(savedHighlightedIndexRef.current);
      savedHighlightedIndexRef.current = null;
      requestAnimationFrame(() => {
        if (scrollbarsRef.current && !notScrollable) {
          scrollbarsRef.current.scrollTop(scrollPositionRef.current);
        }
      });
    }
  }, [multiSelect, opened, value, selectableOptions.length, setHighlightedIndex, notScrollable]);

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

  const displayedValue = useMemo(() => {
    if (
      multiSelect &&
      Array.isArray(value) &&
      leafValues.length > 0 &&
      leafValues.every((leafValue) => selectedValuesSet.has(leafValue))
    ) {
      return optionAll.label;
    }

    const displayedValueArray = selectableOptions.reduce<string[]>((labels, option) => {
      if ((Array.isArray(value) && value.includes(option.value)) || option.value === value) {
        labels.push(option.label);
      }
      return labels;
    }, []);

    if (displayedValueArray.length > 0) {
      return displayedValueArray.join(', ');
    }

    if ((!value && value !== false && value !== 0) || (Array.isArray(value) && !value.length)) {
      return placeholder;
    }

    return undefined;
  }, [
    multiSelect,
    value,
    leafValues,
    selectedValuesSet,
    optionAll.label,
    selectableOptions,
    placeholder,
  ]);

  useEffect(() => {
    if (valueRef.current) {
      const { offsetWidth, scrollWidth } = valueRef.current;
      setIsValueOverflowed(scrollWidth > offsetWidth);
    } else {
      setIsValueOverflowed(false);
    }
  }, [displayedValue]);

  const handleToggleButtonKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { keyCode } = event;
    if (!OPEN_DROPDOWN_KEY_CODES.includes(keyCode)) {
      return;
    }

    if (event.target !== event.currentTarget) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (opened) {
      return;
    }

    setHighlightedIndex(defaultHighlightedIndex);
    setOpened(true);
    onFocus?.();
    setEventName(EventName.ON_KEY_DOWN);
  };

  const handleKeyDownMenu: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCodes.ENTER_KEY_CODE || keyCode === KeyCodes.SPACE_KEY_CODE) {
      const option = selectableOptions[highlightedIndex];
      if (!option) {
        return;
      }
      if (multiSelect) {
        savedHighlightedIndexRef.current = highlightedIndex;
      }
      handleChange(option);
      if (!multiSelect) {
        closeHandler();
      }
      return;
    }

    if (CLOSE_DROPDOWN_KEY_CODES.includes(keyCode)) {
      event.stopPropagation();
      closeHandler();
    }
  };

  const renderOptions = () => (
    <div className={cx('options-container')}>
      {multiSelect && isOptionAllVisible && (
        <>
          <DropdownOption
            option={optionAll}
            selected={
              Array.isArray(value) &&
              leafValues.length > 0 &&
              leafValues.every((leafValue) => selectedValuesSet.has(leafValue))
            }
            onChange={handleSelectAll}
            multiSelect={multiSelect}
            isPartiallyChecked={
              leafValues.some((leafValue) => selectedValuesSet.has(leafValue)) &&
              !leafValues.every((leafValue) => selectedValuesSet.has(leafValue))
            }
          />
          <div className={cx('divider')} />{' '}
        </>
      )}
      {flattenedOptions.map(({ option, depth }, index) => {
        const optionLeafValues = leafValuesByOption.get(option.value) ?? [option.value];
        const isMultiChecked =
          multiSelect && optionLeafValues.every((leafValue) => selectedValuesSet.has(leafValue));
        const isPartiallyChecked =
          multiSelect &&
          option.children?.length &&
          optionLeafValues.some((leafValue) => selectedValuesSet.has(leafValue)) &&
          !isMultiChecked;

        return (
          <DropdownOption
            key={option.value}
            {...getItemProps({
              item: option,
              index,
            })}
            multiSelect={multiSelect}
            selected={
              multiSelect ? isMultiChecked : option.value === (selectedItem?.value ?? selectedItem)
            }
            option={{ title: option.label, ...option }}
            highlightHovered={highlightedIndex === index && eventName !== EventName.ON_CLICK}
            render={renderOption}
            onChange={option.disabled ? null : () => handleChange(option)}
            onMouseEnter={() => setHighlightedIndex(index)}
            depth={depth}
            hasChildren={!!option.children?.length}
            isPartiallyChecked={isPartiallyChecked}
          />
        );
      })}
      {footer && (
        <>
          <div className={cx('divider')} />
          {typeof footer === 'function' ? footer(closeHandler) : footer}
        </>
      )}
    </div>
  );

  const renderValue = () => {
    const formattedValue = formatDisplayedValue
      ? formatDisplayedValue(displayedValue)
      : displayedValue;
    const contentNode = (
      <span
        ref={valueRef}
        className={cx('value', {
          placeholder: displayedValue === placeholder,
        })}
      >
        {formattedValue}
      </span>
    );
    const shouldShowTooltip = hasSelectedValue && !!formattedValue && isValueOverflowed;

    if (!shouldShowTooltip) {
      return contentNode;
    }

    return (
      <Tooltip content={formattedValue} placement="top" wrapperClassName={cx('value-tooltip')}>
        {contentNode}
      </Tooltip>
    );
  };

  const toggleButtonProps = getToggleButtonProps({
    className: cx('dropdown', variant, toggleButtonClassName, {
      'transparent-background': transparentBackground,
      opened,
      disabled,
      error,
      touched,
      'mobile-disabled': mobileDisabled,
    }),
    onClick: onDropdownClick,
    onKeyDown: handleToggleButtonKeyDown as unknown as KeyboardEventHandler<HTMLButtonElement>,
    ref: refs.setReference,
  });

  const { type: toggleButtonType, ...restToggleButtonProps } = toggleButtonProps;
  void toggleButtonType;

  return (
    <div ref={containerRef} className={cx('container', className)} title={title}>
      {label && <FieldLabel {...getLabelProps()}>{label}</FieldLabel>}
      <div
        {...restToggleButtonProps}
        role="button"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : (restToggleButtonProps.tabIndex ?? 0)}
      >
        {icon && <span className={cx('icon')}>{icon}</span>}
        <div className={cx('value-wrapper')}>{renderValue()}</div>
        {shouldShowClearButton && (
          <BaseIconButton
            className={cx('clear-button')}
            onClick={handleClear}
            onKeyDown={(event) => {
              const { keyCode } = event;
              if (keyCode === KeyCodes.ENTER_KEY_CODE || keyCode === KeyCodes.SPACE_KEY_CODE) {
                event.preventDefault();
                event.stopPropagation();
                performClear();
              }
            }}
            aria-label={clearButtonAriaLabel}
          >
            <ClearIcon />
          </BaseIconButton>
        )}
        <span className={cx('arrow')} aria-hidden="true">
          <DropdownIcon />
        </span>
      </div>
      {opened && (
        <div
          style={floatingStyles}
          className={cx(
            'select-list',
            { opened, 'limited-width': isListWidthLimited },
            selectListClassName,
          )}
          {...getMenuProps({
            onKeyDown: handleKeyDownMenu,
            ref: refs.setFloating,
          })}
        >
          {notScrollable ? (
            renderOptions()
          ) : (
            <Scrollbars
              autoHeight
              autoHeightMax={SCROLLBARS_AUTO_HEIGHT_MAX}
              hideTracksWhenNotNeeded
              ref={(instance) => {
                scrollbarsRef.current = instance;
              }}
              onScrollFrame={handleScrollFrame}
            >
              {renderOptions()}
            </Scrollbars>
          )}
        </div>
      )}
    </div>
  );
};

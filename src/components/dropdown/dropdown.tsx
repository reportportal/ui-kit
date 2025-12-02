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
import { isEmpty } from 'es-toolkit/compat';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import { useFloating, offset, flip, size, autoUpdate } from '@floating-ui/react-dom';
import { useSelect } from 'downshift';
import { Scrollbars } from 'rc-scrollbars';
import { KeyCodes } from '@common/constants/keyCodes';
import { BaseIconButton } from '@components/baseIconButton';
import { ClearIcon, DropdownIcon } from '@components/icons';
import { Tooltip } from '@components/tooltip';
import { FieldLabel } from '@components/fieldLabel';
import { AdaptiveTagList } from '@components/adaptiveTagList';
import { DropdownOption } from './dropdownOption';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from './types';
import {
  OPEN_DROPDOWN_KEY_CODES,
  CLOSE_DROPDOWN_KEY_CODES,
  EventName,
  SCROLLBARS_AUTO_HEIGHT_MAX,
  DROPDOWN_PORTAL_MENU_ATTR,
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
  /** Portal root element for tooltip rendering (e.g., document.body to prevent clipping) */
  tooltipPortalRoot?: Element;
  /** Z-index for tooltip when rendered in portal (default: 9) */
  tooltipZIndex?: number;
  /**
   * Portal root element for dropdown menu rendering.
   * When provided, the menu will be rendered in this element using React Portal.
   * Useful for preventing clipping in containers with overflow: hidden (e.g., Modal, SidePanel).
   * @example menuPortalRoot={document.body}
   */
  menuPortalRoot?: Element;
  /** Whether to render selected values as tags using AdaptiveTagList (only for multiSelect mode) */
  multiSelectWithTags?: boolean;
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
  tooltipPortalRoot,
  tooltipZIndex,
  menuPortalRoot,
  multiSelectWithTags = false,
}): ReactElement => {
  const [opened, setOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
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
        ...(menuPortalRoot && {
          boundary: document.documentElement,
          rootBoundary: 'viewport',
        }),
      }),
      menuPortalRoot
        ? size({
            apply({ rects, elements }) {
              const referenceWidth = rects.reference.width;
              Object.assign(elements.floating.style, {
                width: `${referenceWidth}px`,
                minWidth: `${referenceWidth}px`,
                maxWidth: `${referenceWidth}px`,
              });
            },
          })
        : null,
    ].filter(Boolean),
    whileElementsMounted:
      opened && menuPortalRoot
        ? (reference, floating, update) =>
            autoUpdate(reference, floating, update, {
              animationFrame: true,
            })
        : undefined,
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

  const handleClickOutside = useCallback(
    (event?: Event) => {
      if (!opened) {
        return;
      }

      const target = event?.target as Node | null;
      if (!target) {
        return;
      }

      const isClickInsideContainer = containerRef.current?.contains(target);
      const isClickInsideMenu = menuRef.current?.contains(target);

      if (!isClickInsideContainer && !isClickInsideMenu) {
        closeHandler();
      }
    },
    [opened, closeHandler],
  );

  useEffect(() => {
    if (!opened) {
      return undefined;
    }

    const listener = (event: Event) => {
      handleClickOutside(event);
    };

    document.addEventListener('pointerdown', listener);

    return () => {
      document.removeEventListener('pointerdown', listener);
    };
  }, [opened, handleClickOutside]);

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
    getMenuProps: getMenuPropsOriginal,
    getItemProps,
    setHighlightedIndex,
    highlightedIndex,
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

  const setFloatingRef = useCallback(
    (node: HTMLDivElement | null) => {
      menuRef.current = node;
      refs.setFloating(node);
    },
    [refs],
  );

  const getMenuProps = useCallback(
    (props: Parameters<typeof getMenuPropsOriginal>[0] = {}) => {
      const menuProps = getMenuPropsOriginal(props);
      const originalRef = menuProps.ref;
      return {
        ...menuProps,
        ref: (node: HTMLDivElement | null) => {
          setFloatingRef(node);
          if (typeof originalRef === 'function') {
            originalRef(node);
          } else if (originalRef) {
            (originalRef as { current: HTMLDivElement | null }).current = node;
          }
        },
      };
    },
    [getMenuPropsOriginal, setFloatingRef],
  );

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

  // Prevent page scrolling only during initial dropdown opening when rendered in a portal
  // Scroll lock is active for a short period (300ms) to prevent browser auto-scroll behavior
  // After that, normal scrolling is allowed while dropdown remains open

  useLayoutEffect(() => {
    if (!opened || !menuPortalRoot) {
      return;
    }

    let savedScrollY = window.scrollY;
    let isLockActive = true;
    const LOCK_DURATION = 300;

    const preventScroll = () => {
      if (!isLockActive) {
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY !== savedScrollY) {
        window.scrollTo(0, savedScrollY);
      }
    };

    const handleScroll = (event: Event) => {
      if (!isLockActive) {
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      preventScroll();
    };

    savedScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: false, capture: true });

    requestAnimationFrame(() => {
      savedScrollY = window.scrollY;
      preventScroll();
    });

    const timeoutId = setTimeout(() => {
      isLockActive = false;
    }, LOCK_DURATION);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [opened, menuPortalRoot]);

  // Close dropdown on window resize when menu is rendered in portal
  // This prevents menu from being positioned incorrectly after layout changes
  useEffect(() => {
    if (!opened || !menuPortalRoot) {
      return;
    }

    const handleResize = () => {
      closeHandler();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [opened, menuPortalRoot, closeHandler]);

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
            selected={multiSelect ? isMultiChecked : option.value === value}
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
    // Render as tags when multiSelectWithTags is enabled
    if (multiSelectWithTags && multiSelect && Array.isArray(value)) {
      const selectedLabels = selectableOptions.reduce<string[]>((labels, option) => {
        if (value.includes(option.value)) {
          labels.push(option.label);
        }
        return labels;
      }, []);

      const handleRemoveTag = (tagLabel: string) => {
        const optionToRemove = selectableOptions.find((opt) => opt.label === tagLabel);

        if (!optionToRemove) {
          return;
        }

        const currentValue = Array.isArray(value) ? value : [];
        const newValueSet = new Set<DropdownValue>(currentValue);

        newValueSet.delete(optionToRemove.value);

        const normalizedValues = normalizeSelectedValues(newValueSet);

        onChange(Array.from(normalizedValues));
      };

      if (isEmpty(selectedLabels)) {
        return (
          <span
            ref={valueRef}
            className={cx('value', {
              placeholder: true,
            })}
          >
            {placeholder}
          </span>
        );
      }

      return (
        <div className={cx('tags-wrapper')}>
          <AdaptiveTagList
            tags={selectedLabels}
            onRemoveTag={handleRemoveTag}
            isShowAllView={true}
            defaultVisibleLines={999}
            removeTagAriaLabel={(tag) => `Remove ${tag}`}
          />
        </div>
      );
    }

    // Default text rendering
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
      <Tooltip
        content={formattedValue}
        placement="top"
        wrapperClassName={cx('value-tooltip')}
        portalRoot={tooltipPortalRoot}
        zIndex={tooltipZIndex}
      >
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
      {label && (
        <FieldLabel
          {...getLabelProps()}
          onClick={() => !disabled && onDropdownClick()}
          style={{ cursor: disabled ? 'default' : 'pointer' }}
        >
          {label}
        </FieldLabel>
      )}
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
      {opened &&
        (() => {
          const referenceWidth = refs.reference.current?.getBoundingClientRect().width;
          const menuStyle =
            menuPortalRoot && referenceWidth
              ? {
                  ...floatingStyles,
                  width: `${referenceWidth}px`,
                  minWidth: `${referenceWidth}px`,
                  maxWidth: `${referenceWidth}px`,
                }
              : floatingStyles;

          const menuContent = (
            <div
              style={menuStyle}
              className={cx(
                'select-list',
                {
                  opened,
                  'limited-width': isListWidthLimited,
                },
                selectListClassName,
              )}
              {...(menuPortalRoot && { [DROPDOWN_PORTAL_MENU_ATTR]: '' })}
              {...getMenuProps({
                onKeyDown: handleKeyDownMenu,
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
          );

          return menuPortalRoot ? createPortal(menuContent, menuPortalRoot) : menuContent;
        })()}
    </div>
  );
};

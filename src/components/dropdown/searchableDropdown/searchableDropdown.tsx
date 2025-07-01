import { useRef, useState, ReactNode, FC, ReactElement, KeyboardEventHandler } from 'react';
import classNames from 'classnames/bind';
import { useFloating, offset, flip } from '@floating-ui/react-dom';
import { useCombobox } from 'downshift';
import { useOnClickOutside } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { BaseIconButton } from '@components/baseIconButton';
import { DropdownIcon, PlusIcon } from '@components/icons';
import { FieldLabel } from '@components/fieldLabel';
import {
  OptionsList,
  filterOptions,
  useDropdownLogic,
  getFormattedDisplayValue,
  getSelectedOption,
  getMultiSelectedItems,
} from '../shared';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from '../types';
import { CLOSE_DROPDOWN_KEY_CODES, EventName } from '../constants';
import { calculateDefaultIndex } from '../utils';
import dropdownStyles from '../dropdown.module.scss';

const cx = classNames.bind(dropdownStyles);

export interface SearchableDropdownProps {
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
  noResultsMessage?: string;
  allowCreateNew?: boolean;
  onCreateNew?: (inputValue: string) => void;
  createNewLabel?: string;
}

export const SearchableDropdown: FC<SearchableDropdownProps> = ({
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
  noResultsMessage = 'No matches found',
  allowCreateNew = false,
  onCreateNew,
  createNewLabel = '+ Create new',
}): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const containerRef = useRef(null);
  const [eventName, setEventName] = useState<string | null>(null);

  const filteredOptions = filterOptions(options, searchValue);
  const multiSelectedItems = getMultiSelectedItems(value, options, multiSelect);
  const selectedOption = getSelectedOption(value, options);

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    middleware: [
      offset(5),
      flip({
        fallbackPlacements: ['bottom-start', 'top-start', 'bottom', 'top'],
      }),
    ],
  });

  const defaultHighlightedIndex = calculateDefaultIndex(filteredOptions, value);

  const {
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    setHighlightedIndex,
    highlightedIndex,
    selectedItem,
    isOpen,
    closeMenu,
  } = useCombobox<DropdownOptionType>({
    items: filteredOptions,
    itemToString: (item): string => (item?.label ? String(item.label) : placeholder) || '',
    selectedItem: selectedOption,
    defaultHighlightedIndex,
    onInputValueChange: ({ inputValue }) => {
      setSearchValue(inputValue || '');
    },
    onIsOpenChange: ({ isOpen: newIsOpen }) => {
      if (!newIsOpen) {
        onBlur?.();
      } else {
        onFocus?.();
      }
    },
  });

  // Use shared dropdown logic (after useCombobox to access closeMenu)
  const { handleChange, handleSelectAll } = useDropdownLogic({
    value,
    options,
    multiSelect,
    onChange,
    onSelectAll,
    isOptionAllVisible,
    onClose: closeMenu,
  });

  const handleClickOutside = () => {
    if (isOpen) {
      closeMenu();
    }
  };
  useOnClickOutside(containerRef, handleClickOutside);

  const handleInputFocus = () => {
    if (!disabled) {
      setEventName(EventName.ON_CLICK);
    }
  };

  const handleInputClick = () => {
    if (!disabled) {
      setEventName(EventName.ON_CLICK);
    }
  };

  const handleKeyDownMenu: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCodes.ENTER_KEY_CODE) {
      const option = filteredOptions[highlightedIndex];
      if (option) {
        handleChange(option);
      } else if (allowCreateNew && searchValue && onCreateNew) {
        onCreateNew(searchValue);
        if (!multiSelect) {
          closeMenu();
        }
      }
      return;
    }

    if (CLOSE_DROPDOWN_KEY_CODES.includes(keyCode)) {
      event.stopPropagation();
      closeMenu();
    }
  };

  const handleCreateNew = () => {
    if (allowCreateNew && searchValue && onCreateNew) {
      onCreateNew(searchValue);
      if (!multiSelect) {
        closeMenu();
      }
    }
  };

  const createNewButton =
    allowCreateNew && searchValue && filteredOptions.length === 0 ? (
      <button className={cx('create-new-button')} onClick={handleCreateNew}>
        <span className={cx('plus-icon')}>
          <PlusIcon />
        </span>
        {createNewLabel}: "{searchValue}"
      </button>
    ) : undefined;

  return (
    <div ref={containerRef} className={cx('container', className)} title={title}>
      {label && <FieldLabel {...getLabelProps()}>{label}</FieldLabel>}
      <div
        className={cx('dropdown', variant, toggleButtonClassName, {
          'transparent-background': transparentBackground,
          opened: isOpen,
          disabled,
          error,
          touched,
          'mobile-disabled': mobileDisabled,
        })}
        ref={refs.setReference}
      >
        {icon && <span className={cx('icon')}>{icon}</span>}
        <input
          {...getInputProps({
            disabled,
            placeholder: isOpen ? 'Search...' : placeholder,
            value: isOpen
              ? searchValue
              : getFormattedDisplayValue(
                  value,
                  options,
                  multiSelect,
                  optionAll,
                  placeholder,
                  formatDisplayedValue,
                ),
            onFocus: handleInputFocus,
            onClick: handleInputClick,
            className: cx('search-input-field'),
          })}
        />
        <BaseIconButton className={cx('arrow')} tabIndex={-1} onClick={handleInputClick}>
          <DropdownIcon />
        </BaseIconButton>
      </div>
      {isOpen && (
        <div
          style={floatingStyles}
          className={cx('select-list', { opened: isOpen, 'limited-width': isListWidthLimited })}
          {...getMenuProps({
            onKeyDown: handleKeyDownMenu,
            ref: refs.setFloating,
          })}
        >
          <OptionsList
            options={filteredOptions}
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
            noResultsMessage={noResultsMessage}
            createNewButton={createNewButton}
          />
        </div>
      )}
    </div>
  );
};

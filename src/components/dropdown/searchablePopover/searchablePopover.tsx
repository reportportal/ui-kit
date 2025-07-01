import { useState, ReactNode, FC, ReactElement, useRef, KeyboardEventHandler } from 'react';
import classNames from 'classnames/bind';
import { useCombobox } from 'downshift';
import { Popover } from '@components/popover';
import { KeyCodes } from '@common/constants/keyCodes';
import { PlusIcon } from '@components/icons';
import { SearchInput } from '../shared/SearchInput';
import { OptionsList } from '../shared/OptionsList';
import { filterOptions } from '../shared/utils';
import { RenderDropdownOption, DropdownOptionType, DropdownValue } from '../types';
import { CLOSE_DROPDOWN_KEY_CODES } from '../constants';
import { calculateDefaultIndex } from '../utils';
import dropdownStyles from '../dropdown.module.scss';

const cx = classNames.bind(dropdownStyles);

export interface SearchablePopoverProps {
  options: DropdownOptionType[];
  value: DropdownValue | DropdownValue[];
  onChange: (value: DropdownValue | DropdownValue[]) => void;
  children: ReactNode;
  searchPlaceholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  renderOption?: RenderDropdownOption;
  multiSelect?: boolean;
  optionAll?: DropdownOptionType;
  isOptionAllVisible?: boolean;
  onSelectAll?: () => void;
  notScrollable?: boolean;
  footer?: ReactNode;
  noResultsMessage?: string;
  allowCreateNew?: boolean;
  onCreateNew?: (inputValue: string) => void;
  createNewLabel?: string;
  popoverClassName?: string;
  width?: number;
  height?: number;

  // Popover-specific props
  className?: string;
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  fallbackPlacements?: Array<
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
  >;
  title?: string;
  arrowOffset?: number;
  safeZone?: number;
  arrowColor?: string;
  dataAutomationId?: string;
  isOpened?: boolean;
  setIsOpened?: (isOpened: boolean) => void;
  isCentered?: boolean;
}

export const SearchablePopover: FC<SearchablePopoverProps> = ({
  // Required props
  options = [],
  value = [],
  onChange,
  children,

  // Search and functionality props
  searchPlaceholder = 'Find or create new...',
  onFocus,
  onBlur,
  renderOption,
  multiSelect = false,
  optionAll = { value: 'all', label: 'All' },
  isOptionAllVisible = false,
  onSelectAll = () => {},
  notScrollable = false,
  footer,
  noResultsMessage = 'No matches found',
  allowCreateNew = false,
  onCreateNew,
  createNewLabel = '+ Create new',
  popoverClassName,
  width = 300,
  height,

  // Popover-specific props
  className,
  placement,
  fallbackPlacements,
  title,
  arrowOffset,
  safeZone,
  arrowColor,
  dataAutomationId,
  isOpened,
  setIsOpened,
  isCentered,
}): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const [internalIsOpened, setInternalIsOpened] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const popoverOpen = setIsOpened ? isOpened : internalIsOpened;
  const setPopoverOpen = setIsOpened || setInternalIsOpened;

  const filteredOptions = filterOptions(options, searchValue);

  const multiSelectedItems: DropdownOptionType[] | null =
    multiSelect && Array.isArray(value)
      ? options.filter((option) => value.includes(option.value))
      : null;

  const handleSelectAll = () => {
    if (isOptionAllVisible && Array.isArray(value)) {
      const allValues = options.map((item) => item.value);
      onChange(value.length === options.length ? [] : allValues);
      onSelectAll();
    }
  };

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
      setPopoverOpen(false);
      setSearchValue('');
      onBlur?.();
    }
  };

  const getSelectedOption = (): DropdownOptionType | null =>
    options.find(({ value: optionValue }) => optionValue === value) || null;

  const defaultHighlightedIndex = calculateDefaultIndex(filteredOptions, value);

  const {
    getMenuProps,
    getInputProps,
    getItemProps,
    setHighlightedIndex,
    highlightedIndex,
    selectedItem,
  } = useCombobox<DropdownOptionType>({
    items: filteredOptions,
    itemToString: (item): string => item?.label || '',
    selectedItem: getSelectedOption(),
    isOpen: popoverOpen,
    defaultHighlightedIndex,
    onInputValueChange: ({ inputValue }) => {
      setSearchValue(inputValue || '');
    },
    onIsOpenChange: ({ isOpen: newIsOpen }) => {
      setPopoverOpen(newIsOpen || false);
      if (!newIsOpen) {
        setSearchValue('');
        onBlur?.();
      } else {
        onFocus?.();
        // Focus the input when opening
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    },
  });

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCodes.ENTER_KEY_CODE) {
      const option = filteredOptions[highlightedIndex];
      if (option) {
        handleChange(option);
      } else if (allowCreateNew && searchValue && onCreateNew) {
        onCreateNew(searchValue);
        setSearchValue('');
        if (!multiSelect) {
          setPopoverOpen(false);
          onBlur?.();
        }
      }
      return;
    }

    if (CLOSE_DROPDOWN_KEY_CODES.includes(keyCode)) {
      event.stopPropagation();
      setPopoverOpen(false);
      setSearchValue('');
      onBlur?.();
    }
  };

  const handleCreateNew = () => {
    if (allowCreateNew && searchValue && onCreateNew) {
      onCreateNew(searchValue);
      setSearchValue('');
      if (!multiSelect) {
        setPopoverOpen(false);
        onBlur?.();
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

  const popoverContent = (
    <div
      className={cx('searchable-popover-content', popoverClassName)}
      style={{ width, height }}
      {...getMenuProps({
        onKeyDown: handleKeyDown,
      })}
    >
      <SearchInput
        {...getInputProps()}
        ref={inputRef}
        value={searchValue}
        placeholder={searchPlaceholder}
        onChange={setSearchValue}
        showClearButton={!!searchValue}
        onClear={() => setSearchValue('')}
      />
      <OptionsList
        options={filteredOptions}
        getItemProps={getItemProps}
        selectedItem={selectedItem}
        selectedItems={multiSelectedItems}
        highlightedIndex={highlightedIndex}
        eventName={null}
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
  );

  return (
    <Popover
      className={className}
      placement={placement}
      fallbackPlacements={fallbackPlacements}
      title={title}
      arrowOffset={arrowOffset}
      safeZone={safeZone}
      arrowColor={arrowColor}
      dataAutomationId={dataAutomationId}
      isCentered={isCentered}
      content={popoverContent}
      isOpened={popoverOpen}
      setIsOpened={setPopoverOpen}
    >
      {children}
    </Popover>
  );
};

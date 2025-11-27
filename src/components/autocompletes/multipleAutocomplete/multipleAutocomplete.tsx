/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ComponentProps, KeyboardEvent, ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { isEmpty } from 'es-toolkit/compat';
import { ControllerStateAndHelpers } from 'downshift';

import { ClearIcon, DropdownIcon } from '@/components/icons';
import { default as FieldText } from '@/components/fieldText';
import { useFloating, autoUpdate } from '@floating-ui/react';

import { AutocompleteMenu } from '../common/autocompleteMenu';
import { SelectedItems } from './selectedItems';
import {
  DownshiftStore,
  GetStateAndHelpersT,
  MultipleDownshift,
  MultipleDownshiftProps,
} from './multipleDownshift';
import { isEqual } from '../utils';
import { GetItemPropsT } from '../types';
import { ENTER_KEY_NAME } from '../constants';

import styles from './multipleAutocomplete.module.scss';

const cx = classNames.bind(styles);

export interface MultipleAutocompleteProps<T> {
  options: T[];
  loading: boolean;
  onStateChange: MultipleDownshiftProps<T>['onStateChange'];
  value: T[];
  placeholder: string;
  error: string | boolean;
  touched: boolean;
  creatable: boolean;
  editable: boolean;
  renderOption?: (
    value: T,
    index: number,
    isNew: boolean,
    getItemProps: GetItemPropsT<T>,
  ) => ReactNode;
  onChange: (selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void;
  onFocus: () => void;
  onBlur: () => void;
  disabled: boolean;
  mobileDisabled: boolean;
  inputProps: ComponentProps<typeof FieldText>;
  parseValueToString: (value: T | null) => string;
  minLength?: number | null;
  maxLength?: number | null;
  async?: boolean;
  customClass: string;
  createWithoutConfirmation: boolean;
  getItemValidationErrorType?: (item: T) => string;
  clearItemsError: () => void;
  isDropdownMode?: boolean;
  getAdditionalCreationCondition: (value: string) => boolean;
  highlightUnStoredItem: boolean;
  parseInputValueFn: ((value: string) => T[]) | null;
  handleUnStoredItemCb:
    | ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
    | null;
  dataAutomationId?: string;
  existingItemsMap: Record<string | number, boolean>;
  optionVariant: ComponentProps<typeof AutocompleteMenu>['optionVariant'];
  customizeNewSelectedValue: (value: T) => T;
  renderCustomSelectedItem?: (item: T) => ReactNode;
  getUniqKey?: (item: T) => string;
  customEmptyListMessage?: string;
  customNoMatchesMessage?: string;
  useFixedPositioning?: boolean;
  newItemButtonText?: string;
  menuClassName?: string;
  selectedItemSingleLine?: boolean;
  selectedItemShowTooltipOnTruncate?: boolean;
  selectedItemClassName?: string;
  selectedItemTextClassName?: string;
  selectedItemTooltipPortalRoot?: Element;
}

export const MultipleAutocomplete = <T,>(componentsProps: MultipleAutocompleteProps<T>) => {
  const {
    options = [],
    loading = false,
    onStateChange = () => {},
    value = [],
    placeholder = '',
    error = '',
    touched = false,
    creatable = false,
    editable = false,
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    disabled = false,
    isDropdownMode = false,
    mobileDisabled = false,
    inputProps = {},
    parseValueToString = ((item: T) =>
      item == null ? '' : String(item)) as MultipleAutocompleteProps<T>['parseValueToString'],
    maxLength = null,
    async = false,
    customClass = '',
    createWithoutConfirmation = false,
    getItemValidationErrorType = null,
    clearItemsError = () => {},
    getAdditionalCreationCondition = (() =>
      true) as MultipleAutocompleteProps<T>['getAdditionalCreationCondition'],
    highlightUnStoredItem = false,
    parseInputValueFn = null,
    handleUnStoredItemCb = null,
    dataAutomationId = '',
    existingItemsMap = {},
    customizeNewSelectedValue = (newValue) => newValue,
    renderCustomSelectedItem,
    useFixedPositioning,
    newItemButtonText = '',
    menuClassName = '',
    selectedItemSingleLine,
    selectedItemShowTooltipOnTruncate,
    selectedItemClassName,
    selectedItemTextClassName,
    selectedItemTooltipPortalRoot,
    ...props
  } = componentsProps;

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    strategy: useFixedPositioning ? 'fixed' : 'absolute',
    whileElementsMounted: autoUpdate,
  });

  const placeholderIfEmptyField = value.length === 0 && !disabled ? placeholder : '';
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    clearItemsError();
  }, [clearItemsError, value]);

  const handleChange = (
    selectedItems: T | T[] | null,
    downshift: ControllerStateAndHelpers<T> | null,
  ) => {
    onChange(selectedItems, downshift);
  };

  const getOptionProps =
    (
      getItemProps: GetItemPropsT<T>,
      highlightedIndex: number | null,
      selectedItems: T[],
    ): GetItemPropsT<T> =>
    ({ item, index, ...rest }) =>
      getItemProps({
        item,
        index,
        isSelected: selectedItems.some((selectedItem: T) => isEqual(selectedItem, item)),
        ...rest,
        isActive: highlightedIndex === index,
      });

  const removeItemByBackspace = ({
    event,
    removeItem,
    inputValue,
  }: {
    event: KeyboardEvent<HTMLInputElement>;
    removeItem: GetStateAndHelpersT<T>['removeItem'];
    inputValue: string | null;
  }) => {
    if (event.key === 'Backspace' && !inputValue && value.length) {
      removeItem(value[value.length - 1], null);
    }
  };

  const createNewItem = ({
    inputValue,
    selectItem,
    clearSelection,
  }: {
    inputValue: string;
    selectItem: (value: T) => void;
    clearSelection: () => void;
  }) => {
    if (parseInputValueFn) {
      const parsedItems = parseInputValueFn(inputValue);
      const items = parsedItems.length ? parsedItems : [inputValue as unknown as T];
      items.forEach((item) => selectItem(item));
      clearSelection();
    } else {
      selectItem(inputValue as unknown as T);
      clearSelection();
    }
  };

  const onRemoveItem =
    (cb: (removedItem: T, downshift: ControllerStateAndHelpers<T> | null) => void) => (item: T) => {
      cb(item, null);

      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

  const filteredOptions = options.filter((option: T) => {
    return value.every((val: T) => !isEqual(val, option));
  });

  return (
    <MultipleDownshift<T>
      onChange={handleChange}
      itemToString={parseValueToString}
      selectedItems={value}
      onStateChange={onStateChange}
      options={options}
      existingItemsMap={existingItemsMap}
      handleUnStoredItemCb={handleUnStoredItemCb}
      customizeNewSelectedValue={customizeNewSelectedValue}
    >
      {
        (({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue = '',
          highlightedIndex,
          removeItem,
          editItem,
          openMenu,
          selectItem,
          clearSelection,
          toggleMenu,
          storedItemsMap,
          getRootProps,
        }: GetStateAndHelpersT<T>) => {
          const rootProps = getRootProps(undefined, { suppressRefError: true });
          const modifiedRootProps = {
            ...rootProps,
            ref: (node: HTMLDivElement | null) => {
              refs.setReference(node);
              return rootProps.ref(node);
            },
          };

          const downshiftValue = inputValue ?? '';

          return (
            <div {...modifiedRootProps} className={cx('autocomplete-wrapper')}>
              <>
                <div
                  className={cx('autocomplete', customClass, {
                    'mobile-disabled': mobileDisabled,
                    error,
                    touched,
                    disabled,
                  })}
                >
                  <div
                    className={cx('autocomplete-input', {
                      'mobile-disabled': mobileDisabled,
                      'single-line-mode': selectedItemSingleLine,
                    })}
                  >
                    <SelectedItems<T>
                      items={value}
                      onRemoveItem={onRemoveItem(removeItem)}
                      disabled={disabled}
                      mobileDisabled={mobileDisabled}
                      parseValueToString={parseValueToString}
                      getItemValidationErrorType={getItemValidationErrorType}
                      renderCustomSelectedItem={renderCustomSelectedItem}
                      editItem={editItem}
                      editable={editable}
                      getAdditionalCreationCondition={getAdditionalCreationCondition}
                      storedItemsMap={storedItemsMap}
                      highlightUnStoredItem={highlightUnStoredItem}
                      selectedItemSingleLine={selectedItemSingleLine}
                      selectedItemShowTooltipOnTruncate={selectedItemShowTooltipOnTruncate}
                      selectedItemClassName={selectedItemClassName}
                      selectedItemTextClassName={selectedItemTextClassName}
                      selectedItemTooltipPortalRoot={selectedItemTooltipPortalRoot}
                    />
                    <input
                      {...getInputProps({
                        ref: inputRef,
                        placeholder: placeholderIfEmptyField,
                        maxLength,
                        onFocus: () => {
                          if (isDropdownMode) {
                            openMenu();
                          }
                          onFocus();
                        },
                        onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
                          const creationCondition =
                            event.key === ENTER_KEY_NAME &&
                            inputValue &&
                            creatable &&
                            getAdditionalCreationCondition(inputValue);
                          if (creationCondition) {
                            createNewItem({
                              inputValue,
                              selectItem,
                              clearSelection,
                            });
                          }
                          removeItemByBackspace({ event, removeItem, inputValue });
                        },
                        onBlur: () => {
                          onBlur();

                          const creationCondition =
                            inputValue && creatable && getAdditionalCreationCondition(inputValue);

                          if (creationCondition) {
                            createNewItem({
                              inputValue,
                              selectItem,
                              clearSelection,
                            });
                          }
                        },
                        disabled,
                        ...inputProps,
                      })}
                      className={cx('input', { disabled })}
                      data-automation-id={dataAutomationId}
                    />
                  </div>
                  {inputProps?.clearable && !isEmpty(value) && (
                    <button
                      type="button"
                      className={cx('clear-icon', { 'clear-icon--disabled': disabled })}
                      onClick={() => !disabled && inputProps?.onClear?.()}
                      onMouseDown={(event) => event.preventDefault()}
                    >
                      <ClearIcon />
                    </button>
                  )}
                  {isDropdownMode && (
                    <button
                      type="button"
                      className={cx('dropdown-button', { 'icon-reversed': isOpen })}
                      onClick={() => toggleMenu()}
                      aria-label="Toggle dropdown"
                      aria-expanded={isOpen}
                    >
                      <DropdownIcon />
                    </button>
                  )}
                </div>
                {error && touched && <span className={cx('error-text')}>{error}</span>}
              </>
              <AutocompleteMenu<T>
                isOpen={isOpen}
                loading={loading}
                async={async}
                ref={refs.setFloating}
                newItemButtonText={newItemButtonText}
                isDropdownMode={isDropdownMode}
                style={floatingStyles}
                inputValue={downshiftValue.trim()}
                getItemProps={getOptionProps(getItemProps, highlightedIndex, value)}
                parseValueToString={parseValueToString}
                createWithoutConfirmation={createWithoutConfirmation}
                options={filteredOptions}
                className={menuClassName}
                {...props}
              />
            </div>
          );
        }) as MultipleDownshiftProps<T>['children']
      }
    </MultipleDownshift>
  );
};

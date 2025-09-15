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
import { AutocompleteMenu } from '../common/autocompleteMenu';
import { SelectedItems } from './selectedItems';
import { DownshiftStore, GetStateAndHelpersT, MultipleDownshift } from './multipleDownshift';
import styles from './multipleAutocomplete.module.scss';
import { default as FieldText } from '@/components/fieldText';
import { useFloating } from '@floating-ui/react';
import { ControllerStateAndHelpers, PropGetters } from 'downshift';
import { isEqual } from '../utils';
import { ClearIcon } from '@/components/icons';

const cx = classNames.bind(styles);

export interface MultipleAutocompleteProps<T> {
  options: T[];
  loading: boolean;
  onStateChange: () => void;
  value: T[];
  placeholder: string;
  error: string | boolean; // string | boolean
  touched: boolean;
  creatable: boolean;
  editable: boolean;
  onChange: (selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void;
  onFocus: () => void;
  onBlur: () => void;
  disabled: boolean;
  mobileDisabled: boolean;
  inputProps: ComponentProps<typeof FieldText>;
  parseValueToString: (value: T | null) => string;
  minLength: number | null;
  maxLength: number | null;
  async: boolean;
  customClass: string;
  createWithoutConfirmation: boolean;
  getItemValidationErrorType?: (item: T) => string;
  clearItemsError: () => void;
  getAdditionalCreationCondition: (value: T) => boolean;
  highlightUnStoredItem: boolean;
  parseInputValueFn: ((value: string) => T[]) | null;
  handleUnStoredItemCb:
    | ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
    | null;
  dataAutomationId: string;
  existingItemsMap: { [key: string | number]: boolean };
  variant: ComponentProps<typeof AutocompleteMenu>['variant'];
  optionVariant: ComponentProps<typeof AutocompleteMenu>['optionVariant'];
  isClearAvailable?: boolean;
  customizeNewSelectedValue: (value: T) => T;
  renderCustomSelecetedItem?: (item: T) => ReactNode;
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
    mobileDisabled = false,
    inputProps = {},
    parseValueToString = ((v: T) => v || '') as MultipleAutocompleteProps<T>['parseValueToString'],
    minLength = 1,
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
    variant = 'light',
    customizeNewSelectedValue = (v) => v,
    renderCustomSelecetedItem,
    isClearAvailable = true,
    ...props
  } = componentsProps;

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
  });

  // let updatePosition: () => void;

  const placeholderIfEmptyField = value.length === 0 && !disabled ? placeholder : '';
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    clearItemsError();
  }, [value]);

  const handleChange = (
    selectedItems: T | T[] | null,
    downshift: ControllerStateAndHelpers<T> | null,
  ) => {
    onChange(selectedItems, downshift);
  };
  const getOptionProps =
    (
      getItemProps: PropGetters<T>['getItemProps'],
      highlightedIndex: number | null,
      selectedItems: T[],
    ) =>
    ({ item, index, ...rest }: { item: T; index: number } & any) =>
      getItemProps({
        item,
        index,
        isActive: highlightedIndex === index,
        isSelected: selectedItems.some((selectedItem: T) => isEqual(selectedItem, item)),
        ...rest,
      });
  const removeItemByBackspace = ({ event, removeItem, inputValue }: any) => {
    if (event.key === 'Backspace' && !inputValue && value.length) {
      removeItem(value[value.length - 1]);
    }
  };
  const createNewItem = ({ inputValue, selectItem, clearSelection }: any) => {
    if (parseInputValueFn) {
      const parsedItems = parseInputValueFn(inputValue);
      const items = parsedItems.length ? parsedItems : [inputValue];
      selectItem(items);
      clearSelection();
    } else {
      selectItem(inputValue);
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
          inputValue,
          highlightedIndex,
          removeItem,
          editItem,
          openMenu,
          selectItem,
          clearSelection,
          storedItemsMap,
        }: GetStateAndHelpersT<T>): ReactNode | ReactNode[] => (
          <div>
            <>
              <div
                ref={refs.setReference}
                className={cx('autocomplete', customClass, variant, {
                  'mobile-disabled': mobileDisabled,
                  error,
                  touched,
                  disabled,
                })}
              >
                <div
                  className={cx('autocomplete-input', {
                    'mobile-disabled': mobileDisabled,
                  })}
                >
                  <SelectedItems<T>
                    items={value}
                    onRemoveItem={onRemoveItem(removeItem)}
                    disabled={disabled}
                    mobileDisabled={mobileDisabled}
                    parseValueToString={parseValueToString}
                    getItemValidationErrorType={getItemValidationErrorType}
                    renderCustomSelecetedItem={renderCustomSelecetedItem}
                    editItem={editItem}
                    editable={editable}
                    getAdditionalCreationCondition={getAdditionalCreationCondition}
                    storedItemsMap={storedItemsMap}
                    highlightUnStoredItem={highlightUnStoredItem}
                    variant={variant}
                  />

                  <input
                    {...getInputProps({
                      ref: inputRef,
                      placeholder: placeholderIfEmptyField,
                      maxLength,
                      onFocus: () => {
                        openMenu();
                        onFocus();
                      },
                      onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
                        const creationCondition =
                          event.key === 'Enter' &&
                          inputValue &&
                          creatable &&
                          getAdditionalCreationCondition(inputValue as T);
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
                          inputValue &&
                          creatable &&
                          getAdditionalCreationCondition(inputValue as T);
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
                {inputProps?.clearable && value?.length > 0 && (
                  <div className={cx('clear-icon')} onClick={() => inputProps?.onClear?.()}>
                    <ClearIcon />
                  </div>
                )}
              </div>
              {error && touched && <span className={cx('error-text')}>{error}</span>}
            </>
            <AutocompleteMenu<T>
              isOpen={isOpen}
              loading={loading}
              async={async}
              ref={refs.setFloating}
              style={floatingStyles}
              inputValue={(inputValue || '').trim()}
              getItemProps={getOptionProps(getItemProps, highlightedIndex, value)}
              parseValueToString={parseValueToString}
              createWithoutConfirmation={createWithoutConfirmation}
              options={filteredOptions}
              variant={variant}
              {...props}
            />
          </div>
        )) as any
      }
    </MultipleDownshift>
  );
};

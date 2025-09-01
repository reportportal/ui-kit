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

import { ComponentProps, KeyboardEvent, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
// import { Manager, Reference, Popper } from 'react-popper';
import { AutocompleteMenu } from '../common/autocompleteMenu';
import { SelectedItems } from './selectedItems';
import { DownshiftStore, MultipleDownshift } from './multipleDownshift';
import styles from './multipleAutocomplete.module.scss';
import FieldText from '@/components/fieldText';
import { autoPlacement, computePosition, useFloating } from '@floating-ui/react';
import { Actions, ControllerStateAndHelpers, DownshiftState, PropGetters } from 'downshift';
import { isEqual } from '../utils';

const cx = classNames.bind(styles);

export interface MultipleAutocompleteProps<T> {
  options: T[];
  loading: boolean;
  onStateChange: () => void;
  value: T[];
  placeholder: string;
  error: any; // string | boolean
  touched: boolean;
  creatable: boolean;
  editable: boolean;
  onChange: (args: any) => void;
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
  getItemValidationErrorType: (() => any | null) | null; // string | null
  clearItemsError: () => void;
  getAdditionalCreationCondition: (value: string) => boolean;
  highlightUnStoredItem: boolean;
  parseInputValueFn: ((value: string) => T[]) | null;
  handleUnStoredItemCb:
    | ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
    | null;
  dataAutomationId: string;
  existingItemsMap: { [key: string | number]: boolean };
  variant: ComponentProps<typeof AutocompleteMenu>['variant'];
  optionVariant: ComponentProps<typeof AutocompleteMenu>['optionVariant'];
  customizeNewSelectedValue: (value: T) => T;
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
    parseValueToString = ((value: any) => value || '') as any,
    minLength = 1,
    maxLength = null,
    async = false,
    customClass = '',
    createWithoutConfirmation = false,
    getItemValidationErrorType = null,
    clearItemsError = () => {},
    getAdditionalCreationCondition = () => true,
    highlightUnStoredItem = false,
    parseInputValueFn = null,
    handleUnStoredItemCb = null,
    dataAutomationId = '',
    existingItemsMap = {},
    variant = 'light',
    customizeNewSelectedValue = (value) => value,
    ...props
  } = componentsProps;

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    middleware: [autoPlacement({ allowedPlacements: ['bottom-start', 'top-start'] })],
  });

  let updatePosition: () => void;

  const placeholderIfEmptyField = value.length === 0 && !disabled ? placeholder : '';
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    clearItemsError();
  }, [value]);

  const handleChange = (...args: any) => {
    updatePosition?.();
    onChange(...(args as any));
  };
  const getOptionProps =
    (getItemProps: any, highlightedIndex: number | null, selectedItems: any) =>
    ({ item, index, ...rest }: any) =>
      getItemProps({
        item,
        index,
        isActive: highlightedIndex === index,
        isSelected: selectedItems.some((selectedItem: any) => isEqual(selectedItem, item)),
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
    (cb: DownshiftState<T> & PropGetters<T> & Actions<T>): ((item: any) => void) =>
    (item) => {
      cb(item);

      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

  const filteredOptions = options.filter((option: any) =>
    value.every((val: any) => !isEqual(val, option)),
  );

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
      {({
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
      }: ControllerStateAndHelpers<T>) => (
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
                <SelectedItems<T, any>
                  items={value}
                  onRemoveItem={onRemoveItem(removeItem)}
                  disabled={disabled}
                  mobileDisabled={mobileDisabled}
                  parseValueToString={parseValueToString}
                  getItemValidationErrorType={getItemValidationErrorType}
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
            </div>
            {error && touched && <span className={cx('error-text')}>{error}</span>}
          </>
          <AutocompleteMenu
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
      )}
    </MultipleDownshift>
  );
};

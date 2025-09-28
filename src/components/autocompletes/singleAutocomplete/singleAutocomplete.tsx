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

import { ChangeEvent, ComponentProps, KeyboardEvent, Ref } from 'react';
import Downshift, { DownshiftState, StateChangeOptions } from 'downshift';
import { AutocompleteMenu } from '../common/autocompleteMenu';
import { default as FieldText } from '@/components/fieldText';
import { ENTER_KEY_NAME, TAB_KEY_NAME } from '../constants';
import { useFloating } from '@floating-ui/react';
import { GetItemPropsT } from '../types';

const DEFAULT_OPTIONS_INDEX = 0;

export interface SingleAutocompleteProps<T> {
  options: T[];
  loading: boolean;
  onStateChange: () => void;
  value: T;
  placeholder: string;
  onChange: ComponentProps<typeof Downshift<T>>['onChange'];
  onFocus: () => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  inputProps: ComponentProps<typeof FieldText>;
  parseValueToString: (value: T | null) => string;
  renderOption: (value: T) => React.ReactNode;
  minLength: number;
  maxLength: number | null;
  async: boolean;
  optionVariant: ComponentProps<typeof AutocompleteMenu>['optionVariant'];
  isRequired: boolean;
  error: string;
  touched: boolean;
  setTouch: (value: boolean) => void;
  createWithoutConfirmation: boolean;
  menuClassName: string;
  icon: string;
  isOptionUnique?: (value: boolean | null) => void;
  refFunction: Ref<HTMLInputElement>;
  stateReducer: (
    state: DownshiftState<T>,
    changes: StateChangeOptions<T>,
  ) => Partial<StateChangeOptions<T>>;
  useFixedPositioning: boolean;
}

export const SingleAutocomplete = <T,>(componentProps: SingleAutocompleteProps<T>) => {
  const {
    options = [],
    value,
    placeholder = '',
    onChange = (() => {}) as ComponentProps<typeof Downshift<T>>['onChange'],
    onFocus = () => {},
    onBlur = () => {},
    disabled = false,
    inputProps = {},
    parseValueToString = ((valueToParse) => valueToParse || '') as (item: T | null) => string,
    minLength = 1,
    maxLength = null,
    optionVariant = '',
    isRequired = false,
    error = '',
    touched = false,
    setTouch = () => {},
    createWithoutConfirmation = false,
    menuClassName = '',
    icon = null,
    isOptionUnique = null,
    refFunction = () => {},
    stateReducer,
    onStateChange,
    ...props
  } = componentProps;

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
  });

  const getOptionProps =
    (
      getItemProps: GetItemPropsT<T>,
      highlightedIndex: number | null,
      selectedItem: T,
    ): GetItemPropsT<T> =>
    ({ item, index, ...rest }) =>
      getItemProps({
        item,
        index,
        isSelected: selectedItem === item,
        ...rest,
        isActive: highlightedIndex === index,
      });

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    setHighlightedIndex: (value: number) => void,
  ) => {
    if (event.key === TAB_KEY_NAME) {
      event.preventDefault();
      setHighlightedIndex(options.length);
    }
  };

  return (
    <Downshift<T>
      onChange={onChange}
      itemToString={parseValueToString}
      selectedItem={value}
      onStateChange={onStateChange}
      defaultHighlightedIndex={DEFAULT_OPTIONS_INDEX}
      stateReducer={stateReducer}
    >
      {({
        getInputProps,
        getItemProps,
        setHighlightedIndex,
        isOpen,
        inputValue,
        highlightedIndex,
        getRootProps,
        selectItem,
      }) => (
        <>
          <div ref={refs.setReference}>
            <FieldText
              {...getRootProps()}
              {...getInputProps({
                placeholder: !disabled ? placeholder : '',
                maxLength: maxLength || undefined,
                onFocus: () => {
                  onFocus();
                },
                refFunction,
                onKeyDown: (event) => {
                  if (event.key === ENTER_KEY_NAME) {
                    event.preventDefault();
                  }

                  if (inputValue && isOpen) {
                    handleKeyDown(event, setHighlightedIndex);
                  }
                },
                onBlur: (e) => {
                  const newValue = (inputValue || '').trim() as T;

                  if (!createWithoutConfirmation && !newValue) {
                    selectItem(newValue);
                  }

                  if (createWithoutConfirmation) {
                    selectItem(newValue);
                  }

                  onBlur(e);
                  isOptionUnique?.(newValue ? !options.find((v) => v === newValue) : null);
                  setTouch(true);
                },
                disabled,
                defaultWidth: false,
                isRequired,
                touched,
                error,
                endIcon: icon,
                ...inputProps,
              })}
            />
          </div>
          <AutocompleteMenu
            isOpen={isOpen}
            style={floatingStyles}
            ref={refs.setFloating}
            inputValue={(inputValue || '').trim()}
            getItemProps={getOptionProps(getItemProps, highlightedIndex, value)}
            parseValueToString={parseValueToString}
            optionVariant={optionVariant}
            createWithoutConfirmation={createWithoutConfirmation}
            className={menuClassName}
            options={options}
            {...props}
          />
        </>
      )}
    </Downshift>
  );
};

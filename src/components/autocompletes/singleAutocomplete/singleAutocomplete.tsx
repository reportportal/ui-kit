/*
 * Copyright 2025 EPAM Systems
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

import { ComponentProps, FocusEvent, KeyboardEvent, ReactNode, Ref } from 'react';
import classNames from 'classnames/bind';
import Downshift, { DownshiftState, StateChangeOptions } from 'downshift';
import { autoUpdate, useFloating } from '@floating-ui/react';

import { default as FieldText } from '@/components/fieldText';

import { AutocompleteMenu } from '../common/autocompleteMenu';
import { ENTER_KEY_NAME, TAB_KEY_NAME } from '../constants';
import { GetItemPropsT } from '../types';

import styles from './singleAutocomplete.module.scss';
import { ArrowDownIcon, ArrowUpIcon } from '@/components/icons';

const cx = classNames.bind(styles);

const DEFAULT_OPTIONS_INDEX = 0;

export interface SingleAutocompleteProps<T> {
  options: T[];
  loading?: boolean;
  onStateChange: ComponentProps<typeof Downshift<T>>['onStateChange'];
  value: T | null;
  placeholder: string;
  onChange: ComponentProps<typeof Downshift<T>>['onChange'];
  onFocus: () => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  inputProps?: ComponentProps<typeof FieldText>;
  parseValueToString: (value: T | null) => string;
  renderOption?: (
    value: T,
    index: number,
    isNew: boolean,
    getItemProps: GetItemPropsT<T>,
  ) => ReactNode;
  minLength?: number;
  maxLength?: number | null;
  async?: boolean;
  optionVariant: ComponentProps<typeof AutocompleteMenu>['optionVariant'];
  isRequired?: boolean;
  error: string;
  touched?: boolean;
  setTouch?: (value: boolean) => void;
  createWithoutConfirmation: boolean;
  menuClassName?: string;
  icon?: ReactNode;
  isDropdownMode?: boolean;
  skipOptionCreation?: boolean;
  isOptionUnique?: (value: boolean | null) => void;
  refFunction?: Ref<HTMLInputElement>;
  stateReducer?: (
    state: DownshiftState<T>,
    changes: StateChangeOptions<T>,
  ) => Partial<StateChangeOptions<T>>;
  useFixedPositioning: boolean;
  getUniqKey?: (item: T) => string;
  customEmptyListMessage?: string;
  customNoMatchesMessage?: string;
  newItemButtonText?: string;
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
    parseValueToString = ((v) => (v === null ? '' : String(v))) as (item: T | null) => string,
    minLength = 1,
    skipOptionCreation = false,
    maxLength = null,
    optionVariant = '',
    isRequired = false,
    error = '',
    touched = false,
    setTouch = () => {},
    createWithoutConfirmation = false,
    menuClassName = '',
    icon,
    isDropdownMode = true,
    isOptionUnique,
    refFunction,
    stateReducer,
    onStateChange,
    useFixedPositioning,
    newItemButtonText = '',
    ...props
  } = componentProps;

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    strategy: useFixedPositioning ? 'fixed' : 'absolute',
    whileElementsMounted: autoUpdate,
  });

  const getOptionProps =
    (
      getItemProps: GetItemPropsT<T>,
      highlightedIndex: number | null,
      selectedItem: T | null,
    ): GetItemPropsT<T> =>
    ({ item, index, ...rest }) =>
      getItemProps({
        item,
        index,
        isSelected: selectedItem !== null && selectedItem === item,
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
        toggleMenu,
        isOpen,
        inputValue,
        highlightedIndex,
        getRootProps,
        selectItem,
      }) => (
        <>
          <div
            className={cx('input-wrapper')}
            {...getRootProps(undefined, { suppressRefError: true })}
            ref={refs.setReference}
          >
            <FieldText
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
                onBlur: (e: FocusEvent<HTMLInputElement>) => {
                  const trimmed = (inputValue ?? '').trim();
                  const hasValue = !!trimmed;
                  const matched = hasValue
                    ? options.find((v) => parseValueToString(v) === trimmed)
                    : undefined;
                  if (matched) {
                    selectItem(matched);
                  } else if (!skipOptionCreation && createWithoutConfirmation && hasValue) {
                    selectItem(trimmed as unknown as T);
                  } else {
                    selectItem(null as T);
                  }
                  onBlur(e);
                  isOptionUnique?.(
                    hasValue ? !options.some((v) => parseValueToString(v) === trimmed) : null,
                  );
                  setTouch?.(true);
                },
                disabled,
                defaultWidth: false,
                isRequired,
                touched,
                error,
                ...inputProps,
                endIcon: icon,
                additionalIcon: isDropdownMode ? (
                  <button className={cx('dropdown-button')} onClick={() => toggleMenu()}>
                    {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </button>
                ) : null,
                minLength: isDropdownMode ? 0 : minLength,
              })}
            />
            <AutocompleteMenu
              isOpen={isOpen}
              isDropdownMode={isDropdownMode}
              style={floatingStyles}
              ref={refs.setFloating}
              minLength={minLength}
              inputValue={(inputValue || '').trim()}
              getItemProps={getOptionProps(getItemProps, highlightedIndex, value)}
              parseValueToString={parseValueToString}
              optionVariant={optionVariant}
              createWithoutConfirmation={createWithoutConfirmation}
              className={menuClassName}
              options={options}
              newItemButtonText={newItemButtonText}
              {...props}
            />
          </div>
        </>
      )}
    </Downshift>
  );
};

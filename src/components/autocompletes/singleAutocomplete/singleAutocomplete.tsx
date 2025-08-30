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

import React, { ChangeEvent, Component, ComponentProps, KeyboardEvent, Ref } from 'react';
import Downshift, { DownshiftState, StateChangeOptions } from 'downshift';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
// import { FieldText } from 'componentLibrary/fieldText';
import { AutocompleteMenu } from '../common/autocompleteMenu';
import { autocompleteVariantType, singleAutocompleteOptionVariantType } from '../common/propTypes';
import FieldText from '@/components/fieldText';
import { ENTER_KEY_NAME, TAB_KEY_NAME } from '../constants';

const DEFAULT_OPTIONS_INDEX = 0;

export interface SingleAutocompleteProps<T, K> {
  options: T[];
  loading: boolean;
  onStateChange: () => void;
  value: T;
  placeholder: string;
  onChange: () => void;
  onFocus: () => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  inputProps: ComponentProps<typeof FieldText>;
  parseValueToString: (value: any) => string;
  renderOption: (value: T) => React.ReactNode;
  minLength: number;
  maxLength: number;
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
  refFunction: () => Ref<any>;
  stateReducer: (
    state: DownshiftState<T>,
    changes: StateChangeOptions<T>,
  ) => Partial<StateChangeOptions<T>>;
  variant: ComponentProps<typeof AutocompleteMenu>['variant'];
  useFixedPositioning: boolean;
}

export class SingleAutocomplete<T, K> extends Component<SingleAutocompleteProps<T, K>> {
  static defaultProps = {
    options: [],
    loading: false,
    value: '',
    placeholder: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    disabled: false,
    inputProps: {},
    parseValueToString: (value) => value || '',
    renderOption: null,
    minLength: 1,
    maxLength: null,
    async: false,
    optionVariant: '',
    isRequired: false,
    error: '',
    touched: false,
    setTouch: () => {},
    createWithoutConfirmation: false,
    menuClassName: '',
    icon: null,
    isOptionUnique: null,
    refFunction: () => {},
    stateReducer: (state, changes) => changes,
    variant: 'light',
    useFixedPositioning: false,
  };

  getOptionProps =
    (getItemProps, highlightedIndex, selectedItem) =>
    ({ item, index, ...rest }) =>
      getItemProps({
        item,
        index,
        isActive: highlightedIndex === index,
        isSelected: selectedItem === item,
        ...rest,
      });

  handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    setHighlightedIndex: (value: number) => void,
  ) => {
    if (event.key === TAB_KEY_NAME) {
      event.preventDefault();
      setHighlightedIndex(this.props.options.length);
    }
  };

  render() {
    const {
      onStateChange,
      onChange,
      onBlur,
      onFocus,
      parseValueToString,
      placeholder,
      disabled,
      value,
      inputProps,
      maxLength,
      optionVariant,
      isRequired,
      error,
      touched,
      setTouch,
      createWithoutConfirmation,
      menuClassName,
      icon,
      options,
      isOptionUnique,
      refFunction,
      stateReducer,
      variant,
      useFixedPositioning,
      ...props
    } = this.props;
    return (
      <Manager>
        <Downshift
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
            selectItem,
          }) => (
            <div>
              <Reference>
                {({ ref }) => (
                  <div ref={ref}>
                    <FieldText
                      {...getInputProps({
                        placeholder: !disabled ? placeholder : '',
                        maxLength,
                        onFocus: () => {
                          onFocus();
                        },
                        refFunction,
                        onKeyDown: (event) => {
                          if (event.key === ENTER_KEY_NAME) {
                            event.preventDefault();
                          }

                          if (inputValue && isOpen) {
                            this.handleKeyDown(event, setHighlightedIndex);
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
                        variant,
                        ...inputProps,
                      })}
                    />
                  </div>
                )}
              </Reference>
              <Popper
                placement="bottom-start"
                positionFixed={useFixedPositioning}
                modifiers={{
                  preventOverflow: { escapeWithReference: true },
                  flip: {
                    enabled: true,
                  },
                }}
              >
                {({ placement, ref, style }) => (
                  <AutocompleteMenu
                    isOpen={isOpen}
                    placement={placement}
                    style={style}
                    ref={ref}
                    inputValue={(inputValue || '').trim()}
                    getItemProps={this.getOptionProps(getItemProps, highlightedIndex, value)}
                    parseValueToString={parseValueToString}
                    optionVariant={optionVariant}
                    createWithoutConfirmation={createWithoutConfirmation}
                    className={menuClassName}
                    options={options}
                    variant={variant}
                    {...props}
                  />
                )}
              </Popper>
            </div>
          )}
        </Downshift>
      </Manager>
    );
  }
}

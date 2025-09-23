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

import { Component, ComponentProps, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Scrollbars } from 'rc-scrollbars';
import { AutocompletePrompt } from './autocompletePrompt';
import { AutocompleteOption } from './autocompleteOption';
import styles from './autocompleteOptions.module.scss';
import { default as BubblesLoader } from '@/components/bubblesLoader';
import { GetItemPropsOptions } from 'downshift';
import { AdditionalDownshiftFields } from '../types';

const cx = classNames.bind(styles);

interface AutocompleteOptionsProps<T> {
  options: T[];
  loading: boolean;
  inputValue: string;
  parseValueToString: (value: T | null) => string;
  getItemProps: (
    args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
  ) => GetItemPropsOptions<T> & AdditionalDownshiftFields;
  renderOption?: (
    item: T,
    index: number,
    isNew: boolean,
    getItemProps: (
      args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
    ) => GetItemPropsOptions<T> & AdditionalDownshiftFields,
  ) => ReactNode;
  async: boolean;
  optionVariant: 'key-variant' | 'value-variant' | '';
  createWithoutConfirmation: boolean;
  variant: ComponentProps<typeof AutocompletePrompt>['variant'];
}

export class AutocompleteOptions<T> extends Component<AutocompleteOptionsProps<T>> {
  filterStaticOptions = () => {
    const { options, inputValue, parseValueToString } = this.props;
    return (options || []).filter((option) => {
      return (
        parseValueToString(option)
          .toUpperCase()
          .indexOf((inputValue.toUpperCase() || '').trim()) > -1
      );
    });
  };

  getPrompt = (options: T[]) => {
    const { loading, createWithoutConfirmation, variant } = this.props;
    if (loading) {
      return (
        <>
          <AutocompletePrompt variant={variant}>
            <BubblesLoader />
          </AutocompletePrompt>
          {!createWithoutConfirmation && this.renderNewItem(options)}
        </>
      );
    }
    return '';
  };

  renderItem = (item: T, index: number, isNew = false) => {
    const { getItemProps, renderOption, optionVariant, variant } = this.props;

    return renderOption ? (
      renderOption(item, index, isNew, getItemProps)
    ) : (
      <AutocompleteOption
        key={this.props.parseValueToString(item)}
        optionVariant={optionVariant}
        {...getItemProps({ item, index })}
        isNew={isNew}
        variant={variant}
      >
        {this.props.parseValueToString(item)}
      </AutocompleteOption>
    );
  };

  renderItems = (options: T[]) => {
    return options.length ? options.map((item, index) => this.renderItem(item, index)) : '';
  };

  renderNewItem = (options: T[]) => {
    const { inputValue, getItemProps, parseValueToString, optionVariant, variant } = this.props;

    const index = options.length;
    const isNew = true;
    return (
      <div className={cx({ container: !options.length })}>
        <AutocompleteOption
          key={parseValueToString(inputValue as T)}
          optionVariant={optionVariant}
          {...getItemProps({ item: inputValue as T, index })}
          isNew={isNew}
          variant={variant}
        >
          {parseValueToString(inputValue as T)}
        </AutocompleteOption>
      </div>
    );
  };

  render() {
    const { async, options, createWithoutConfirmation } = this.props;
    const availableOptions = async ? options : this.filterStaticOptions();
    const prompt = this.getPrompt(options);

    if (prompt) return prompt;

    return (
      <div className={cx({ container: options.length })}>
        <Scrollbars autoHeight autoHeightMax={216} hideTracksWhenNotNeeded>
          {this.renderItems(availableOptions)}
        </Scrollbars>
        {!createWithoutConfirmation && this.renderNewItem(availableOptions)}
      </div>
    );
  }
}

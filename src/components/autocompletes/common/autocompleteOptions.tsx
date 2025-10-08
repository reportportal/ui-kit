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

import { Component, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Scrollbars } from 'rc-scrollbars';

import { AutocompletePrompt } from './autocompletePrompt';
import { AutocompleteOption } from './autocompleteOption';
import { default as BubblesLoader } from '@/components/bubblesLoader';
import { GetItemPropsT } from '../types';
import styles from './autocompleteOptions.module.scss';

const cx = classNames.bind(styles);

interface AutocompleteOptionsProps<T> {
  options: T[];
  loading: boolean;
  inputValue: string;
  parseValueToString: (value: T | null) => string;
  getItemProps: GetItemPropsT<T>;
  renderOption?: (
    item: T,
    index: number,
    isNew: boolean,
    getItemProps: GetItemPropsT<T>,
  ) => ReactNode;
  async: boolean;
  optionVariant: 'key-variant' | 'value-variant' | '';
  createWithoutConfirmation: boolean;
  customEmptyListMessage?: string;
  customNoMatchesMessage?: string;
  getUniqKey?: (item: T) => string;
  newItemButtonText: string;
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
    const { loading, createWithoutConfirmation } = this.props;
    if (loading) {
      return (
        <>
          <AutocompletePrompt>
            <BubblesLoader />
          </AutocompletePrompt>
          {!createWithoutConfirmation && this.renderNewItem(options)}
        </>
      );
    }
    return '';
  };

  renderItem = (item: T, index: number, isNew = false) => {
    const { getItemProps, renderOption, optionVariant } = this.props;

    return renderOption ? (
      renderOption(item, index, isNew, getItemProps)
    ) : (
      <AutocompleteOption
        key={this.props.getUniqKey?.(item) || this.props.parseValueToString(item)}
        optionVariant={optionVariant}
        {...getItemProps({ item, index })}
        isNew={isNew}
        newItemButtonText={this.props.newItemButtonText}
      >
        {this.props.parseValueToString(item)}
      </AutocompleteOption>
    );
  };

  renderItems = (options: T[]) => {
    return options.length ? options.map((item, index) => this.renderItem(item, index)) : '';
  };

  renderNewItem = (options: T[]) => {
    const { inputValue, getItemProps, parseValueToString, optionVariant } = this.props;

    const index = options.length;
    const isNew = true;
    return (
      <div className={cx({ container: !options.length })}>
        <AutocompleteOption
          key={parseValueToString(inputValue as T)}
          optionVariant={optionVariant}
          {...getItemProps({ item: inputValue as T, index })}
          isNew={isNew}
        >
          {parseValueToString(inputValue as T)}
        </AutocompleteOption>
      </div>
    );
  };

  renderEmptyList = () => {
    const message =
      this.props.options?.length === 0
        ? this.props.customEmptyListMessage || 'No available options'
        : this.props.customNoMatchesMessage || 'No matches found';

    return <div className={cx('empty-list-message')}>{message}</div>;
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

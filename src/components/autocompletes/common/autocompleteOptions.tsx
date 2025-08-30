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
import BubblesLoader from '@/components/bubblesLoader';

const cx = classNames.bind(styles);

interface AutocompleteOptionsProps<T> {
  children?: (props: any) => ReactNode;
  options: T[];
  loading: boolean;
  inputValue: string;
  parseValueToString: (value: T) => string;
  getItemProps: <K>(props: { item: K; index: number }) => any;
  renderOption?: (
    item: T,
    index: number,
    isNew: boolean,
    getItemProps: (props: { item: T; index: number }) => any,
  ) => ReactNode;
  async: boolean;
  optionVariant: string;
  createWithoutConfirmation: boolean;
  variant: ComponentProps<typeof AutocompletePrompt>['variant'];
  getItemName?: (item: T) => string;
}

export class AutocompleteOptions<T> extends Component<AutocompleteOptionsProps<T>> {
  filterStaticOptions = () => {
    const { options, inputValue, parseValueToString } = this.props;
    return (options || []).filter(
      (option) =>
        parseValueToString(option)
          .toUpperCase()
          .indexOf((inputValue.toUpperCase() || '').trim()) > -1,
    );
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
    const { inputValue, getItemProps, getItemName, parseValueToString, optionVariant, variant } =
      this.props;
    const index = options.length;
    const isNew = true;
    return (
      <div className={cx({ container: !options.length })}>
        <AutocompleteOption
          key={parseValueToString(inputValue)}
          optionVariant={optionVariant}
          {...getItemProps({ item: inputValue, index })}
          isNew={isNew}
          variant={variant}
          getItemName={getItemName}
        >
          {parseValueToString(inputValue)}
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

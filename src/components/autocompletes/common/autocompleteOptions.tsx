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

import { ReactNode, useCallback } from 'react';
import { isEmpty } from 'es-toolkit/compat';
import classNames from 'classnames/bind';
import { Scrollbars } from 'rc-scrollbars';

import { default as BubblesLoader } from '@/components/bubblesLoader';

import { AutocompletePrompt } from './autocompletePrompt';
import { AutocompleteOption } from './autocompleteOption';
import { GetItemPropsT } from '../types';

import styles from './autocompleteOptions.module.scss';

const cx = classNames.bind(styles);

export interface AutocompleteOptionsProps<T> {
  options: T[];
  loading?: boolean;
  inputValue: string;
  parseValueToString: (value: T | null) => string;
  getItemProps: GetItemPropsT<T>;
  renderOption?: (
    item: T,
    index: number,
    isNew: boolean,
    getItemProps: GetItemPropsT<T>,
  ) => ReactNode;
  async?: boolean;
  optionVariant: 'key-variant' | 'value-variant' | '';
  createWithoutConfirmation: boolean;
  customEmptyListMessage?: string;
  customNoMatchesMessage?: string;
  getUniqKey?: (item: T) => string;
  newItemButtonText: string;
  limitationText?: string;
  optionsLimit?: number;
  shouldShowEmptyListMessage?: boolean;
}

export const AutocompleteOptions = <T,>(props: AutocompleteOptionsProps<T>) => {
  const {
    options,
    async,
    inputValue,
    loading,
    createWithoutConfirmation,
    customEmptyListMessage,
    customNoMatchesMessage,
    optionVariant,
    newItemButtonText,
    renderOption,
    getUniqKey,
    getItemProps,
    parseValueToString,
    limitationText = 'Too many results. Type to search',
    optionsLimit = 0,
    shouldShowEmptyListMessage = true,
  } = props;

  const filterStaticOptions = useCallback(() => {
    return (options || []).filter((option) => {
      return (
        parseValueToString(option)
          .toUpperCase()
          .indexOf((inputValue.toUpperCase() || '').trim()) > -1
      );
    });
  }, [inputValue, options, parseValueToString]);

  const renderItem = useCallback(
    (item: T, index: number, isNew = false) => {
      return renderOption ? (
        renderOption(item, index, isNew, getItemProps)
      ) : (
        <AutocompleteOption
          key={getUniqKey?.(item) || parseValueToString(item)}
          optionVariant={optionVariant}
          {...getItemProps({ item, index })}
          isNew={isNew}
          newItemButtonText={newItemButtonText}
        >
          {parseValueToString(item)}
        </AutocompleteOption>
      );
    },
    [getItemProps, getUniqKey, newItemButtonText, optionVariant, parseValueToString, renderOption],
  );

  const renderItems = useCallback(
    (items: T[]) => {
      return items.length ? items.map((item, index) => renderItem(item, index)) : '';
    },
    [renderItem],
  );

  const renderNewItem = useCallback(
    (items: T[]) => {
      const index = items.length;

      return (
        <div className={cx({ container: !index })}>
          <AutocompleteOption
            key={parseValueToString(inputValue as T)}
            optionVariant={optionVariant}
            isNew
            newItemButtonText={newItemButtonText}
            {...getItemProps({ item: inputValue as T, index })}
          >
            {parseValueToString(inputValue as T)}
          </AutocompleteOption>
        </div>
      );
    },
    [getItemProps, inputValue, newItemButtonText, optionVariant, parseValueToString],
  );

  const getPrompt = useCallback(
    (items: T[]) => {
      if (loading) {
        return (
          <>
            <AutocompletePrompt>
              <BubblesLoader />
            </AutocompletePrompt>
            {!createWithoutConfirmation && renderNewItem(items)}
          </>
        );
      }
      return '';
    },
    [createWithoutConfirmation, loading, renderNewItem],
  );

  const renderEmptyList = useCallback(() => {
    const message =
      options?.length === 0
        ? customEmptyListMessage || 'No available options'
        : customNoMatchesMessage || 'No matches found';

    return <div className={cx('empty-list-message')}>{message}</div>;
  }, [customEmptyListMessage, customNoMatchesMessage, options?.length]);

  const availableOptions = async ? options : filterStaticOptions();
  const prompt = getPrompt(options);
  if (prompt) return prompt;

  const areAvailableOptionsEmpty = isEmpty(availableOptions);

  if (areAvailableOptionsEmpty && !shouldShowEmptyListMessage && createWithoutConfirmation)
    return null;

  return (
    <div className={cx({ container: options.length })}>
      <Scrollbars autoHeight autoHeightMax={216} hideTracksWhenNotNeeded>
        {areAvailableOptionsEmpty
          ? shouldShowEmptyListMessage && renderEmptyList()
          : renderItems(availableOptions)}
        {availableOptions?.length > optionsLimit && optionsLimit > 0 && limitationText ? (
          <li className={cx('limitation-item')} aria-hidden="true">
            {limitationText}
          </li>
        ) : null}
      </Scrollbars>
      {!createWithoutConfirmation && renderNewItem(availableOptions)}
    </div>
  );
};

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

import { useState, ChangeEvent, KeyboardEvent, ReactNode, MouseEvent } from 'react';
import classNames from 'classnames/bind';

import styles from './selectedItems.module.scss';
import { CloseIcon } from '@/components/icons';

const cx = classNames.bind(styles);

type VariantType = 'light' | 'dark';

interface SelectedItemProps<T> {
  item: T;
  onRemoveItem: (item: T) => void;
  parseValueToString?: (value: T) => string;
  editItem: (oldItem: T, newValue: string) => void;
  disabled?: boolean;
  mobileDisabled?: boolean;
  error?: string | boolean;
  editable?: boolean;
  getAdditionalCreationCondition?: (value: string) => boolean;
  storedOption?: boolean;
  highlightUnStoredItem?: boolean;
  variant?: VariantType;
  // newly added props
  getItemName?: (item: T) => string;
  changeItemHandler?: (item: T, value: string) => T;
}

const SelectedItem = <T,>({
  item,
  onRemoveItem,
  disabled = false,
  mobileDisabled = false,
  parseValueToString,
  error = false,
  editItem,
  editable = false,
  getAdditionalCreationCondition = () => true,
  storedOption = true,
  highlightUnStoredItem = false,
  variant = 'light',
  getItemName,
}: SelectedItemProps<T>) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState<string>('');

  const changeEditMode = () => {
    if (!disabled && editable && !storedOption) {
      setValue(getItemName?.(item) || parseValueToString?.(item) || '');
      setEditMode(true);
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    const creationCondition = getAdditionalCreationCondition(value);
    if (event.key === 'Enter' && creationCondition) {
      editItem(item, value);
      setEditMode(false);
      setValue('');
    }
  };

  const onBlurHandler = () => {
    setEditMode(false);
    setValue('');
  };

  const removeItemHandler = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onRemoveItem(item);
  };

  return editMode ? (
    <input
      autoFocus
      value={value}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      onBlur={onBlurHandler}
      className={cx('input')}
    />
  ) : (
    <div
      className={cx('selected-item', variant, {
        [`validation-${error}`]: error,
        disabled,
        'mobile-disabled': mobileDisabled,
        'highlight-un-stored-item': highlightUnStoredItem && !storedOption,
      })}
      onClick={changeEditMode}
    >
      {parseValueToString?.(item)}
      {!disabled && (
        <button
          type="button"
          className={cx('cross-icon', {
            [`validation-${error}`]: error,
            'mobile-disabled': mobileDisabled,
            disabled,
          })}
          onClick={removeItemHandler}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

type SelectedItemsProps<T> = Omit<SelectedItemProps<T>, 'item' | 'editItem'> & {
  items?: T[];
  onRemoveItem?: (item: T) => void;
  parseValueToString: (value: T | null) => string;
  editItem: (oldItem: T, newValue: string) => void;
  disabled?: boolean;
  mobileDisabled?: boolean;
  storedItemsMap?: Record<string, boolean>;
  highlightUnStoredItem?: boolean;
  editable?: boolean;
  variant?: VariantType;
  getItemValidationErrorType?: ((item: T) => string) | null;
  renderCustomSelectedItem?: (item: T) => ReactNode;
};

export const SelectedItems = <T,>({
  items = [],
  parseValueToString,
  getItemValidationErrorType,
  storedItemsMap = {},
  highlightUnStoredItem = false,
  renderCustomSelectedItem,
  ...props
}: SelectedItemsProps<T>) => {
  return items.map((item) => {
    return renderCustomSelectedItem ? (
      renderCustomSelectedItem(item)
    ) : (
      <SelectedItem
        key={parseValueToString?.(item)}
        parseValueToString={parseValueToString}
        error={getItemValidationErrorType?.(item) || ''}
        item={item}
        storedOption={!!storedItemsMap[parseValueToString(item)]}
        highlightUnStoredItem={highlightUnStoredItem}
        {...props}
      />
    );
  });
};

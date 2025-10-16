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

import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import { Button } from '@/components/button';
import { PlusIcon } from '@/components/icons';

import styles from './autocompleteOption.module.scss';

const cx = classNames.bind(styles);

type AutocompleteOptionProps = {
  isActive?: boolean;
  isSelected?: boolean;
  isNew?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  optionVariant?: 'key-variant' | 'value-variant' | '';
  newItemButtonText?: string;
} & HTMLAttributes<HTMLLIElement | HTMLButtonElement>;

export const AutocompleteOption = ({
  isActive = false,
  isSelected = false,
  isNew = false,
  children = null,
  disabled = false,
  optionVariant = '',
  newItemButtonText = '',
  ...props
}: AutocompleteOptionProps) => {
  const getButtonText = () => {
    if (newItemButtonText) {
      return newItemButtonText;
    }

    return optionVariant === 'key-variant' ? 'New key' : 'New value';
  };

  return isNew ? (
    <>
      <div className={cx('divider')} />
      <li
        className={cx('new-item', optionVariant, {
          active: isActive,
          selected: isSelected,
          disabled,
        })}
        {...props}
      >
        <span className={cx('value')}>{children}</span>
        <Button
          {...(!disabled && props)}
          className={cx({ 'button-active': isActive })}
          icon={<PlusIcon />}
          variant="text"
        >
          {getButtonText()}
        </Button>
      </li>
    </>
  ) : (
    <li
      className={cx('item', optionVariant, {
        active: isActive,
        selected: isSelected,
        disabled,
      })}
      {...(!disabled ? props : {})}
    >
      <span className={cx('label', 'tag')}>{children}</span>
    </li>
  );
};

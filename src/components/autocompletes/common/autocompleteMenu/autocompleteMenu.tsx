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

import { ComponentProps, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames/bind';

import { AutocompleteOptions } from '../autocompleteOptions';

import styles from './autocompleteMenu.module.scss';

const cx = classNames.bind(styles);

const isReadyForSearch = (minLength: number | null, inputValue: string) =>
  !minLength || minLength <= inputValue.trim().length;

type AutocompleteMenuProps<T> = {
  isOpen?: boolean;
  style?: React.CSSProperties;
  minLength: number | null;
  inputValue?: string;
  className?: string;
} & ComponentProps<typeof AutocompleteOptions<T>>;

export const AutocompleteMenu = forwardRef(
  <T,>(
    {
      isOpen = false,
      style = {},
      minLength = 1,
      inputValue = '',
      className = '',
      ...props
    }: AutocompleteMenuProps<T>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        ref={ref}
        className={cx(
          'menu',
          { opened: isOpen && isReadyForSearch(minLength, inputValue) },
          className,
        )}
        style={style}
      >
        <AutocompleteOptions inputValue={inputValue} {...props} />
      </ul>
    );
  },
);

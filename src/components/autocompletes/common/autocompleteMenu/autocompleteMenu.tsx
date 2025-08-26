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

import classNames from 'classnames/bind';
import { AutocompleteOptions } from '../autocompleteOptions';
import styles from './autocompleteMenu.module.scss';
import { ComponentProps, forwardRef } from 'react';

const cx = classNames.bind(styles);

const isReadyForSearch = (minLength: number, inputValue: string) =>
  !minLength || minLength <= inputValue.trim().length;

type AutocompleteMenuProps = {
  isOpen?: boolean;
  // placement?: string;
  style?: React.CSSProperties;
  minLength?: number;
  inputValue?: string;
  className?: string;
} & ComponentProps<typeof AutocompleteOptions>;

export const AutocompleteMenu = forwardRef<HTMLUListElement, AutocompleteMenuProps>(
  (
    {
      isOpen = false,
      // placement = 'bottom-start',
      style = {},
      minLength = 1,
      inputValue = '',
      className = '',
      variant = 'light',
      ...props
    },
    ref,
  ) => {
    return (
      <ul
        ref={ref}
        className={cx(
          'menu',
          variant,
          { opened: isOpen && isReadyForSearch(minLength, inputValue) },
          className,
        )}
        // placement used by Popper
        /* eslint-disable-next-line react/no-unknown-property */
        // placement={placement}
        style={style}
      >
        <AutocompleteOptions inputValue={inputValue} variant={variant} {...props} />
      </ul>
    );
  },
);

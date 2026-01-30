/*
 * Copyright 2026 EPAM Systems
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

import { ComponentPropsWithRef, forwardRef } from 'react';
import classNames from 'classnames/bind';

import { FilterFilledIcon, FilterOutlineIcon, ClearIcon } from '../icons';
import { useEllipsisTitle } from '@common/hooks';
import styles from './filtersButton.module.scss';

const cx = classNames.bind(styles);

export interface FiltersButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'type'> {
  appliedFiltersCount?: number;
  isOpen?: boolean;
  type?: 'button' | 'submit';
  text?: string;
  filtersLabelClassName?: string;
  clearable?: boolean;
  onClear?: () => void;
  clearButtonAriaLabel?: string;
}

export const FiltersButton = forwardRef<HTMLButtonElement, FiltersButtonProps>(
  (
    {
      appliedFiltersCount = 0,
      isOpen = false,
      className,
      type = 'button',
      text,
      filtersLabelClassName,
      clearable = false,
      onClear,
      clearButtonAriaLabel = 'Clear filters',
      ...rest
    },
    ref,
  ) => {
    const hasAppliedFilters = appliedFiltersCount > 0;
    const hasText = text !== undefined && text !== '';
    const labelContent = hasText ? text : hasAppliedFilters ? appliedFiltersCount : undefined;
    const { ref: labelRef, title: labelTitle } = useEllipsisTitle(labelContent);
    const containerClassName = cx('filters-icon-container', className, {
      'with-applied': hasAppliedFilters || hasText,
      opened: isOpen,
    });

    return (
      <button type={type} className={containerClassName} ref={ref} {...rest}>
        <span className={cx('filter-icon')}>
          {hasAppliedFilters || hasText ? <FilterFilledIcon /> : <FilterOutlineIcon />}
        </span>
        {hasText ? (
          <span
            ref={labelRef}
            title={labelTitle}
            className={cx('filters-count', filtersLabelClassName)}
          >
            {text}
          </span>
        ) : hasAppliedFilters ? (
          <span
            ref={labelRef}
            title={labelTitle}
            className={cx('filters-count', filtersLabelClassName)}
          >
            {appliedFiltersCount}
          </span>
        ) : null}
        {clearable && (hasAppliedFilters || hasText) && (
          <div className={cx('clear-wrapper')}>
            <span
              role="button"
              tabIndex={0}
              aria-label={clearButtonAriaLabel}
              className={cx('clear-icon')}
              onClick={(e) => {
                e.stopPropagation();
                onClear?.();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  onClear?.();
                }
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              <ClearIcon />
            </span>
          </div>
        )}
      </button>
    );
  },
);

export default FiltersButton;

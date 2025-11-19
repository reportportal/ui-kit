import { ComponentPropsWithRef, forwardRef } from 'react';
import classNames from 'classnames/bind';

import { FilterFilledIcon, FilterOutlineIcon } from '../icons';
import styles from './filtersButton.module.scss';

const cx = classNames.bind(styles);

export interface FiltersButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'type'> {
  appliedFiltersCount?: number;
  isOpen?: boolean;
  type?: 'button' | 'submit';
}

export const FiltersButton = forwardRef<HTMLButtonElement, FiltersButtonProps>(
  ({ appliedFiltersCount = 0, isOpen = false, className, type = 'button', ...rest }, ref) => {
    const hasAppliedFilters = appliedFiltersCount > 0;
    const containerClassName = cx('filters-icon-container', className, {
      'with-applied': hasAppliedFilters,
      opened: isOpen,
    });

    return (
      <button type={type} className={containerClassName} ref={ref} {...rest}>
        <span className={cx('filter-icon')}>
          {hasAppliedFilters ? <FilterFilledIcon /> : <FilterOutlineIcon />}
        </span>
        {hasAppliedFilters ? (
          <span className={cx('filters-count')}>{appliedFiltersCount}</span>
        ) : null}
      </button>
    );
  },
);

export default FiltersButton;

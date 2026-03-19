import { forwardRef, FC, ForwardedRef, ReactElement, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import { DropdownOptionProps } from '../types';
import styles from './dropdownOption.module.scss';
import { Checkbox } from '@components/checkbox';

const cx = classNames.bind(styles);

export const DropdownOption: FC<DropdownOptionProps> = forwardRef(
  (props: DropdownOptionProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const {
      option: { value, disabled, hidden, label, title, groupRef },
      selected,
      onChange,
      render,
      highlightHovered,
      onMouseEnter,
      multiSelect,
      isPartiallyChecked = false,
      depth = 0,
      hasChildren = false,
    } = props;
    const onChangeHandler: MouseEventHandler<HTMLDivElement | HTMLInputElement> = (e) => {
      if (
        e.target instanceof HTMLDivElement ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLSpanElement
      ) {
        onChange?.(value);
      }
    };

    return (
      <div
        className={cx('dropdown-option', {
          selected,
          disabled,
          hidden,
          hover: highlightHovered,
          'multi-select': multiSelect,
          'has-children': hasChildren,
          [`depth-${depth}`]: depth > 0,
        })}
        title={title}
        onClick={onChangeHandler}
        ref={ref}
        onMouseEnter={onMouseEnter}
      >
        {multiSelect && <Checkbox value={!!selected} partiallyChecked={isPartiallyChecked} />}
        <div
          className={cx('single-option', {
            'sub-option': !!groupRef,
          })}
        >
          {render ? render(props) : label}
        </div>
      </div>
    );
  },
);

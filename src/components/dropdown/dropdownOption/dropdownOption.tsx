import { forwardRef, FC, ForwardedRef, ReactElement, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import { DropdownOptionProps } from '../types';
import styles from './dropdownOption.module.scss';
import { Checkbox } from '@components/checkbox';
import { Tooltip } from '@components/tooltip';

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
      const target = e.target as HTMLElement;
      if (disabled) {
        return;
      }
      if (
        target.closest('label') &&
        !(target instanceof HTMLInputElement || target instanceof HTMLDivElement)
      ) {
        return;
      }
      onChange?.(value);
    };

    const optionElement = (
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
        title={!disabled ? (title ?? label) : undefined}
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

    if (disabled && title) {
      return (
        <Tooltip
          content={title}
          placement="top"
          wrapperTabIndex={-1}
          isFloating={false}
          portalRoot={props.disabledOptionTooltipPortalRoot}
        >
          {optionElement}
        </Tooltip>
      );
    }

    return optionElement;
  },
);

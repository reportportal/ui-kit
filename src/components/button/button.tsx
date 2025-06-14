import { ReactNode, forwardRef, ComponentPropsWithRef, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

type IconPlace = 'start' | 'end';
type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'text';
type ButtonWidth = 'content' | 'wide-content' | 'parent' | 'min-width';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children?: ReactNode;
  icon?: ReactNode;
  iconPlace?: IconPlace;
  adjustWidthOn?: ButtonWidth;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  className?: string;
  variant?: ButtonVariant;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=2350-8762&mode=design&t=GAXsAg9jOEgkVVlq-0
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      icon,
      iconPlace = 'start',
      adjustWidthOn = 'min-width',
      type = 'button',
      children,
      disabled = false,
      onClick,
      title,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = cx('button', variant, className, {
      disabled,
      [`width-${adjustWidthOn}`]: adjustWidthOn,
    });

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        onClick={onClick}
        title={title}
        {...rest}
      >
        {icon && (
          <i
            className={cx('icon', {
              [`icon-${iconPlace}`]: iconPlace,
            })}
          >
            {icon}
          </i>
        )}
        {children}
      </button>
    );
  },
);

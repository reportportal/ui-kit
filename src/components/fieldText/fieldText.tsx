import {
  ChangeEventHandler,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useId,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import { ClearIcon, OpenedEyeIcon, ClosedEyeIcon, CapsLockIcon } from '@components/icons';
import { BaseIconButton } from '@components/baseIconButton';
import { SpinLoader } from '@components/spinLoader';
import { MaxValueDisplay } from '@components/maxValueDisplay';
import { FieldLabel } from '@components/fieldLabel';

import styles from './fieldText.module.scss';
import { useCapsLock } from '@common/hooks';
import { Tooltip } from '@components/tooltip';

const cx = classNames.bind(styles);

type InputType = 'password' | 'text' | 'email';

export interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  className?: string;
  classNameHelpText?: string;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  touched?: boolean;
  title?: string;
  label?: string;
  helpText?: string;
  defaultWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  clearable?: boolean;
  onClear?: (prevValue?: string) => void;
  isRequired?: boolean;
  hasDoubleMessage?: boolean;
  type?: InputType;
  displayError?: boolean;
  maxLengthDisplay?: number;
  collapsible?: boolean;
  loading?: boolean;
  capsLockMessage?: string;
}

export const FieldText = forwardRef<HTMLInputElement, FieldTextProps>(
  (
    {
      value = '',
      className,
      classNameHelpText,
      error,
      placeholder,
      disabled = false,
      onChange,
      touched = false,
      title,
      label,
      helpText,
      defaultWidth = true,
      startIcon,
      endIcon,
      clearable = false,
      onClear,
      isRequired = false,
      hasDoubleMessage = false,
      type = 'text',
      displayError = true,
      collapsible = false,
      loading = false,
      maxLengthDisplay,
      capsLockMessage,
      onFocus = () => {},
      onBlur = () => {},
      ...rest
    },
    ref,
  ): ReactElement => {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = ref || internalRef;
    const inputId = useId();
    const [focused, setFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { capsLockOn } = useCapsLock();

    const showCapsLock = !!capsLockMessage && capsLockOn && value.length >= 1 && !disabled;

    const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus(event);
    };

    const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur(event);
    };

    const clearInput = () => {
      if (onClear) {
        onClear(value);
        const input = inputRef as MutableRefObject<HTMLInputElement>;
        input.current?.focus();
      }
    };

    const showError = displayError && error && touched;
    const helpTextElement = (
      <span className={cx('text', 'help-text', classNameHelpText)}>{helpText}</span>
    );

    const getInputType = () => {
      if (type !== 'password') {
        return type;
      }

      return passwordVisible ? 'text' : 'password';
    };

    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev);
    };

    return (
      <>
        {label && (
          <FieldLabel isRequired={isRequired} htmlFor={inputId}>
            {label}
          </FieldLabel>
        )}
        <div
          className={cx('field', className, {
            error,
            touched,
            disabled,
            'default-width': defaultWidth,
            collapsed: collapsible && !focused && !value,
          })}
          title={title}
        >
          {loading ? (
            <SpinLoader />
          ) : (
            startIcon && (
              <span
                className={cx('icon-container-start')}
                onClick={() => {
                  const input = inputRef as MutableRefObject<HTMLInputElement>;
                  input.current?.focus();
                }}
              >
                <span className={cx('icon', { 'start-icon': !focused })}>{startIcon}</span>
              </span>
            )
          )}
          <span
            className={cx('input-container', `type-${type}`, { 'with-caps-lock': showCapsLock })}
          >
            <input
              ref={inputRef}
              type={getInputType()}
              className={cx('input')}
              value={value}
              disabled={disabled}
              id={inputId}
              onChange={onChange}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              {...rest}
            />
            {showCapsLock && (
              <Tooltip
                content={capsLockMessage}
                wrapperClassName={cx('caps-lock-tooltip-wrapper')}
                contentClassName={cx('caps-lock-tooltip-content')}
              >
                <span className={cx('caps-lock-icon')}>
                  <CapsLockIcon />
                </span>
              </Tooltip>
            )}
            {type === 'password' && value && (
              <BaseIconButton
                className={cx('eye-icon')}
                onClick={togglePasswordVisibility}
                onPointerDown={(e) => e.preventDefault()}
              >
                {passwordVisible ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
              </BaseIconButton>
            )}
            {placeholder && !value && (
              <span className={cx('placeholder')}>
                {placeholder}
                {isRequired && !label && <span className={cx('asterisk')} />}
              </span>
            )}
          </span>
          <MaxValueDisplay
            className={cx('max-length-display')}
            value={value.length}
            maxValue={maxLengthDisplay}
          />
          {clearable && value.length > 0 && (
            <span className={cx('icon-container-end')}>
              <button
                type="button"
                className={cx('clear-icon', { disabled })}
                onClick={clearInput}
                onMouseDown={(e) => e.preventDefault()}
              >
                <ClearIcon />
              </button>
            </span>
          )}
          {endIcon && (
            <span className={cx('icon-container-end')}>
              <span className={cx('icon')}>{endIcon}</span>
            </span>
          )}
        </div>
        {(showError || helpText) && (
          <div className={cx('additional-content', { disabled })}>
            {showError ? (
              <>
                <span className={cx('text', 'error-text')}>{error}</span>
                {hasDoubleMessage && helpTextElement}
              </>
            ) : (
              helpText && helpTextElement
            )}
          </div>
        )}
      </>
    );
  },
);

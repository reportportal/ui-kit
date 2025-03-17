import {
  ChangeEventHandler,
  forwardRef,
  ReactElement,
  ReactNode,
  useState,
  useRef,
  InputHTMLAttributes,
  MutableRefObject,
  FocusEvent,
  MouseEventHandler,
  TouchEventHandler,
} from 'react';
import classNames from 'classnames/bind';
import { ClearIcon, CloseEyeIcon, OpenEyeIcon } from '@components/icons';
import { SpinLoader } from '@components/spinLoader';
import { MaxValueDisplay } from '@components/maxValueDisplay';
import styles from './fieldText.module.scss';

const cx = classNames.bind(styles);

const enum InputType {
  PASSWORD = 'password',
  TEXT = 'text',
}

interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
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
  type?: string;
  displayError?: boolean;
  maxLengthDisplay?: number;
  collapsible?: boolean;
  loading?: boolean;
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
      type = InputType.TEXT,
      displayError = true,
      collapsible = false,
      loading = false,
      maxLengthDisplay,
      onFocus = () => {},
      onBlur = () => {},
      ...rest
    },
    ref,
  ): ReactElement => {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = ref || internalRef;
    const [focused, setFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

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
      if (type !== InputType.PASSWORD) {
        return type;
      }

      return passwordVisible ? InputType.TEXT : InputType.PASSWORD;
    };

    const showPassword: MouseEventHandler<HTMLDivElement> & TouchEventHandler<HTMLDivElement> = (
      event,
    ) => {
      event.preventDefault();
      setPasswordVisible(true);
    };

    const hidePassword: MouseEventHandler<HTMLDivElement> & TouchEventHandler<HTMLDivElement> = (
      event,
    ) => {
      event.preventDefault();
      setPasswordVisible(false);
    };

    return (
      <>
        {label && (
          <span className={cx('label', { disabled })}>
            {label}
            {isRequired && <span className={cx('asterisk')}>*</span>}
          </span>
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
          <span className={cx('input-container', `type-${type}`)}>
            <input
              ref={inputRef}
              type={getInputType()}
              className={cx('input')}
              value={value}
              disabled={disabled}
              onChange={onChange}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              {...rest}
            />
            {type === InputType.PASSWORD && value && (
              <div
                className={cx('eye-icon')}
                onMouseDown={showPassword}
                onMouseLeave={hidePassword}
                onMouseUp={hidePassword}
                onTouchStart={showPassword}
                onTouchEnd={hidePassword}
                onTouchCancel={hidePassword}
              >
                {passwordVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
              </div>
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
          {endIcon && (
            <span className={cx('icon-container-end')}>
              <span className={cx('icon')}>{endIcon}</span>
            </span>
          )}
          {clearable && value.length > 0 && (
            <span className={cx('icon-container-end')}>
              <button type="button" className={cx('clear-icon', { disabled })} onClick={clearInput}>
                <ClearIcon />
              </button>
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

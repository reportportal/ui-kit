import { forwardRef, FC, ForwardedRef, ReactElement, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import { BaseIconButton } from '@components/baseIconButton';
import { SearchIcon, ClearIcon } from '@components/icons';
import dropdownStyles from '../../dropdown.module.scss';

const cx = classNames.bind(dropdownStyles);

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onClear?: () => void;
  onChange?: (value: string) => void;
  className?: string;
  showClearButton?: boolean;
}

export const SearchInput: FC<SearchInputProps> = forwardRef(
  (props: SearchInputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
    const {
      value = '',
      placeholder = 'Search...',
      disabled = false,
      onClear,
      onChange,
      className,
      showClearButton = true,
      ...restProps
    } = props;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    const handleClear = () => {
      onChange?.('');
      onClear?.();
    };

    return (
      <div className={cx('search-input-container', className)}>
        <div className={cx('search-input-wrapper')}>
          <BaseIconButton className={cx('search-icon')} tabIndex={-1}>
            <SearchIcon />
          </BaseIconButton>
          <input
            ref={ref}
            type="text"
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleInputChange}
            className={cx('search-input')}
            {...restProps}
          />
          {showClearButton && value && (
            <BaseIconButton
              className={cx('clear-button')}
              onClick={handleClear}
              tabIndex={-1}
              disabled={disabled}
            >
              <ClearIcon />
            </BaseIconButton>
          )}
        </div>
      </div>
    );
  },
);

SearchInput.displayName = 'SearchInput';

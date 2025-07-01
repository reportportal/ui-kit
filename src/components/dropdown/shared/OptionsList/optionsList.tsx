import { ReactNode, FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { Scrollbars } from 'rc-scrollbars';
import { DropdownOption } from '../../dropdownOption';
import { DropdownOptionType, DropdownValue, RenderDropdownOption } from '../../types';
import dropdownStyles from '../../dropdown.module.scss';

const cx = classNames.bind(dropdownStyles);

export interface OptionsListProps {
  options: DropdownOptionType[];
  getItemProps: (item: { item: DropdownOptionType; index: number }) => any;
  selectedItem?: DropdownOptionType | null;
  selectedItems?: DropdownOptionType[] | null;
  highlightedIndex: number;
  eventName?: string | null;
  multiSelect?: boolean;
  renderOption?: RenderDropdownOption;
  onChange: (option: DropdownOptionType) => void;
  onMouseEnter: (index: number) => void;
  footer?: ReactNode;
  notScrollable?: boolean;
  optionAll?: DropdownOptionType;
  isOptionAllVisible?: boolean;
  onSelectAll?: () => void;
  value?: DropdownValue | DropdownValue[];
  noResultsMessage?: string;
  createNewButton?: ReactNode;
}

export const OptionsList: FC<OptionsListProps> = ({
  options,
  getItemProps,
  selectedItem,
  selectedItems,
  highlightedIndex,
  eventName,
  multiSelect = false,
  renderOption,
  onChange,
  onMouseEnter,
  footer,
  notScrollable = false,
  optionAll,
  isOptionAllVisible = false,
  onSelectAll,
  value,
  noResultsMessage = 'No matches found',
  createNewButton,
}): ReactElement => {
  const renderOptionsContent = () => (
    <div className={cx('options-container')}>
      {multiSelect && isOptionAllVisible && Array.isArray(value) && (
        <>
          <DropdownOption
            option={optionAll!}
            selected={value.length === options.length}
            onChange={onSelectAll!}
            multiSelect={multiSelect}
            isPartiallyChecked={!!value.length}
          />
          <div className={cx('divider')} />
        </>
      )}

      {options.length === 0 ? (
        <div className={cx('no-results')}>{noResultsMessage}</div>
      ) : (
        options.map((option, index) => (
          <DropdownOption
            key={option.value}
            {...getItemProps({
              item: option,
              index,
            })}
            multiSelect={multiSelect}
            selected={
              multiSelect
                ? selectedItems?.some((item) => item.value === option.value)
                : option.value === (selectedItem?.value ?? selectedItem)
            }
            option={{ title: option.label, ...option }}
            highlightHovered={highlightedIndex === index && eventName !== 'onClick'}
            render={renderOption}
            onChange={option.disabled ? undefined : () => onChange(option)}
            onMouseEnter={() => onMouseEnter(index)}
          />
        ))
      )}

      {createNewButton && (
        <>
          <div className={cx('divider')} />
          {createNewButton}
        </>
      )}

      {footer && (
        <>
          <div className={cx('divider')} />
          {footer}
        </>
      )}
    </div>
  );

  return notScrollable ? (
    renderOptionsContent()
  ) : (
    <Scrollbars autoHeight autoHeightMax={216} hideTracksWhenNotNeeded>
      {renderOptionsContent()}
    </Scrollbars>
  );
};

import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Tooltip } from '../../tooltip';
import styles from './itemCounter.module.scss';

const cx = classNames.bind(styles);

export interface ItemCounterProps {
  activePage: number;
  pageSize: number;
  totalItems: number;
  ofText: string;
  itemsText: string;
  limitExceeded?: boolean;
  warningContent?: ReactNode;
  accentTotalTooltip?: ReactNode;
}

export const ItemCounter = ({
  activePage,
  pageSize,
  totalItems,
  ofText,
  itemsText,
  limitExceeded = false,
  warningContent = null,
  accentTotalTooltip,
}: ItemCounterProps): ReactElement => {
  const endIndex = activePage * pageSize;
  const startIndex = endIndex - pageSize;
  return (
    <div className={cx('item-counter')}>
      {`${startIndex + 1} - ${endIndex < totalItems ? endIndex : totalItems}`}
      {` ${ofText} `}
      {accentTotalTooltip ? (
        typeof window !== 'undefined' ? (
          <Tooltip
            content={accentTotalTooltip}
            placement="top"
            wrapperClassName={cx('accent-total-tooltip-wrapper')}
          >
            <span className={cx('accent-total')}>{totalItems}</span>
          </Tooltip>
        ) : (
          <span className={cx('accent-total')}>{totalItems}</span>
        )
      ) : (
        `${totalItems}${limitExceeded ? '+' : ''}`
      )}
      {` ${itemsText}`}
      {!accentTotalTooltip && warningContent}
    </div>
  );
};

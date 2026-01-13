import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';
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
}

export const ItemCounter = ({
  activePage,
  pageSize,
  totalItems,
  ofText,
  itemsText,
  limitExceeded = false,
  warningContent = null,
}: ItemCounterProps): ReactElement => {
  const endIndex = activePage * pageSize;
  const startIndex = endIndex - pageSize;
  return (
    <div className={cx('item-counter')}>
      {`${startIndex + 1} - ${endIndex < totalItems ? endIndex : totalItems}`}
      {` ${ofText} ${totalItems}${limitExceeded ? '+' : ''} ${itemsText}`}
      {warningContent}
    </div>
  );
};

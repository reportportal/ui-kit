import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { ResizeColumnIcon } from '@components/icons';
import styles from './resizeHandle.module.scss';

const cx = classNames.bind(styles);

export const ResizeHandle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <div ref={ref} className={cx('resize-handle')} {...props}>
      <ResizeColumnIcon />
    </div>
  ),
);

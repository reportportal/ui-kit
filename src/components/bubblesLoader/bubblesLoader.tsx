import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './bubblesLoader.module.scss';

const cx = classNames.bind(styles);

const BUBBLES_COUNT = 7;

interface BubblesLoaderProps {
  color?: string;
  className?: string;
  variant?: 'standard' | 'large';
}

export const BubblesLoader: FC<BubblesLoaderProps> = ({
  color = 'topaz',
  className,
  variant = 'standard',
}): ReactElement => (
  <div
    className={cx('bubbles-loader', className, {
      [`color-${color}`]: color,
      [`bubbles-${variant}`]: variant,
    })}
  >
    {Array(BUBBLES_COUNT)
      .fill(undefined)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={cx('bubble')} key={index} />
      ))}
  </div>
);

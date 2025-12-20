import { ReactElement, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './gradientOverlay.module.scss';

const cx = classNames.bind(styles);

export interface GradientOverlayProps {
  portalContainer?: HTMLElement | null;
  visible: boolean;
  position: {
    top: number;
    left?: number;
    right?: number;
  };
  size: {
    width: number;
    height: number;
  };
  direction: 'left' | 'right';
  className?: string;
  dataTestId?: string;
}

export const GradientOverlay = ({
  portalContainer,
  visible,
  position,
  size,
  direction,
  className,
  dataTestId,
}: GradientOverlayProps): ReactElement | null => {
  if (!visible || !portalContainer) {
    return null;
  }

  const style: CSSProperties = {
    position: 'fixed',
    top: `${position.top}px`,
    width: `${size.width}px`,
    height: `${size.height}px`,
  };

  if (position.left !== undefined) {
    style.left = `${position.left}px`;
  }

  if (position.right !== undefined) {
    style.right = `${position.right}px`;
  }

  return createPortal(
    <div
      className={cx('gradient-overlay', `direction-${direction}`, className)}
      style={style}
      data-gradient-type={dataTestId}
    />,
    portalContainer,
  );
};

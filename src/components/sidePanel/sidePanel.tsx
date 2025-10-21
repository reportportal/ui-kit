import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { CloseIcon } from '@components/icons';
import { BaseIconButton } from '@components/baseIconButton';
import styles from './sidePanel.module.scss';

const cx = classNames.bind(styles);

export interface SidePanelProps {
  className?: string;
  title?: ReactNode;
  headerComponent?: ReactNode;
  descriptionComponent?: ReactNode;
  contentComponent?: ReactNode;
  footerComponent?: ReactNode;
  top?: number;
  side?: 'left' | 'right';
  isOpen?: boolean;
  onClose?: () => void;
}

export const SidePanel = ({
  className,
  title,
  descriptionComponent,
  headerComponent,
  contentComponent,
  footerComponent,
  top = 0,
  side = 'right',
  isOpen = true,
  onClose,
}: SidePanelProps) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside
      className={cx('side-panel', `side-${side}`, { active: isOpen }, className)}
      style={{ top }}
    >
      <div className={cx('header-section')}>
        {(headerComponent || title) && (
          <div className={cx('header')}>
            {title ? <span className={cx('title')}>{title}</span> : headerComponent}

            <BaseIconButton
              className={cx('close-button')}
              onClick={handleClose}
              aria-label="Close panel"
            >
              <CloseIcon />
            </BaseIconButton>
          </div>
        )}
        {descriptionComponent}
      </div>
      <div className={cx('divider')}></div>

      {contentComponent && <div className={cx('content')}>{contentComponent}</div>}

      {footerComponent && (
        <>
          <div className={cx('divider')}></div>
          <div className={cx('footer')}>{footerComponent}</div>
        </>
      )}
    </aside>
  );
};

export default SidePanel;

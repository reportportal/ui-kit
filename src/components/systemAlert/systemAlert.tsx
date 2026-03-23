import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { SystemAlertProps, SystemAlertType, SystemAlertTypographyColorType } from './types';
import styles from './systemAlert.module.scss';
import classNames from 'classnames/bind';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon } from '@components/icons';

const cx = classNames.bind(styles);
const DEFAULT_DURATION = 4000;

export const SystemAlert: FC<SystemAlertProps> = ({
  title,
  onClose,
  icon = null,
  type = SystemAlertType.INFO,
  typographyColor = SystemAlertTypographyColorType.WHITE,
  duration = DEFAULT_DURATION,
  className,
  dataAutomationId,
}): ReactElement => {
  const [systemTitle, setSystemTitle] = useState('');
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) {
      return;
    }

    const checkOverflow = () => {
      const { offsetHeight, scrollHeight } = el;
      if (offsetHeight < scrollHeight) {
        setSystemTitle(title);
      } else {
        setSystemTitle('');
      }
    };

    checkOverflow();

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [title]);

  useEffect(() => {
    if ([SystemAlertType.WARNING, SystemAlertType.ERROR].includes(type)) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [type, duration, onClose]);

  const getIcon = (): ReactElement | null => {
    switch (type) {
      case 'info':
        return <InfoIcon />;
      case 'success':
        return <SuccessIcon />;
      case 'warning':
      case 'error':
        return <ErrorIcon />;
      default:
        return icon;
    }
  };

  return (
    <div
      className={cx('system-alert', type, className, `system-alert--${typographyColor}`)}
      data-automation-id={dataAutomationId}
    >
      <div className={cx('icon-wrapper')}>{getIcon()}</div>
      <div className={cx('content-wrapper')}>
        <h2
          ref={titleRef}
          className={cx('title', `title--${typographyColor}`)}
          title={systemTitle || undefined}
        >
          {title}
        </h2>
      </div>
      <button className={cx('close-button')} onClick={onClose} aria-label="close system alert">
        <CloseIcon />
      </button>
    </div>
  );
};

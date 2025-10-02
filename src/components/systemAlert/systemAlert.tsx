import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { SystemAlertProps, SystemAlertType, SystemAlertTypographyColorType } from './types';
import styles from './systemAlert.module.scss';
import classNames from 'classnames/bind';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon } from '@components/icons';

const cx = classNames.bind(styles);
const ERROR_DURATION = 7000;
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
  const adjustedDuration = type === SystemAlertType.ERROR ? ERROR_DURATION : duration;
  const [systemTitle, setSystemTitle] = useState('');
  const refSystemAlert = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { offsetHeight, scrollHeight } = refSystemAlert?.current as HTMLDivElement;

    if (offsetHeight < scrollHeight) {
      setSystemTitle(title);
    }
  }, [title]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, adjustedDuration);

    return () => clearTimeout(timer);
  }, [adjustedDuration, onClose]);

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
      title={systemTitle}
      data-automation-id={dataAutomationId}
    >
      <div className={cx('icon-wrapper')}>{getIcon()}</div>
      <div className={cx('content-wrapper')}>
        <h2 ref={refSystemAlert} className={cx('title', `title--${typographyColor}`)}>
          {title}
        </h2>
      </div>
      <button className={cx('close-button')} onClick={onClose} aria-label="close system alert">
        <CloseIcon />
      </button>
    </div>
  );
};

import { ReactNode, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { BaseIconButton } from '@components/baseIconButton';
import { CloseIcon } from '@components/icons';
import styles from './modalHeader.module.scss';

const cx = classNames.bind(styles);

interface ModalHeaderProps {
  title?: ReactNode;
  onClose: () => void;
  withDescription?: boolean;
  className?: string;
}

export const ModalHeader = ({
  title,
  onClose,
  withDescription = false,
  className,
}: ModalHeaderProps): ReactElement => (
  <div className={cx('modal-header', { 'width-description': withDescription }, className)}>
    <div className={cx('modal-header-content')}>
      {title && <div className={cx('modal-title')}>{title}</div>}
    </div>
    <BaseIconButton className={cx('close-modal-icon')} onClick={onClose}>
      <CloseIcon />
    </BaseIconButton>
  </div>
);

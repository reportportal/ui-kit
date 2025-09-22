import { ReactNode, FC, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import { Button, ButtonProps } from '@components/button';
import { Tooltip } from '@components/tooltip';
import { ExtendedButtonProps } from '../types';
import styles from './modalFooter.module.scss';

const cx = classNames.bind(styles);

export type ModalSize = 'default' | 'small' | 'large';

interface ModalFooterProps {
  closeHandler: MouseEventHandler<HTMLButtonElement>;
  footerNode?: ReactNode;
  okButton?: ExtendedButtonProps;
  cancelButton?: ButtonProps;
  size?: ModalSize;
}

export const ModalFooter: FC<ModalFooterProps> = ({
  footerNode,
  closeHandler,
  okButton,
  cancelButton,
  size,
}) => {
  const { tooltipNode, ...okButtonProps } = okButton || {};

  const renderOkButton = () => {
    const button = (
      <Button adjustWidthOn={size === 'small' ? 'parent' : 'min-width'} {...okButtonProps} />
    );
    return tooltipNode ? (
      <Tooltip content={tooltipNode} placement="top" width={270}>
        {button}
      </Tooltip>
    ) : (
      button
    );
  };

  return (
    <div className={cx('modal-footer', { 'with-extra-node': footerNode, [`size-${size}`]: size })}>
      {footerNode && footerNode}
      <div className={cx('buttons-block')}>
        {cancelButton && (
          <div className={cx('button-container')}>
            <Button
              variant="ghost"
              adjustWidthOn={size === 'small' ? 'parent' : 'min-width'}
              onClick={closeHandler}
              {...cancelButton}
            />
          </div>
        )}
        {okButton && <div className={cx('button-container')}>{renderOkButton()}</div>}
      </div>
    </div>
  );
};

import { ReactNode, useEffect, useId, useRef, useMemo } from 'react';
import classNames from 'classnames/bind';
import { KeyCodes } from '@common/constants/keyCodes';
import { useOnClickOutside } from '@common/hooks';
import { DROPDOWN_PORTAL_MENU_ATTR } from '@components/dropdown';
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
  closeButtonAriaLabel?: string;
  showOverlay?: boolean;
  overlay?: 'default' | 'light-cyan';
  allowCloseOutside?: boolean;
  overlayClassName?: string;
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
  closeButtonAriaLabel = 'Close panel',
  showOverlay = false,
  overlay = 'default',
  allowCloseOutside = true,
  overlayClassName,
}: SidePanelProps) => {
  const titleId = useId();
  const panelRef = useRef<HTMLElement>(null);

  const handleClose = () => {
    onClose?.();
  };

  const clickOutsideOptions = useMemo(
    () => ({
      ignoreSelectors: [`[${DROPDOWN_PORTAL_MENU_ATTR}]`],
    }),
    [],
  );

  useOnClickOutside(
    panelRef,
    allowCloseOutside && showOverlay && isOpen ? onClose : undefined,
    clickOutsideOptions,
  );

  useEffect(() => {
    if (!isOpen || !onClose) {
      return;
    }

    const onKeydown = (event: KeyboardEvent) => {
      const { keyCode } = event;

      if (keyCode === KeyCodes.ESCAPE_KEY_CODE && allowCloseOutside) {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeydown, false);

    return () => {
      document.removeEventListener('keydown', onKeydown, false);
    };
  }, [isOpen, onClose, allowCloseOutside]);

  const hasHeaderOrDescription = !!(headerComponent || descriptionComponent);

  const panelElement = (
    <aside
      ref={panelRef}
      className={cx('side-panel', `side-${side}`, { active: isOpen }, className)}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby={title ? titleId : undefined}
      style={{ top, height: `calc(100vh - ${top}px)` }}
      tabIndex={-1}
    >
      <div className={cx('header-section', { compact: !hasHeaderOrDescription })}>
        {(headerComponent || title) && (
          <div className={cx('header')}>
            {title ? (
              <span id={titleId} className={cx('title')}>
                {title}
              </span>
            ) : (
              headerComponent
            )}

            {onClose && (
              <BaseIconButton
                className={cx('close-button')}
                onClick={handleClose}
                aria-label={closeButtonAriaLabel}
              >
                <CloseIcon />
              </BaseIconButton>
            )}
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

  if (showOverlay && isOpen) {
    return (
      <div
        className={cx(
          'side-panel-overlay',
          { active: isOpen },
          overlay && `overlay-${overlay}`,
          overlayClassName,
        )}
      >
        {panelElement}
      </div>
    );
  }

  return panelElement;
};

export default SidePanel;

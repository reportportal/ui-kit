import { ReactNode, useCallback, useEffect, useMemo, useRef, useState, FC } from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import { useOnClickOutside, useWindowResize } from '@common/hooks';
import { AUTOCOMPLETE_PORTAL_MENU_ATTR } from '@components/autocompletes/constants';
import { DROPDOWN_PORTAL_MENU_ATTR } from '@components/dropdown';
import { KeyCodes } from '@common/constants/keyCodes';
import { ButtonProps } from '@components/button';
import { ModalContent } from './modalContent';
import { ModalFooter, ModalSize } from './modalFooter';
import { ModalHeader } from './modalHeader';
import { ExtendedButtonProps } from './types';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

const MODAL_MAX_RATIO = 0.9;
const MODAL_HEADER_HEIGHT = 32 + 24;
const MODAL_HEADER_WITH_DESCRIPTION_HEIGHT = 32 + 8;
const MODAL_FOOTER_HEIGHT = 36 + 16;
const MODAL_LAYOUT_PADDING = 32 * 2;

type ModalOverlay = 'default' | 'light-cyan';

interface ModalProps {
  onClose?: () => void;
  title?: ReactNode;
  children?: ReactNode;
  footerNode?: ReactNode;
  className?: string;
  zIndex?: number;
  size?: ModalSize;
  overlay?: ModalOverlay;
  allowCloseOutside?: boolean;
  okButton?: ExtendedButtonProps;
  cancelButton?: ButtonProps;
  scrollable?: boolean;
  withoutFooter?: boolean;
  createFooter?: (closeHandler: () => void) => ReactNode;
  description?: ReactNode;
}

// TODO: Fix issue with modal positioning
export const Modal: FC<ModalProps> = ({
  title,
  children,
  footerNode,
  okButton,
  cancelButton,
  className,
  size = 'default',
  onClose = () => {},
  overlay = 'default',
  zIndex = 2,
  allowCloseOutside = true,
  scrollable = false,
  withoutFooter = false,
  createFooter = null,
  description = null,
}) => {
  const [isShown, setShown] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const [initiallyFocused, setInitiallyFocused] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const windowSize = useWindowResize();
  const windowHeight = windowSize.height;
  const modalMaxHeight = windowHeight * MODAL_MAX_RATIO;
  const modalMargin = (windowHeight - modalHeight) / 2;
  const getContentMaxHeight = () => {
    let contentMaxHeight = modalMaxHeight - MODAL_LAYOUT_PADDING;
    if (!withoutFooter) {
      contentMaxHeight = contentMaxHeight - MODAL_FOOTER_HEIGHT;
    }

    if (description) {
      contentMaxHeight = contentMaxHeight - MODAL_HEADER_WITH_DESCRIPTION_HEIGHT;
    } else {
      contentMaxHeight = contentMaxHeight - MODAL_HEADER_HEIGHT;
    }

    return contentMaxHeight;
  };

  const closeModal = useCallback(() => {
    setShown(false);
  }, []);

  const onKeydown = useCallback(
    (event: KeyboardEvent) => {
      const { keyCode } = event;

      if (keyCode === KeyCodes.ESCAPE_KEY_CODE) {
        closeModal();
      }
    },
    [closeModal],
  );

  const onFocus = () => {
    if (!initiallyFocused) {
      modalRef.current?.focus();
      setInitiallyFocused(true);
    }
  };

  useEffect(() => {
    if (!isShown || !modalRef.current) return;

    const updateHeight = () => {
      if (modalRef.current) {
        setModalHeight(modalRef.current.clientHeight);
      }
    };

    updateHeight();

    if (typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(updateHeight);
    observer.observe(modalRef.current);
    return () => observer.disconnect();
  }, [isShown]);

  useEffect(() => {
    setShown(true);

    document.addEventListener('keydown', onKeydown, false);

    return () => document.removeEventListener('keydown', onKeydown, false);
  }, [onKeydown]);

  const clickOutsideOptions = useMemo(
    () => ({
      ignoreSelectors: [`[${DROPDOWN_PORTAL_MENU_ATTR}]`, `[${AUTOCOMPLETE_PORTAL_MENU_ATTR}]`],
    }),
    [],
  );

  useOnClickOutside(modalRef, allowCloseOutside ? closeModal : undefined, clickOutsideOptions);

  return (
    <AnimatePresence onExitComplete={onClose}>
      {isShown && (
        <div className={cx('modal', { [`overlay-${overlay}`]: overlay })} style={{ zIndex }}>
          <motion.div
            className={cx('modal-window', { [`size-${size}`]: size }, className)}
            key="modal-window"
            ref={modalRef}
            tabIndex={0}
            initial={{ opacity: 0, marginTop: -modalMargin }}
            animate={{ opacity: 1, marginTop: modalMargin }}
            exit={{ opacity: 0, marginTop: -modalMargin }}
            transition={{ duration: 0.3 }}
            onAnimationStart={onFocus}
          >
            <ModalHeader title={title} onClose={closeModal} withDescription={!!description} />
            {scrollable ? (
              <div className={cx('scrollable-wrapper')}>
                <Scrollbars
                  autoHeight
                  autoHeightMax={getContentMaxHeight()}
                  hideTracksWhenNotNeeded
                >
                  <div className={cx('scrollable-content')}>
                    {description && <span className={cx('description')}>{description}</span>}
                    <ModalContent>{children}</ModalContent>
                  </div>
                </Scrollbars>
              </div>
            ) : (
              <>
                {description && <span className={cx('description')}>{description}</span>}
                <ModalContent>{children}</ModalContent>
              </>
            )}
            {!withoutFooter &&
              (createFooter ? (
                createFooter(closeModal)
              ) : (
                <ModalFooter
                  size={size}
                  footerNode={footerNode}
                  okButton={okButton}
                  cancelButton={cancelButton}
                  closeHandler={closeModal}
                />
              ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

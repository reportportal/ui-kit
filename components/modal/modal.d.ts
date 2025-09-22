import { ReactNode, FC } from '../../../node_modules/react';
import { ButtonProps } from '../button';
import { ModalSize } from './modalFooter';
import { ExtendedButtonProps } from './types';

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
export declare const Modal: FC<ModalProps>;
export {};

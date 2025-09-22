import { ReactNode, FC, MouseEventHandler } from '../../../../node_modules/react';
import { ButtonProps } from '../../button';
import { ExtendedButtonProps } from '../types';

export type ModalSize = 'default' | 'small' | 'large';
interface ModalFooterProps {
    closeHandler: MouseEventHandler<HTMLButtonElement>;
    footerNode?: ReactNode;
    okButton?: ExtendedButtonProps;
    cancelButton?: ButtonProps;
    size?: ModalSize;
}
export declare const ModalFooter: FC<ModalFooterProps>;
export {};

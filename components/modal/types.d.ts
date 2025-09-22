import { ReactNode } from '../../../node_modules/react';
import { ButtonProps } from '../button';

export interface ExtendedButtonProps extends ButtonProps {
    tooltipNode?: ReactNode;
}

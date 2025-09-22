import { ReactNode } from 'react';
import { ButtonProps } from '../button';

export interface ExtendedButtonProps extends ButtonProps {
  tooltipNode?: ReactNode;
}

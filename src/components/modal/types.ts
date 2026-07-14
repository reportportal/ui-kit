import { ReactNode } from 'react';
import { ButtonProps } from '@components/button';

export interface ExtendedButtonProps extends ButtonProps {
  tooltipNode?: ReactNode;
}

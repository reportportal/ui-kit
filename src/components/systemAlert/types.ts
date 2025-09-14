import { ReactElement } from 'react';
export enum SystemAlertType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum SystemAlertTypographyColorType {
  WHITE = 'white',
  BLACK = 'black',
}
export interface SystemAlertProps {
  title: string;
  onClose: () => void;
  icon?: ReactElement | null;
  type?: SystemAlertType;
  typographyColor?: SystemAlertTypographyColorType;
  duration?: number;
  className?: string;
  dataAutomationId?: string;
}

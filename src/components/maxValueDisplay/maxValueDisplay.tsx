import { FC } from 'react';
import { ShapeWithClassName } from '@common/types';
import { isPositiveInteger } from './utils';

export interface MaxValueDisplayProps {
  value: number;
  maxValue?: number;
}

export const MaxValueDisplay: FC<ShapeWithClassName<MaxValueDisplayProps>> = ({
  className,
  value,
  maxValue,
}) => {
  const hasMaxLengthDisplay = isPositiveInteger(maxValue);

  return hasMaxLengthDisplay ? (
    <span className={className}>
      {value}/{maxValue}
    </span>
  ) : null;
};

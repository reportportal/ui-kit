import { FC } from '../../../node_modules/react';
import { ShapeWithClassName } from '../../common/types';
export interface MaxValueDisplayProps {
    value: number;
    maxValue?: number;
}
export declare const MaxValueDisplay: FC<ShapeWithClassName<MaxValueDisplayProps>>;

import { FC } from '../../../node_modules/react';
import { RadioProps, RadioOption } from './radio';

export interface RadioGroupProps extends Omit<RadioProps, 'option'> {
    options: RadioOption[];
}
export declare const RadioGroup: FC<RadioGroupProps>;

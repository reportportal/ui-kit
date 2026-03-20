import { FC, ReactElement } from 'react';
import { Radio, RadioProps } from './index';
import { RadioOption } from './radio';

export interface RadioGroupProps extends Omit<RadioProps, 'option'> {
  options: RadioOption[];
}

export const RadioGroup: FC<RadioGroupProps> = ({ options, value, ...rest }): ReactElement => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {options.map((option) => (
      <Radio key={option.value} option={option} value={value} {...rest} />
    ))}
  </div>
);

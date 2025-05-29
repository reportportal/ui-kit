import { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './radioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Controls/Radio button',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const options = [
      { value: '1', label: 'Option 1', disabled: false },
      { value: '2', label: 'Option 2', disabled: false },
      { value: '3', label: 'Option 3', disabled: false },
    ];

    return <RadioGroup {...args} options={options} value={value} onChange={handleChange} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('2');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const options = [
      { value: '1', label: 'Option 1', disabled: true },
      { value: '2', label: 'Option 2', disabled: true },
    ];

    return <RadioGroup {...args} options={options} value={value} onChange={handleChange} />;
  },
};

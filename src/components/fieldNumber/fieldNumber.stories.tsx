import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FieldNumber } from './fieldNumber';

const meta: Meta<typeof FieldNumber> = {
  title: 'Fields/Field Number',
  component: FieldNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | number>('0');
    const handleChange = (val: string | number) => {
      setValue(val);
    };
    return (
      <>
        <FieldNumber {...args} value={value} onChange={handleChange} />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FieldNumber>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Enter you number',
  },
};

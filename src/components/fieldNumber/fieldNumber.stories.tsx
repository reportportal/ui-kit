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
    const [value, setValue] = useState<string | number>(args.value ?? '');
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

export const WithPostfix: Story = {
  args: {
    label: 'Amount',
    postfix: '%',
    max: 100,
  },
};

export const WithError: Story = {
  args: {
    label: 'Quantity',
    value: 150,
    error: 'Value exceeds maximum limit',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Enter amount',
    placeholder: '0',
    postfix: '$',
  },
};

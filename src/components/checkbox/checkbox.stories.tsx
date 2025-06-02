import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const WithChildren: Story = {
  render: (args) => <Checkbox {...args}>Primary</Checkbox>,
};

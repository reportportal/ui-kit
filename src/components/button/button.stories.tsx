import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => <Button {...args}>Primary</Button>,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => <Button {...args}>Ghost</Button>,
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => <Button {...args}>Danger</Button>,
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (args) => <Button {...args}>Text</Button>,
};

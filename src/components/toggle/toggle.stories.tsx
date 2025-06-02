import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Controls/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: {
    children: 'Enable me',
  },
};

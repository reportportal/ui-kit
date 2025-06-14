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

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
} satisfies Story;

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
} satisfies Story;

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
} satisfies Story;

export const Text = {
  args: {
    variant: 'text',
    children: 'Text',
  },
} satisfies Story;

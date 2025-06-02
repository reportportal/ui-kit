import type { Meta, StoryObj } from '@storybook/react';

import { SystemMessage } from './systemMessage';

const meta: Meta<typeof SystemMessage> = {
  title: 'Modals & Notification/System Message',
  component: SystemMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SystemMessage>;

export const Info: Story = {
  args: {
    mode: 'info',
    header: 'Info message',
    children: 'This is the message description',
    caption: 'Additional description',
  },
};

export const Warning: Story = {
  args: {
    mode: 'warning',
    header: 'Warning message',
    children: 'This is the message description',
    caption: 'Additional description',
  },
};

export const Error: Story = {
  args: {
    mode: 'error',
    header: 'Error message',
    children: 'This is the message description',
    caption: 'Additional description',
  },
};

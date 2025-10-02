import { Meta, StoryObj } from '@storybook/react';
import { SystemAlert } from './systemAlert';
import { SystemAlertType, SystemAlertTypographyColorType } from '@components/systemAlert/types';

const meta: Meta<typeof SystemAlert> = {
  title: 'Modals & Notification/SystemAlert',
  component: SystemAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['info', 'success', 'warning', 'error'],
      control: 'radio',
      table: { type: { summary: 'string' } },
    },
    typographyColor: {
      options: ['white', 'black'],
      control: 'radio',
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    title: 'Ab dignissimos exercitationem laudantium magni voluptas.',
    onClose: () => {},
    type: SystemAlertType.SUCCESS,
  },
};

export default meta;

type Story = StoryObj<typeof SystemAlert>;

export const Default: Story = {
  render: (args) => (
    <div style={{ minHeight: '150px', padding: '50px' }}>
      <SystemAlert {...args}></SystemAlert>
    </div>
  ),
};

export const Warning: Story = {
  args: {
    type: SystemAlertType.WARNING,
    typographyColor: SystemAlertTypographyColorType.BLACK,
  },
  render: (args) => (
    <div style={{ minHeight: '150px', padding: '50px' }}>
      <SystemAlert {...args}></SystemAlert>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './popover';
import { allPlacements } from '@/common/constants/floatingUi';

const meta: Meta<typeof Popover> = {
  title: 'Controls/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'hello title',
    setIsOpened: undefined,
  },
  argTypes: {
    placement: {
      control: 'select',
      options: allPlacements,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <div style={{ minWidth: '500px', minHeight: '500px', padding: '200px' }}>
      <Popover {...args} content={<div>hello popover content</div>}>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'green' }} />
      </Popover>
    </div>
  ),
};

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Selection } from './selection';

const meta: Meta<typeof Selection> = {
  args: {
    captions: {
      buttonCaption: 'Clear Selection',
      selected: 'selected',
    },
    selectedCount: 10,
  },
  title: 'Navigation/Selection',
  component: Selection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Selection>;

export const Primary: Story = {
  args: {},
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCount, setSelectedCount] = useState(props.selectedCount);

    return (
      <div style={{ width: '900px' }}>
        <Selection
          {...props}
          onClearSelection={() => setSelectedCount(0)}
          selectedCount={selectedCount}
        />
      </div>
    );
  },
};

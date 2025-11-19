import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { FiltersButton, FiltersButtonProps } from './filtersButton';

const meta: Meta<typeof FiltersButton> = {
  title: 'Components/FiltersButton',
  component: FiltersButton,
  tags: ['autodocs'],
  args: {
    appliedFiltersCount: 0,
    isOpen: false,
    disabled: false,
  },
  argTypes: {
    appliedFiltersCount: {
      control: 'number',
      description: 'Number of active filters to display in badge',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the filters panel is currently open',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
      description: 'HTML button type attribute',
      table: {
        type: { summary: "'button' | 'submit'" },
        defaultValue: { summary: "'button'" },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: {
        type: { summary: '(event: MouseEvent<HTMLButtonElement>) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Default outline icon displayed when no filters are active. Clicking opens the filters panel.',
      },
    },
  },
};

export const WithAppliedFilters: Story = {
  args: {
    appliedFiltersCount: 3,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Shows a filled icon and count badge when filters are active. Button appearance changes to indicate active state.',
      },
    },
  },
};

export const Opened: Story = {
  args: {
    isOpen: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Visual state when the filters panel is open. Icon color changes to pressed state for visual feedback.',
      },
    },
  },
};

const FiltersButtonInteractive = (args: FiltersButtonProps) => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FiltersButton
      {...args}
      appliedFiltersCount={count}
      isOpen={isOpen}
      onClick={() => {
        const next = count >= 3 ? 0 : count + 1;
        setCount(next);
        setIsOpen((prev) => !prev);
      }}
    />
  );
};

export const Interactive: Story = {
  render: (args: FiltersButtonProps) => <FiltersButtonInteractive {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example cycling through states: no filters → 1 filter → 2 filters → 3 filters → reset.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    appliedFiltersCount: 2,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Button is disabled and cannot be interacted with. Hover states are suppressed and cursor indicates non-interactive state.',
      },
    },
  },
};

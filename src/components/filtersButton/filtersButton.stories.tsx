/*
 * Copyright 2026 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    text: {
      control: 'text',
      description: 'Text to display instead of filter count',
      table: {
        type: { summary: 'string' },
      },
    },
    filtersLabelClassName: {
      control: 'text',
      description: 'CSS class name for the filters label/count element',
      table: {
        type: { summary: 'string' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button when filters are active',
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
    onClear: {
      action: 'cleared',
      description: 'Callback when clear button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    clearButtonAriaLabel: {
      control: 'text',
      description: 'ARIA label for the clear button (for accessibility and internationalization)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Clear filters'" },
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

export const WithText: Story = {
  args: {
    text: 'Active',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Button with custom text instead of filter count. Useful for displaying status or custom labels.',
      },
    },
  },
};

export const WithLongText: Story = {
  args: {
    text: 'Very important filters applied',
    clearable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Button with longer text to demonstrate text wrapping and layout behavior. Includes clearable functionality.',
      },
    },
  },
};

const FiltersButtonWithClear = (args: FiltersButtonProps) => {
  const [count, setCount] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FiltersButton
      {...args}
      appliedFiltersCount={count}
      isOpen={isOpen}
      clearable
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      onClear={() => {
        setCount(0);
        setIsOpen(false);
      }}
    />
  );
};

export const Clearable: Story = {
  render: (args: FiltersButtonProps) => <FiltersButtonWithClear {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Button with clear functionality. The clear button appears when filters are active and can be clicked to reset filters.',
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

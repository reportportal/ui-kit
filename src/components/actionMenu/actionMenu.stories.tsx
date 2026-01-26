/*!
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
import { ActionMenu, ActionMenuItem } from './actionMenu';
import { ACTION_MENU_DIVIDER } from './constants';
import { RerunIcon, UserIcon } from '../icons';

const meta: Meta<typeof ActionMenu> = {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  tags: ['autodocs'],
  args: {
    items: [
      <ActionMenuItem key="view">
        <a href="/details">View Details</a>
      </ActionMenuItem>,
      <ActionMenuItem key="edit">
        <a href="/edit">Edit</a>
      </ActionMenuItem>,
      ACTION_MENU_DIVIDER,
      { id: 'archive', label: 'Archive', onClick: () => console.log('Archive clicked') },
      {
        id: 'delete',
        label: 'Delete',
        onClick: () => console.log('Delete clicked'),
        className: 'danger-button',
      },
    ],
    placement: 'bottom-end',
    disabled: false,
  },
  argTypes: {
    items: {
      description:
        'Array of menu items: ActionItem (buttons), DividerItem ({ type: "divider" }), or React components',
      table: {
        type: { summary: 'MenuItem[]' },
      },
      control: false,
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],
      description: 'Popover placement relative to the button',
      table: {
        type: { summary: 'Placement' },
        defaultValue: { summary: 'bottom-end' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the menu button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    cleanupDividers: {
      control: 'boolean',
      description: 'Automatically remove dividers from edges and duplicates',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the container',
      table: {
        type: { summary: 'string' },
      },
    },
    contentClassName: {
      control: 'text',
      description: 'Additional CSS class for the menu content',
      table: {
        type: { summary: 'string' },
      },
    },
    buttonClassName: {
      control: 'text',
      description: 'Additional CSS class for the trigger button',
      table: {
        type: { summary: 'string' },
      },
    },
    popoverClassName: {
      control: 'text',
      description: 'Additional CSS class for the popover container',
      table: {
        type: { summary: 'string' },
      },
    },
    menuClassName: {
      control: 'text',
      description: 'Additional CSS class for the menu wrapper',
      table: {
        type: { summary: 'string' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Actions menu' },
      },
    },
    trigger: {
      description: 'Custom trigger element (defaults to meatball menu icon)',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActionsOnly: Story = {
  args: {
    items: [
      { id: 'edit', label: 'Edit', onClick: () => console.log('Edit clicked') },
      {
        id: 'duplicate',
        label: 'Duplicate',
        onClick: () => console.log('Duplicate clicked'),
      },
      {
        id: 'delete',
        label: 'Delete',
        onClick: () => console.log('Delete clicked'),
        className: 'danger-button',
      },
    ],
  },
};

export const CustomComponents: Story = {
  args: {
    items: [
      <ActionMenuItem key="profile">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserIcon /> View Profile
        </span>
      </ActionMenuItem>,
      <ActionMenuItem key="docs">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RerunIcon /> Re-run
        </span>
      </ActionMenuItem>,
    ],
  },
};

export const WithPermissions: Story = {
  args: {
    items: [
      <ActionMenuItem key="view">
        <a href="/details">View Details</a>
      </ActionMenuItem>,
      { id: 'archive', label: 'Archive', onClick: () => {}, hasPermission: true },
      {
        id: 'delete',
        label: 'Delete',
        onClick: () => {},
        className: 'danger-button',
        hasPermission: false,
      },
    ],
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The entire ActionMenu button can be disabled, preventing the menu from opening.',
      },
    },
  },
};

export const MultipleDividers: Story = {
  args: {
    items: [
      { id: 'view', label: 'View', onClick: () => {} },
      ACTION_MENU_DIVIDER,
      { id: 'edit', label: 'Edit', onClick: () => {} },
      { id: 'duplicate', label: 'Duplicate', onClick: () => {} },
      ACTION_MENU_DIVIDER,
      { id: 'delete', label: 'Delete', onClick: () => {}, className: 'danger-button' },
    ],
  },
};

export const TopPlacement: Story = {
  args: {
    placement: 'top-end',
  },
  render: (args) => (
    <div style={{ paddingTop: '200px' }}>
      <ActionMenu {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const DisabledActions: Story = {
  args: {
    items: [
      { id: 'view', label: 'View (available)', onClick: () => console.log('View') },
      { id: 'edit', label: 'Edit (disabled)', onClick: () => console.log('Edit'), disabled: true },
      ACTION_MENU_DIVIDER,
      {
        id: 'delete',
        label: 'Delete (disabled)',
        onClick: () => console.log('Delete'),
        disabled: true,
        className: 'danger-button',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Individual actions can be disabled. Unlike hasPermission=false (which hides items), disabled=true shows items in a grayed-out state.',
      },
    },
  },
};

export const DividerCleanup: Story = {
  args: {
    cleanupDividers: true,
    items: [
      ACTION_MENU_DIVIDER,
      { id: 'edit', label: 'Edit', onClick: () => {} },
      ACTION_MENU_DIVIDER,
      ACTION_MENU_DIVIDER,
      { id: 'delete', label: 'Delete', onClick: () => {}, hasPermission: false },
      ACTION_MENU_DIVIDER,
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'With cleanupDividers=true (default), leading/trailing/consecutive dividers are removed. After filtering by hasPermission, only Edit action remains with no dividers.',
      },
    },
  },
};

export const WithoutCleanup: Story = {
  args: {
    cleanupDividers: false,
    items: [
      ACTION_MENU_DIVIDER,
      { id: 'edit', label: 'Edit', onClick: () => {} },
      ACTION_MENU_DIVIDER,
      ACTION_MENU_DIVIDER,
      { id: 'delete', label: 'Delete', onClick: () => {}, hasPermission: false },
      ACTION_MENU_DIVIDER,
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'With cleanupDividers=false, dividers are preserved as-is. This results in dividers at edges and consecutive duplicates.',
      },
    },
  },
};

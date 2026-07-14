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
import { useState } from 'react';
import { FilterItem } from './filterItem';
import { ActionItem } from '@components/actionMenu';

const mockActions: ActionItem[] = [
  {
    id: 'rename',
    label: 'Rename',
    onClick: () => console.log('Rename action'),
  },
  {
    id: 'edit',
    label: 'Edit',
    onClick: () => console.log('Edit action'),
  },
  {
    id: 'duplicate',
    label: 'Duplicate',
    onClick: () => console.log('Duplicate action'),
  },
  {
    id: 'delete',
    label: 'Delete',
    onClick: () => console.log('Delete action'),
    className: 'danger-action',
  },
];

const meta: Meta<typeof FilterItem> = {
  title: 'Components/FilterItem',
  component: FilterItem,
  tags: ['autodocs'],
  args: {
    id: '1',
    caption: 'Filter Label',
    actions: mockActions,
    disabled: false,
    selected: false,
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the filter item',
      table: {
        type: { summary: 'string' },
      },
    },
    caption: {
      control: 'text',
      description: 'Text displayed inside the filter item',
      table: {
        type: { summary: 'string' },
      },
    },
    actions: {
      description: 'Array of actions available in the dropdown menu',
      table: {
        type: { summary: 'ActionItem[]' },
      },
      control: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the filter item is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the filter item is selected/highlighted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    editMode: {
      control: 'boolean',
      description: 'Whether the filter item is in edit mode (disables menu)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the container',
      table: {
        type: { summary: 'string' },
      },
    },
    captionClassName: {
      control: 'text',
      description: 'Additional CSS class for the caption element',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      description: 'Callback when the filter item is clicked (excluding the actions button)',
      action: 'clicked',
      table: {
        type: { summary: '(id: string) => void' },
      },
    },
    onHover: {
      description: 'Callback when hovering over the filter item',
      action: 'hovered',
      table: {
        type: { summary: '(id: string, isHovering: boolean) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultRender(args) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <style>
          {`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}
        </style>
        <FilterItem
          {...args}
          id="1"
          caption="Active Filter"
          actions={mockActions}
          selected={selectedId === '1'}
          onClick={() => setSelectedId('1')}
        />
        <FilterItem
          {...args}
          id="2"
          caption="Inactive Filter"
          actions={mockActions}
          selected={selectedId === '2'}
          onClick={() => setSelectedId('2')}
        />
        <FilterItem {...args} id="3" caption="Disabled Filter" actions={mockActions} disabled />
        <FilterItem
          {...args}
          id="4"
          caption="Very Long Filter Name That Should Truncate"
          actions={mockActions}
          selected={selectedId === '4'}
          onClick={() => setSelectedId('4')}
        />
      </div>
    );
  },
};

export const WithHoverCallback: Story = {
  render: function WithHoverCallbackRender(args) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
      <div>
        <style>
          {`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}
        </style>
        <div style={{ marginBottom: '16px', fontSize: '12px', color: '#666' }}>
          Hovered item ID: {hoveredId || 'None'}
        </div>
        <FilterItem
          {...args}
          id="1"
          caption="Filter Label"
          actions={mockActions}
          onHover={(id, isHovering) => {
            setHoveredId(isHovering ? id : null);
          }}
        />
      </div>
    );
  },
};

export const EditMode: Story = {
  render: function EditModeRender(args) {
    const [editingId, setEditingId] = useState<string | undefined>(undefined);
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

    const createEditActions = (itemId: string): ActionItem[] => [
      {
        id: 'edit',
        label: 'Edit',
        onClick: () => setEditingId(itemId),
      },
    ];

    return (
      <div>
        <style>
          {`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}
        </style>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <FilterItem
            {...args}
            id="1"
            caption="Filter A"
            actions={createEditActions('1')}
            editMode={editingId === '1'}
            disabled={!!(editingId && editingId !== '1')}
            selected={selectedId === '1'}
            onClick={() => {
              setSelectedId('1');
              console.log('Selected ID set to 1');
            }}
          />
          <FilterItem
            {...args}
            id="2"
            caption="Filter B"
            actions={createEditActions('2')}
            editMode={editingId === '2'}
            disabled={!!(editingId && editingId !== '2')}
            selected={selectedId === '2'}
            onClick={() => {
              setSelectedId('2');
              console.log('Selected ID set to 2');
            }}
          />
          <FilterItem
            {...args}
            id="3"
            caption="Filter C"
            actions={createEditActions('3')}
            editMode={editingId === '3'}
            disabled={!!(editingId && editingId !== '3')}
            selected={selectedId === '3'}
            onClick={() => {
              setSelectedId('3');
              console.log('Selected ID set to 3');
            }}
          />
        </div>
      </div>
    );
  },
};

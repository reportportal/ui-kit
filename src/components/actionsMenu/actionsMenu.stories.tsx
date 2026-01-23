import type { Meta, StoryObj } from '@storybook/react';
import { ActionsMenu } from './actionsMenu';

const meta: Meta<typeof ActionsMenu> = {
  title: 'Components/ActionsMenu',
  component: ActionsMenu,
  tags: ['autodocs'],
  args: {
    actions: [
      { id: 'edit', name: 'Edit', onClick: () => console.log('Edit clicked') },
      { id: 'duplicate', name: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
      { id: 'delete', name: 'Delete', onClick: () => console.log('Delete clicked') },
    ],
    placement: 'bottom',
    disabled: false,
  },
  argTypes: {
    actions: {
      description: 'Array of menu items',
      table: {
        type: { summary: 'ActionsMenuItem[]' },
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
        defaultValue: { summary: 'bottom' },
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
    className: {
      control: 'text',
      description: 'Additional CSS class for the container',
      table: {
        type: { summary: 'string' },
      },
    },
    buttonClassName: {
      control: 'text',
      description: 'Additional CSS class for the button',
      table: {
        type: { summary: 'string' },
      },
    },
    menuClassName: {
      control: 'text',
      description: 'Additional CSS class for the menu content',
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    actions: [
      { id: 'edit', name: 'Edit', onClick: () => console.log('Edit clicked') },
      { id: 'duplicate', name: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
      { id: 'delete', name: 'Delete', onClick: () => console.log('Delete clicked') },
    ],
  },
};

export const TopPlacement: Story = {
  args: {
    disabled: true,
  },

  render: () => (
    <div style={{ paddingTop: '200px' }}>
      <ActionsMenu
        actions={[
          { id: 'edit', name: 'Edit', onClick: () => console.log('Edit clicked') },
          { id: 'duplicate', name: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
          { id: 'delete', name: 'Delete', onClick: () => console.log('Delete clicked') },
        ]}
        placement="top"
      />
    </div>
  ),
};

export const CustomActions: Story = {
  args: {
    actions: [
      { id: 'view', name: 'View Details', onClick: () => console.log('View') },
      { id: 'share', name: 'Share', onClick: () => console.log('Share') },
      { id: 'export', name: 'Export', onClick: () => console.log('Export') },
      { id: 'archive', name: 'Archive', onClick: () => console.log('Archive') },
    ],
  },
};

export const WithCustomStyles: Story = {
  render: () => (
    <>
      <style>
        {`
          .danger-action {
            color: var(--rp-ui-color-error) !important;
          }
          .danger-action:hover {
            color: var(--rp-ui-color-error-hover) !important;
            background-color: rgba(255, 0, 0, 0.05) !important;
          }
          .primary-action {
            color: var(--rp-ui-color-primary) !important;
            font-weight: 600;
          }
        `}
      </style>
      <ActionsMenu
        actions={[
          {
            id: 'edit',
            name: 'Edit',
            onClick: () => console.log('Edit'),
            className: 'primary-action',
          },
          { id: 'duplicate', name: 'Duplicate', onClick: () => console.log('Duplicate') },
          {
            id: 'delete',
            name: 'Delete',
            onClick: () => console.log('Delete'),
            className: 'danger-action',
          },
        ]}
      />
    </>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px' }}>
      <span style={{ fontSize: '14px' }}>User: John Doe</span>
      <ActionsMenu
        actions={[
          { id: 'profile', name: 'View Profile', onClick: () => console.log('Profile') },
          { id: 'settings', name: 'Settings', onClick: () => console.log('Settings') },
          { id: 'logout', name: 'Logout', onClick: () => console.log('Logout') },
        ]}
      />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchableDropdown, SearchableDropdownProps } from './searchableDropdown';
import { DropdownValue } from '../types';

const meta: Meta<typeof SearchableDropdown> = {
  title: 'Controls/SearchableDropdown',
  component: SearchableDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: [
      { value: 'order-history', label: 'Order history' },
      { value: 'profile-update', label: 'Profile update' },
      { value: 'log-out-flow', label: 'Log out flow' },
      {
        value: 'password-reset',
        label: 'Password Reset Procedures and Guidelines for User Account Management',
      },
      { value: 'product-search', label: 'Product search' },
      { value: 'performance-tests', label: 'Performance tests' },
      { value: 'android', label: 'android' },
      { value: 'authorisation', label: 'Authorisation' },
      { value: 'back', label: 'back' },
      { value: 'ios', label: 'iOS' },
      { value: 'search', label: 'Search' },
    ],
    onChange: () => {},
    placeholder: 'Select folder...',
    className: 'dropdown-default',
  },
};

export default meta;

type Story = StoryObj<typeof SearchableDropdown>;

export const Default: Story = {
  render: (args: SearchableDropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<DropdownValue | DropdownValue[]>('');

    return (
      <div style={{ width: '300px' }}>
        <SearchableDropdown
          {...args}
          value={selectedValue}
          onChange={(value) => {
            setSelectedValue(value);
          }}
        />
      </div>
    );
  },
  args: {
    label: 'Folder',
  },
};

export const WithCreateNew: Story = {
  render: (args: SearchableDropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<DropdownValue | DropdownValue[]>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [options, setOptions] = useState(args.options || []);

    const handleCreateNew = (inputValue: string) => {
      const newOption = {
        value: inputValue.toLowerCase().replace(/\s+/g, '-'),
        label: inputValue,
      };
      setOptions([...options, newOption]);
      setSelectedValue(newOption.value);
    };

    return (
      <div style={{ width: '300px' }}>
        <SearchableDropdown
          {...args}
          options={options}
          value={selectedValue}
          onChange={(value) => {
            setSelectedValue(value);
          }}
          allowCreateNew
          onCreateNew={handleCreateNew}
        />
      </div>
    );
  },
  args: {
    label: 'Tag',
    placeholder: 'Select or create tag...',
    createNewLabel: '+ Create new',
  },
};

export const MultiSelect: Story = {
  render: (args: SearchableDropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);

    return (
      <div style={{ width: '300px' }}>
        <SearchableDropdown
          {...args}
          value={selectedValues}
          onChange={(value) => {
            setSelectedValues(value);
          }}
          multiSelect
        />
      </div>
    );
  },
  args: {
    label: 'Multiple Folders',
    placeholder: 'Select folders...',
    isOptionAllVisible: true,
  },
};

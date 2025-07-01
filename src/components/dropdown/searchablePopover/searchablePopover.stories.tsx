import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@components/button';
import { SearchablePopover, SearchablePopoverProps } from './searchablePopover';
import { DropdownValue } from '../types';

const meta: Meta<typeof SearchablePopover> = {
  title: 'Controls/SearchablePopover',
  component: SearchablePopover,
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
  },
};

export default meta;

type Story = StoryObj<typeof SearchablePopover>;

export const Default: Story = {
  render: (args: SearchablePopoverProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<DropdownValue | DropdownValue[]>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '100px' }}>
        <SearchablePopover
          {...args}
          value={selectedValue}
          onChange={(value) => {
            setSelectedValue(value);
          }}
          isOpened={isOpen}
          setIsOpened={setIsOpen}
        >
          <Button onClick={() => setIsOpen(!isOpen)}>
            {selectedValue ? `Selected: ${selectedValue}` : 'Select Tag'}
          </Button>
        </SearchablePopover>
      </div>
    );
  },
};

export const WithCreateNew: Story = {
  render: (args: SearchablePopoverProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<DropdownValue | DropdownValue[]>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [options, setOptions] = useState(args.options || []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    const handleCreateNew = (inputValue: string) => {
      const newOption = {
        value: inputValue.toLowerCase().replace(/\s+/g, '-'),
        label: inputValue,
      };
      setOptions([...options, newOption]);
      setSelectedValue(newOption.value);
    };

    return (
      <div style={{ padding: '100px' }}>
        <SearchablePopover
          {...args}
          options={options}
          value={selectedValue}
          onChange={(value) => {
            setSelectedValue(value);
          }}
          isOpened={isOpen}
          setIsOpened={setIsOpen}
          allowCreateNew
          onCreateNew={handleCreateNew}
        >
          <Button onClick={() => setIsOpen(!isOpen)}>
            {selectedValue ? `Selected: ${selectedValue}` : 'Find or create new tag'}
          </Button>
        </SearchablePopover>
      </div>
    );
  },
  args: {
    createNewLabel: '+ Create new',
  },
};

export const MultiSelect: Story = {
  render: (args: SearchablePopoverProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    const selectedCount = Array.isArray(selectedValues) ? selectedValues.length : 0;

    return (
      <div style={{ padding: '100px' }}>
        <SearchablePopover
          {...args}
          value={selectedValues}
          onChange={(value) => {
            setSelectedValues(value);
          }}
          isOpened={isOpen}
          setIsOpened={setIsOpen}
          multiSelect
        >
          <Button onClick={() => setIsOpen(!isOpen)}>
            {selectedCount > 0 ? `${selectedCount} tags selected` : 'Select Tags'}
          </Button>
        </SearchablePopover>
      </div>
    );
  },
  args: {
    isOptionAllVisible: true,
  },
};

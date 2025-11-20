import type { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { Dropdown, DropdownProps } from './dropdown';
import { DropdownValue } from '@components/dropdown/types';
import { Button } from '@components/button';
import './stories.scss';

const nestedOptions = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  {
    value: 'group-a',
    label: 'Group A',
    children: [
      { value: 'group-a-option-1', label: 'Group A Option 1' },
      { value: 'group-a-option-2', label: 'Group A Option 2' },
      { value: 'group-a-option-3', label: 'Group A Option 3' },
    ],
  },
  {
    value: 'group-b',
    label: 'Group B',
    children: [
      { value: 'group-b-option-1', label: 'Group B Option 1' },
      { value: 'group-b-option-2', label: 'Group B Option 2' },
      { value: 'group-b-option-3', label: 'Group B Option 3' },
    ],
  },
  { value: 'option-3', label: 'Option 3' },
  { value: 'option-4', label: 'Option 4' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Controls/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
      { value: 9, label: '9' },
    ],
    onChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

interface FooterApplyProps {
  selected: number;
  total: number;
  onApply: () => void;
}

const FooterApply: FC<FooterApplyProps> = ({ selected, total, onApply }) => {
  return (
    <div className={'apply-container'}>
      <p className={'info-text'}>{`${selected} of ${total} selected`}</p>
      <Button onClick={onApply} variant={'text'}>
        Apply
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<DropdownValue>(
      (args.value as DropdownValue) ?? (args.options[0]?.value as DropdownValue) ?? '',
    );

    return (
      <Dropdown
        {...args}
        value={selectedValue}
        onChange={(nextValue) => {
          if (!Array.isArray(nextValue)) {
            setSelectedValue(nextValue);
          }
        }}
      />
    );
  },
  args: {
    placeholder: 'Select value',
  },
};

export const MultiSelect: Story = {
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);

    return (
      <div>
        <Dropdown
          {...args}
          onChange={(value) => {
            setSelectedValues(value);
          }}
          value={selectedValues}
          footer={
            <FooterApply
              selected={Array.isArray(selectedValues) ? selectedValues.length : 0}
              total={args.options.length}
              onApply={() => {}}
            />
          }
        />
      </div>
    );
  },
  args: {
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: '', label: 'Nullable' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
      { value: 9, label: '9' },
    ],
    className: 'dropdown-default',
    value: 1,
    multiSelect: true,
    placeholder: 'Select value',
    isOptionAllVisible: true,
    optionAll: { value: 'all', label: 'All' },
    clearable: true,
    onClear: () => {},
  },
};

export const Ghost: Story = {
  args: {
    value: 2,
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
};

export const NestedMultiSelect: Story = {
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);

    return (
      <div className="dropdown-default">
        <Dropdown
          {...args}
          onChange={(nextValue) => {
            setSelectedValues(nextValue);
          }}
          value={selectedValues}
        />
      </div>
    );
  },
  args: {
    options: nestedOptions,
    multiSelect: true,
    placeholder: 'Select value',
    isOptionAllVisible: false,
    includeGroupValue: false,
    variant: 'default',
    isListWidthLimited: false,
    optionAll: {
      label: 'all',
      value: 'all',
    },
    clearable: true,
    onClear: () => {},
  },
};

export const WithTooltipPortal: Story = {
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);

    return (
      <div className="dropdown-default" style={{ width: '300px' }}>
        <p style={{ marginBottom: '16px' }}>
          This example demonstrates tooltip rendering in a portal to prevent clipping when the
          dropdown is inside a container with overflow hidden (e.g., SidePanel).
        </p>
        <Dropdown
          {...args}
          onChange={(nextValue) => {
            setSelectedValues(nextValue);
          }}
          value={selectedValues}
          tooltipPortalRoot={document.body}
        />
      </div>
    );
  },
  args: {
    options: [
      {
        value: 'very-long-option-1',
        label:
          'Product bug, Critical, Automation bug, Kotlin, Automation bug with very-very long defect type name',
      },
      {
        value: 'very-long-option-2',
        label: 'Another extremely long option name that will be truncated and show tooltip',
      },
      { value: 'option-3', label: 'Option 3' },
      { value: 'option-4', label: 'Option 4' },
    ],
    multiSelect: true,
    placeholder: 'Select value',
    clearable: true,
    onClear: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: `const [selectedValues, setSelectedValues] = useState([]);

return (
  <div style={{ width: '300px' }}>
    <Dropdown
      options={[
        {
          value: 'very-long-option-1',
          label: 'Product bug, Critical, Automation bug, Kotlin, Automation bug with very-very long defect type name',
        },
        {
          value: 'very-long-option-2',
          label: 'Another extremely long option name that will be truncated and show tooltip',
        },
        { value: 'option-3', label: 'Option 3' },
        { value: 'option-4', label: 'Option 4' },
      ]}
      multiSelect
      placeholder="Select value"
      clearable
      value={selectedValues}
      onChange={(nextValue) => setSelectedValues(nextValue)}
      tooltipPortalRoot={document.body}
    />
  </div>
);`,
        language: 'tsx',
      },
    },
  },
};

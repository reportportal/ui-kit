import type { Meta, StoryObj } from '@storybook/react';
import { DeleteIcon, SearchIcon } from '@components/icons';
import { FieldText, FieldTextProps } from '../fieldText';
import { InputType } from '../types';
import { ARG_TYPES } from './constants';
import { ChangeEvent, useEffect, useRef, useState, FC } from 'react';

const FieldTextWithHooks: FC<FieldTextProps> = (props) => {
  const [value, setValue] = useState(props.value || '');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: enteredValue } = event.target;

    setValue(enteredValue);

    if (enteredValue === 'blur') {
      ref?.current?.blur();
    }
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <FieldText {...props} value={value} onChange={handleChange} onClear={handleClear} ref={ref} />
  );
};
/** Reusable UI component for the text input */
const meta: Meta<typeof FieldText> = {
  title: 'Fields/Field Text',
  component: FieldText,
  parameters: {
    layout: 'centered',
  },
  argTypes: ARG_TYPES,
  tags: ['autodocs'],
  render: (args) => <FieldTextWithHooks {...args} />,
};

export default meta;

type Story = StoryObj<typeof FieldText>;

export const Empty: Story = {
  args: {},
};

export const Required: Story = {
  args: {
    isRequired: true,
    placeholder: 'Type here',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Type here',
  },
};

export const WithHelpText: Story = {
  args: {
    helpText: 'This field is intended for ...',
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'The field should not be empty',
    touched: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const NonDefaultWidth: Story = {
  args: {
    defaultWidth: false,
  },
};

export const WithMaxLengthDisplay: Story = {
  args: { maxLengthDisplay: 60 },
};

export const FullyDescribed: Story = {
  args: {
    label: 'Type here',
    helpText: 'This field is intended for ...',
    isRequired: true,
    placeholder: 'Type here',
    error: 'The field should not be empty',
    touched: true,
    hasDoubleMessage: true,
    startIcon: <DeleteIcon />,
    collapsible: true,
    loading: true,
  },
};

export const WithPassword: Story = {
  args: {
    type: InputType.PASSWORD,
  },
};
/** Collapsible text input by clicking on the icon */
export const CollapsibleFieldText: Story = {
  args: {
    collapsible: true,
    startIcon: <SearchIcon />,
    maxLength: 256,
    clearable: true,
  },
  render: (args) => (
    <div style={{ backgroundColor: '#f7f7f8', padding: '10px' }}>
      <FieldTextWithHooks {...args} />
    </div>
  ),
};

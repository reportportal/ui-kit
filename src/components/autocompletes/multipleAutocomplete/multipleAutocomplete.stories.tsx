/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { MultipleAutocomplete } from './multipleAutocomplete';
import { ComponentProps, useState } from 'react';

type WithStorybookProps<T, K> = T & { value: K };

const OPTIONS_OBJECTS = [
  { id: 'Demo Api Tests', name: 'Demo Api Tests' },
  { id: 'Demo Api Tests 1', name: 'Demo Api Tests 1' },
  { id: 'Demo Api Tests 2', name: 'Demo Api Tests 2' },
  { id: 'Demo Api Tests 3', name: 'Demo Api Tests 3' },
];

const OPTIONS_STRINGS = [
  'Demo Api Tests',
  'Demo Api Tests 1',
  'Demo Api Tests 2',
  'Demo Api Tests 3',
];

const LONG_OPTIONS_STRINGS = [
  'Very Long Option Name That Will Be Truncated When Single Line Mode Is Enabled',
  'Another Very Long Option Name That Will Also Be Truncated',
  'Short',
  'Medium Length Option Name',
];

const TEST_DATA_OBJECTS: Partial<
  WithStorybookProps<
    ComponentProps<typeof MultipleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>,
    typeof OPTIONS_OBJECTS
  >
> = {
  options: OPTIONS_OBJECTS,
  loading: false,
  async: true,
  createWithoutConfirmation: true,
  creatable: false,
  editable: true,
  existingItemsMap: {
    [OPTIONS_OBJECTS[0].id]: true,
  },
  parseValueToString: (value) => {
    return value?.id ? String(value.id) : '';
  },
  highlightUnStoredItem: false,
  value: [OPTIONS_OBJECTS[0]],
  error: '',
  touched: true,
  minLength: 1,
  placeholder: 'Test placeholder',
  disabled: false,
  mobileDisabled: false,
  inputProps: {
    clearable: true,
  },
  maxLength: null,
  customClass: '',
  menuClassName: '',
  parseInputValueFn: null,
  dataAutomationId: '',
};

const TEST_DATA_STRINGS: Partial<
  WithStorybookProps<
    ComponentProps<typeof MultipleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>,
    typeof OPTIONS_STRINGS
  >
> = {
  options: OPTIONS_STRINGS,
  loading: false,
  async: true,
  createWithoutConfirmation: true,
  creatable: false,
  editable: true,
  existingItemsMap: {
    'Demo Api Tests': true,
  },
  parseValueToString: (value) => {
    return value ? String(value) : '';
  },
  highlightUnStoredItem: true,
  value: [OPTIONS_STRINGS[0]],
  error: '',
  touched: false,
  inputProps: {
    clearable: true,
  },
  minLength: 1,
  isDropdownMode: true,
  placeholder: 'Test placeholder',
  disabled: false,
  mobileDisabled: false,
  maxLength: null,
  customClass: '',
  menuClassName: '',
  parseInputValueFn: null,
  dataAutomationId: '',
};

const meta: Meta<typeof MultipleAutocomplete> = {
  title: 'Controls/Autocompletes/MultipleAutocomplete',
  component: MultipleAutocomplete,
  parameters: {
    ...TEST_DATA_OBJECTS,
  },
  tags: ['autodocs'],
};

export default meta;

type Story<T> = StoryObj<WithStorybookProps<ComponentProps<typeof MultipleAutocomplete<T>>, T[]>>;

export const Objects: Story<(typeof OPTIONS_OBJECTS)[number]> = {
  args: {
    ...TEST_DATA_OBJECTS,
  },
  render: (args) => {
    const [state, setState] = useState(args.value || []);

    const modifiedArgs = {
      ...args,
      inputProps: { ...args.inputProps, onClear: () => setState([]) },
    };

    const onChange: ComponentProps<
      typeof MultipleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>
    >['onChange'] = (newState) => {
      setState(newState as typeof OPTIONS_OBJECTS);
    };

    return (
      <div style={{ width: '600px', height: '400px', display: 'flex', alignItems: 'center' }}>
        <MultipleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>
          {...modifiedArgs}
          onChange={onChange}
          value={state}
        />
      </div>
    );
  },
};

export const Strings: Story<(typeof OPTIONS_STRINGS)[number]> = {
  args: {
    ...TEST_DATA_STRINGS,
  },
  render: (args) => {
    const [state, setState] = useState(args.value || []);

    const modifiedArgs = {
      ...args,
      inputProps: { ...args.inputProps, onClear: () => setState([]) },
    };

    const onChange: ComponentProps<
      typeof MultipleAutocomplete<(typeof OPTIONS_STRINGS)[number]>
    >['onChange'] = (newState) => {
      setState(newState as typeof OPTIONS_STRINGS);
    };

    return (
      <div style={{ width: '600px', height: '400px', display: 'flex', alignItems: 'center' }}>
        <MultipleAutocomplete {...modifiedArgs} onChange={onChange} value={state} />
      </div>
    );
  },
};

export const WithSingleLineMode: Story<(typeof LONG_OPTIONS_STRINGS)[number]> = {
  args: {
    options: LONG_OPTIONS_STRINGS,
    loading: false,
    async: true,
    createWithoutConfirmation: true,
    creatable: false,
    editable: true,
    existingItemsMap: {},
    parseValueToString: (value) => {
      return value ? String(value) : '';
    },
    highlightUnStoredItem: false,
    value: [LONG_OPTIONS_STRINGS[0], LONG_OPTIONS_STRINGS[1]],
    error: '',
    touched: false,
    inputProps: {
      clearable: true,
    },
    minLength: 1,
    placeholder: 'Test placeholder',
    disabled: false,
    mobileDisabled: false,
    maxLength: null,
    customClass: '',
    menuClassName: '',
    parseInputValueFn: null,
    dataAutomationId: '',
    selectedItemSingleLine: true,
  },
  render: (args) => {
    const [state, setState] = useState(args.value || []);

    const modifiedArgs = {
      ...args,
      inputProps: { ...args.inputProps, onClear: () => setState([]) },
    };

    const onChange: ComponentProps<
      typeof MultipleAutocomplete<(typeof LONG_OPTIONS_STRINGS)[number]>
    >['onChange'] = (newState) => {
      setState(newState as typeof LONG_OPTIONS_STRINGS);
    };

    return (
      <div style={{ width: '300px', height: '400px', display: 'flex', alignItems: 'center' }}>
        <MultipleAutocomplete<(typeof LONG_OPTIONS_STRINGS)[number]>
          {...modifiedArgs}
          onChange={onChange}
          value={state}
        />
      </div>
    );
  },
};

export const WithMultiTokenParseInputValueFn: Story<string> = {
  args: {
    options: OPTIONS_STRINGS,
    loading: false,
    async: false,
    createWithoutConfirmation: true,
    creatable: true,
    editable: true,
    existingItemsMap: {},
    parseValueToString: (value) => {
      return value ? String(value) : '';
    },
    highlightUnStoredItem: false,
    value: [],
    error: '',
    touched: false,
    inputProps: {
      clearable: true,
    },
    minLength: 1,
    isDropdownMode: false,
    placeholder: 'Enter comma, semicolon, or newline-separated items',
    disabled: false,
    mobileDisabled: false,
    maxLength: null,
    customClass: '',
    menuClassName: '',
    dataAutomationId: 'multi-token-parse-demo',
    // Multi-token parser: splits by comma, semicolon, or newline
    parseInputValueFn: (inputValue: string) => {
      return inputValue
        .split(/[,;\n]+/)
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
    },
  },
  render: (args) => {
    const [state, setState] = useState<string[]>(args.value || []);

    const modifiedArgs = {
      ...args,
      inputProps: { ...args.inputProps, onClear: () => setState([]) },
    };

    const onChange: ComponentProps<typeof MultipleAutocomplete<string>>['onChange'] = (
      newState,
    ) => {
      setState(newState as string[]);
    };

    return (
      <div>
        <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
          <p>
            Try entering multiple items in one action:
            <br />• Comma-separated: <code>alpha, beta, gamma</code>
            <br />• Semicolon-separated: <code>alpha; beta; gamma</code>
            <br />
            • Newline-separated (paste multiple lines)
            <br />
            Then press Enter or click outside the field to confirm.
            <br />
            All valid items parsed from the input should be added as separate chips.
          </p>
        </div>
        <div style={{ width: '500px', height: '400px', display: 'flex', alignItems: 'center' }}>
          <MultipleAutocomplete<string> {...modifiedArgs} onChange={onChange} value={state} />
        </div>
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          <p>Current selected items ({state.length}):</p>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

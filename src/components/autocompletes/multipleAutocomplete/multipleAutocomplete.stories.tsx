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

export const WithTruncatedText: Story<(typeof LONG_OPTIONS_STRINGS)[number]> = {
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

export const WithTooltipOnTruncate: Story<(typeof LONG_OPTIONS_STRINGS)[number]> = {
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
    selectedItemShowTooltipOnTruncate: true,
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

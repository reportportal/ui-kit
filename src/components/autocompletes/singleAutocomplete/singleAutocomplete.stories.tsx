/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { SingleAutocomplete } from './singleAutocomplete';
import Downshift from 'downshift';
import { ComponentProps, useState } from 'react';

const OPTIONS_OBJECTS = [
  { id: 'Demo Api Tests', name: 'Demo Api Tests' },
  { id: 'Demo Api Tests 1', name: 'Demo Api Tests 1' },
  { id: 'Demo Api Tests 2', name: 'Demo Api Tests 2' },
  { id: 'Demo Api Tests 3', name: 'Demo Api Tests 3' },
];

const OPTIONS_STRINGS: string[] = [
  'Demo Api Tests',
  'Demo Api Tests 1',
  'Demo Api Tests 2',
  'Demo Api Tests 3',
];

type WithStorybookProps<T, K> = T & { value: K };

const TEST_DATA_OBJECTS: Partial<
  WithStorybookProps<
    ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>,
    (typeof OPTIONS_OBJECTS)[number]
  >
> = {
  options: OPTIONS_OBJECTS,
  loading: false,
  async: true,
  createWithoutConfirmation: true,
  parseValueToString: (value) => {
    return value?.id ? String(value?.id) : '';
  },
  value: OPTIONS_OBJECTS[0],
  error: '',
  touched: true,
  minLength: 1,
  placeholder: 'Test placeholder',
  isDropdownMode: true,
  disabled: false,
  inputProps: {
    clearable: true,
  },
  maxLength: null,
};

const TEST_DATA_STRINGS: Partial<
  WithStorybookProps<
    ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>,
    (typeof OPTIONS_STRINGS)[number]
  >
> = {
  options: OPTIONS_STRINGS,
  loading: false,
  async: true,
  createWithoutConfirmation: true,
  parseValueToString: (value) => {
    return value ? String(value) : '';
  },
  value: OPTIONS_STRINGS[0],
  error: '',
  touched: true,
  minLength: 1,
  placeholder: 'Test placeholder',
  disabled: false,
  inputProps: {
    clearable: true,
  },
  maxLength: null,
};

const meta: Meta<typeof SingleAutocomplete> = {
  title: 'Controls/Autocompletes/SingleAutocomplete',
  component: SingleAutocomplete,
  parameters: {
    ...TEST_DATA_STRINGS,
  },
  tags: ['autodocs'],
};

export default meta;

type Story<T> = StoryObj<WithStorybookProps<ComponentProps<typeof SingleAutocomplete<T>>, T>>;

export const SingleSelectObjects: Story<(typeof OPTIONS_OBJECTS)[number]> = {
  args: {
    ...TEST_DATA_OBJECTS,
  },
  render: (args) => {
    const [state, setState] = useState(args.value || {});

    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState({} as (typeof OPTIONS_OBJECTS)[number]),
      },
    };

    const handleStateChange: ComponentProps<
      typeof SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>
    >['stateReducer'] = (prevState, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: prevState.highlightedIndex,
            inputValue: '',
          };
        default:
          return changes;
      }
    };

    const onChange: ComponentProps<
      typeof SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>
    >['onChange'] = (newState) => {
      setState(newState as (typeof OPTIONS_OBJECTS)[number]);
    };

    return (
      <div
        style={{
          width: '600px',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>
          {...modifiedArgs}
          onChange={onChange}
          stateReducer={handleStateChange}
          value={state}
        />
      </div>
    );
  },
};

export const SingleSelectStrings: Story<(typeof OPTIONS_STRINGS)[number]> = {
  args: {
    ...TEST_DATA_STRINGS,
  },
  render: (args) => {
    const [state, setState] = useState(args.value || '');

    const modifiedArgs = {
      ...args,
      inputProps: { ...args.inputProps, onClear: () => setState('') },
    };

    const handleStateChange: ComponentProps<
      typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>
    >['stateReducer'] = (prevState, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: prevState.highlightedIndex,
            inputValue: '',
          };
        default:
          return changes;
      }
    };

    const onChange: ComponentProps<
      typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>
    >['onChange'] = (newState) => {
      setState(newState as (typeof OPTIONS_STRINGS)[number]);
    };

    return (
      <div
        style={{
          width: '600px',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <SingleAutocomplete
          {...modifiedArgs}
          onChange={onChange}
          stateReducer={handleStateChange}
          value={state}
        />
      </div>
    );
  },
};

export const SingleSelectWithMenuPortal: Story<string> = {
  args: {
    ...TEST_DATA_STRINGS,
    dropdownMatchInputWidth: true,
    withMenuFlip: true,
    menuPortalRoot: document.body,
    isDropdownMode: true,
  },
  render: (args) => {
    return (
      <div>
        <p style={{ marginBottom: '16px', maxWidth: '400px' }}>
          This example demonstrates menu rendering in a portal to prevent clipping when the
          autocomplete is inside a container with <code>overflow: hidden</code> (e.g., Modal,
          SidePanel).
        </p>
        <div
          style={{
            width: '400px',
            height: '80px',
            overflow: 'hidden',
            border: '2px dashed #aaa',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SingleAutocomplete {...args} />
        </div>
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { SingleAutocomplete } from './singleAutocomplete';
import Downshift from 'downshift';
import { useState } from 'react';

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

const TEST_DATA_OBJECTS = {
  options: OPTIONS_OBJECTS,
  loading: false,
  async: true,
  createWithoutConfirmation: true,
  creatable: false,
  editable: true,
  existingItemsMap: {
    [OPTIONS_OBJECTS[0].id]: true,
  },
  parseValueToString: (value: (typeof OPTIONS_OBJECTS)[number]) => {
    return value?.id;
  },
  highlightUnStoredItem: true,
  value: OPTIONS_OBJECTS[0],
  error: '',
  active: true,
  name: 'launchNames',
  touched: true,
  asyncValidating: false,
  minLength: 1,
  placeholder: 'Test placeholder',
  disabled: false,
  mobileDisabled: false,
  inputProps: {
    clearable: true,
  },
  maxLength: null,
  customClass: '',
  getItemValidationErrorType: null,
  parseInputValueFn: null,
  dataAutomationId: '',
  clearable: true,
  variant: 'light',
  // renderOption: (item, index, isNew, getItemProps) => {
  //   return (
  //     <div style={{ backgroundColor: 'red' }} {...getItemProps({ item, index })}>
  //       {item.name}
  //     </div>
  //   );
  // },
};

const TEST_DATA_STRINGS = {
  options: OPTIONS_STRINGS,
  loading: false,
  async: true,
  createWithoutConfirmation: true,
  creatable: false,
  editable: true,
  existingItemsMap: {
    'Demo Api Tests': true,
  },
  parseValueToString: (value: string) => {
    return value;
  },
  highlightUnStoredItem: true,
  value: OPTIONS_STRINGS[0],
  error: '',
  active: true,
  name: 'launchNames',
  touched: true,
  asyncValidating: false,
  minLength: 1,
  placeholder: 'Test placeholder',
  disabled: false,
  mobileDisabled: false,
  inputProps: {
    clearable: true,
  },
  maxLength: null,
  customClass: '',
  getItemValidationErrorType: null,
  parseInputValueFn: null,
  dataAutomationId: '',
  variant: 'light',
  // renderOption: (item, index, isNew, getItemProps) => {
  //   return (
  //     <div style={{ backgroundColor: 'red' }} {...getItemProps({ item, index })}>
  //       {item}
  //     </div>
  //   );
  // },
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

type Story = StoryObj<typeof SingleAutocomplete>;

export const SingleSelectObjects: Story = {
  args: {
    ...TEST_DATA_OBJECTS,
  } as any,
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(args.value || {});

    const modifiedArgs = {
      ...args,
      inputProps: { ...args.inputProps, onClear: () => setState({}) },
    };

    const handleStateChange = (state, changes) => {
      console.log({ storestate: state, changes });
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: state.highlightedIndex,
            inputValue: '',
          };
        default:
          return changes;
      }
    };

    const x = (newState) => {
      setState(newState);
    };

    return (
      <div style={{ width: '600px', height: '400px', display: 'flex', alignItems: 'center' }}>
        <SingleAutocomplete
          {...modifiedArgs}
          onChange={x}
          stateReducer={handleStateChange}
          value={state}
        />
      </div>
    );
  },
};

export const SingleSelectStrings: Story = {
  args: {
    ...TEST_DATA_STRINGS,
  } as any,
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(args.value || '');

    const modifiedArgs = {
      ...args,
      inputProps: { ...args.inputProps, onClear: () => setState('') },
    };

    const handleStateChange = (state, changes) => {
      console.log({ storestate: state, changes });
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: state.highlightedIndex,
            inputValue: '',
          };
        default:
          return changes;
      }
    };

    const x = (newState) => {
      setState(newState);
    };

    return (
      <div style={{ width: '600px', height: '400px', display: 'flex', alignItems: 'center' }}>
        <SingleAutocomplete
          {...modifiedArgs}
          onChange={x}
          stateReducer={handleStateChange}
          value={state}
        />
      </div>
    );
  },
};

// {
//     "createWithoutConfirmation": true,
//     "creatable": true,
//     "editable": true,
//     "existingItemsMap": {
//         "Demo Api Tests": true
//     },
//     "highlightUnStoredItem": true,
//     "value": [],
//     "error": "",
//     "active": false,
//     "name": "launchNames",
//     "touched": false,
//     "asyncValidating": false,
//     "minLength": 1
// }

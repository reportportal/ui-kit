import type { Meta, StoryObj } from '@storybook/react';

import { MultipleAutocomplete } from './multipleAutocomplete';

const TEST_DATA = {
  options: ['Demo Api Tests'],
  loading: false,
  async: true,
  createWithoutConfirmation: true,
  creatable: true,
  editable: true,
  existingItemsMap: {
    'Demo Api Tests': true,
  },
  highlightUnStoredItem: true,
  value: ['Demo Api Tests'],
  error: '',
  active: true,
  name: 'launchNames',
  touched: true,
  asyncValidating: false,
  minLength: 1,
  placeholder: '',
  disabled: false,
  mobileDisabled: false,
  inputProps: {},
  maxLength: null,
  customClass: '',
  getItemValidationErrorType: null,
  parseInputValueFn: null,
  dataAutomationId: '',
  variant: 'light',
};

const meta: Meta<typeof MultipleAutocomplete> = {
  title: 'Controls/Autocompletes/MultipleAutocomplete',
  component: MultipleAutocomplete,
  parameters: {
    ...TEST_DATA,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MultipleAutocomplete>;

export const Default: Story = {
  render: (args: any) => (
    <div style={{ width: '600px', height: '400px', display: 'flex', alignItems: 'center' }}>
      <MultipleAutocomplete {...args} />
    </div>
  ),
};

export const WithChildren: Story = {
  render: (args: any) => (
    <div style={{ width: '600px', height: '400px', display: 'flex', alignItems: 'center' }}>
      <MultipleAutocomplete {...args} />{' '}
    </div>
  ),
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

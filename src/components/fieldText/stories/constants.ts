import type { ArgTypes } from '@storybook/react';

import { InputType } from '../types';

export const ARG_TYPES: ArgTypes = {
  title: {
    control: 'text',
    description: 'The value for the title attribute.',
    table: { type: { summary: 'string' } },
  },
  value: {
    control: 'text',
    description: 'The value entered in the input field.',
    table: { type: { summary: 'string' } },
  },
  label: {
    control: 'text',
    description: 'The label text associated with the input.',
    table: { type: { summary: 'string' } },
  },
  error: {
    control: 'text',
    description: 'The error message displayed when validation fails.',
    if: { arg: 'touched' },
    table: { type: { summary: 'string' } },
  },
  placeholder: {
    control: 'text',
    description: 'The placeholder text displayed in the input.',
    table: { type: { summary: 'string' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Indicates whether the input is disabled.',
    table: { type: { summary: 'boolean' } },
  },
  clearable: {
    control: 'boolean',
    description: 'Specifies whether a clear button is visible.',
    table: { type: { summary: 'boolean' } },
  },
  touched: {
    control: 'boolean',
    description: 'Indicates whether the input has lost focus.',
    table: { type: { summary: 'boolean' } },
  },
  defaultWidth: {
    control: 'boolean',
    description: 'Specifies if the input has a default width.',
    table: { type: { summary: 'boolean' } },
  },
  isRequired: {
    control: 'boolean',
    description: 'Indicates whether the input is required.',
    table: { type: { summary: 'boolean' } },
  },
  collapsible: {
    control: 'boolean',
    description: 'Specifies if the input is collapsible.',
    table: { type: { summary: 'boolean' } },
  },
  loading: { control: 'boolean', table: { type: { summary: 'boolean' } } },
  type: {
    options: [InputType.TEXT, InputType.PASSWORD, InputType.EMAIL],
    control: 'radio',
    table: { type: { summary: 'string' } },
  },
};

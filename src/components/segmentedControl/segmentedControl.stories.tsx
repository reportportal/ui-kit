/*!
 * Copyright 2026 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './segmentedControl';
import { PlusIcon } from '@components/icons';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: 'Callback fired when a non-selected, non-disabled option is clicked',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make control take full available width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  args: {
    options: [
      { value: 'new', label: 'Save as new', selected: true },
      { value: 'update', label: 'Update existing filter' },
    ],
  },
};

export const ThreeOptions: Story = {
  args: {
    options: [
      { value: 'list', label: 'List', selected: true },
      { value: 'grid', label: 'Grid' },
      { value: 'table', label: 'Table' },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    options: [
      { value: 'new', label: 'Save as new', selected: true },
      { value: 'update', label: 'Update existing filter' },
    ],
    fullWidth: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'new', label: 'Save as new', selected: true },
      { value: 'update', label: 'Update existing filter', disabled: true },
    ],
  },
};

export const AllDisabled: Story = {
  args: {
    options: [
      { value: 'new', label: 'Save as new', selected: true, disabled: true },
      { value: 'update', label: 'Update existing filter', disabled: true },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    options: [
      { value: 'new', label: 'Save as new', icon: <PlusIcon />, selected: true },
      { value: 'update', label: 'Update existing filter', icon: <PlusIcon /> },
    ],
  },
};

export const EqualWidth: Story = {
  args: {
    options: [
      { value: 'new', label: 'Save as new', selected: true, className: 'equal-width-button' },
      { value: 'update', label: 'Update existing filter', className: 'equal-width-button' },
    ],
    fullWidth: true,
  },
  render: (args) => (
    <>
      <style>{`
        .equal-width-button {
          flex: 1;
          min-width: 0;
        }
      `}</style>
      <div style={{ width: '368px' }}>
        <SegmentedControl {...args} />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'With fullWidth prop and custom className on options, both buttons have equal width despite different text lengths.',
      },
    },
  },
};

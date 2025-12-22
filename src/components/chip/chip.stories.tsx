/*
 * Copyright 2025 EPAM Systems
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
import { Chip } from './chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'warning', 'link'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'key : value',
    variant: 'default',
  },
};

export const Error: Story = {
  args: {
    children: 'invalid@email.com',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    children: 'user@email.com',
    variant: 'warning',
  },
};

export const WithRemove: Story = {
  args: {
    children: 'key : value',
    variant: 'default',
    onRemove: () => console.log('Remove clicked!'),
  },
};

export const Link: Story = {
  args: {
    children: 'JIRA-123',
    variant: 'link',
    link: '#',
  },
};

export const LinkWithRemove: Story = {
  args: {
    children: 'JIRA-456',
    variant: 'link',
    link: '#',
    onRemove: () => console.log('Remove clicked!'),
  },
};

export const Clickable: Story = {
  args: {
    children: 'Click me',
    variant: 'default',
    onClick: () => console.log('Chip clicked!'),
  },
};

export const WithMaxWidth: Story = {
  args: {
    children: 'Very long chip text that should be truncated',
    variant: 'default',
    maxWidth: 150,
    title: 'Very long chip text that should be truncated',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Chip',
    variant: 'default',
    disabled: true,
    onClick: () => console.log('Should not fire'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Chip variant="default" onClick={() => {}}>
        Default
      </Chip>
      <Chip variant="error" onClick={() => {}}>
        Error
      </Chip>
      <Chip variant="warning" onClick={() => {}}>
        Warning
      </Chip>
      <Chip variant="link" link="#" onClick={() => {}}>
        Link
      </Chip>
      <Chip variant="default" onClick={() => {}} onRemove={() => {}}>
        With Remove
      </Chip>
    </div>
  ),
};

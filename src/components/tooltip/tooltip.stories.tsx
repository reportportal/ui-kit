/*
 * Copyright 2024 EPAM Systems
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

import { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './tooltip';

const Hello: FC<ContentProps> = ({ isTooltipOpen }) => (
  <div style={{ width: '150px', height: '20px' }}>
    Hello, tooltip is {isTooltipOpen ? 'opened' : 'closed'}
  </div>
);
interface ContentProps {
  isTooltipOpen?: boolean;
}
const Content = () => <div style={{ width: '100px', height: '100px' }}>Hello!</div>;

const meta: Meta<typeof Tooltip> = {
  title: 'Modals & Notification/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const div = document.createElement('div');
div.id = 'tooltip-root';
document.body.appendChild(div);

export const Default: Story = {
  args: {},
  render: () => (
    <Tooltip content={<Content />}>
      <Hello />
    </Tooltip>
  ),
};

export const WithDocumentId: Story = {
  args: {},
  render: () => (
    <div
      style={{
        width: 120,
        height: 200,
        border: '1px solid gray',
        overflow: 'hidden',
      }}
    >
      <Tooltip content={<Content />} portalRoot={div} isFloating={false} placement={'right'}>
        <Hello />
      </Tooltip>
    </div>
  ),
};

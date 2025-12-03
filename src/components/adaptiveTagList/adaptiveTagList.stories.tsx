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

import { AdaptiveTagList } from './adaptiveTagList';

const meta: Meta<typeof AdaptiveTagList> = {
  title: 'Components/AdaptiveTagList',
  component: AdaptiveTagList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AdaptiveTagList>;

const sampleTags = [
  'authentication',
  'security',
  'login',
  'user-management',
  'api',
  'database',
  'frontend',
  'backend',
  'testing',
  'deployment',
];

const shortTagList = ['bug', 'critical', 'frontend'];

export const Default = {
  args: {
    tags: sampleTags,
  },
} satisfies Story;

export const WithFewTags = {
  args: {
    tags: shortTagList,
  },
} satisfies Story;

export const NoTags = {
  args: {
    tags: [],
  },
} satisfies Story;

export const NoTagsWithCustomMessage = {
  args: {
    tags: [],
    noTagsMessage: 'Please add some tags',
  },
} satisfies Story;

export const EditableWithRemoveHandler = {
  args: {
    tags: sampleTags,
    onRemoveTag: (tag: string) => {
      console.log('Remove tag:', tag);
    },
  },
} satisfies Story;

export const ShowAllView = {
  args: {
    tags: sampleTags,
    isShowAllView: true,
    defaultVisibleLines: 2,
  },
} satisfies Story;

export const ShowAllViewEditable = {
  args: {
    tags: sampleTags,
    isShowAllView: true,
    defaultVisibleLines: 3,
    onRemoveTag: (tag: string) => {
      console.log('Remove tag:', tag);
    },
  },
} satisfies Story;

export const ManyTags = {
  args: {
    tags: [
      'tag1',
      'tag2',
      'tag3',
      'tag4',
      'tag5',
      'tag6',
      'tag7',
      'tag8',
      'tag9',
      'tag10',
      'tag11',
      'tag12',
      'tag13',
      'tag14',
      'tag15',
      'tag16',
      'tag17',
      'tag18',
      'tag19',
      'tag20',
    ],
  },
} satisfies Story;

export const CustomTexts = {
  args: {
    tags: sampleTags,
    isShowAllView: true,
    defaultVisibleLines: 2,
    showAllText: 'Expand all tags',
    hideAllText: 'Collapse all tags',
    showLessText: 'Show fewer tags',
  },
} satisfies Story;

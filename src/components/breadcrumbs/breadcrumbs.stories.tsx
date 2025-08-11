import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './breadcrumbs';
import { TreeDescriptor } from './types';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const descriptors = [
  {
    title: 'Level 1',
    link: { pathname: '/level-1' },
  },
  {
    title: 'Level 2',
    link: { pathname: '/level-1/level-2' },
  },
  {
    title: 'Level 3',
    link: { pathname: '/level-1/level-2/level-3' },
  },
  {
    title: 'Level 4',
    link: { pathname: '/level-1/level-2/level-3/level-4' },
  },
  {
    title: 'Level 5',
    link: { pathname: '/level-1/level-2/level-3/level-4/level-5' },
  },
  {
    title: 'Level 6',
    link: { pathname: '/level-1/level-2/level-3/level-4/level-5/level-6' },
  },
  {
    title: 'Level 7',
    link: { pathname: '/level-1/level-2/level-3/level-4/level-5/level-6/level-7' },
  },
  {
    title: 'Level 8',
    link: { pathname: '/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8' },
  },
  {
    title: 'Level 9',
    link: { pathname: '/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9' },
  },
  {
    title: 'Level 10',
    link: {
      pathname: '/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10',
    },
  },
  {
    title: 'Level 11',
    link: {
      pathname:
        '/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10/level-11',
    },
  },
  {
    title: 'Level 12',
    link: {
      pathname:
        '/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10/level-11/level-12',
    },
  },
];

export const SingleBreadcrumb: Story = {
  args: {
    descriptors: [descriptors[0]],
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a single breadcrumb for the current location.',
      },
    },
  },
};

export const BackButton: Story = {
  args: {
    descriptors: [
      {
        title: 'Back',
        link: { pathname: '/previous-page' },
        onClick: () => console.log('Back clicked'),
      },
    ],
    isBackButton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Displays a back button with a left-pointing arrow. Use this when you want to provide navigation back to a previous page.',
      },
    },
  },
};

export const ThreeBreadcrumbs: Story = {
  args: {
    descriptors: descriptors.slice(0, 3),
  },
};

export const FiveBreadcrumbs: Story = {
  args: {
    descriptors: descriptors.slice(0, 5),
  },
};

export const TenBreadcrumbs: Story = {
  args: {
    descriptors: descriptors.slice(0, 10),
  },
};

export const LongTitles: Story = {
  args: {
    descriptors: [
      {
        title: 'Very Long Home Page Title That Exceeds Normal Length',
        link: { pathname: '/' },
      },
      {
        title: 'Another Extremely Long Section Name That Will Be Truncated',
        link: { pathname: '/section' },
      },
      {
        title: 'Section Alpha with Very Long Name',
        link: { pathname: '/section/alpha' },
      },
      {
        title: 'Items Section with Extended Title',
        link: { pathname: '/section/alpha/items' },
      },
      {
        title: 'Item #12345 with Additional Context Information',
        link: { pathname: '/section/alpha/items/12345' },
      },
      {
        title: 'Details Management Interface',
        link: { pathname: '/section/alpha/items/12345/details' },
      },
    ],
  },
};

const treeData: TreeDescriptor[] = [
  {
    title: 'All Categories',
    link: { pathname: '/categories' },
    children: [
      {
        title: 'Group A',
        link: { pathname: '/categories/group-a' },
        children: [
          {
            title: 'Item A1',
            link: { pathname: '/categories/item-a1' },
            onClick: () => console.log('Item A1 clicked'),
          },
          {
            title: 'Item A2',
            link: { pathname: '/categories/item-a2' },
            onClick: () => console.log('Item A2 clicked'),
          },
        ],
      },
      {
        title: 'Group B',
        link: { pathname: '/categories/group-b' },
        children: [
          {
            title: 'Item B1',
            link: { pathname: '/categories/item-b1' },
            onClick: () => console.log('Item B1 clicked'),
          },
          {
            title: 'Item B2',
            link: { pathname: '/categories/item-b2' },
            onClick: () => console.log('Item B2 clicked'),
          },
        ],
      },
    ],
  },
];

export const WithTreeMenu: Story = {
  args: {
    descriptors: descriptors.slice(0, 3),
    tree: treeData,
  },
};

export const LongTitlesWithTree: Story = {
  args: {
    descriptors: [
      {
        title: 'Very Long Home Page Title That Exceeds Normal Length and Should Be Truncated',
        link: { pathname: '/' },
        onClick: () => console.log('Home clicked'),
      },
      {
        title: 'Another Extremely Long Section Name That Will Be Truncated Due to Length',
        link: { pathname: '/section' },
        onClick: () => console.log('Section clicked'),
      },
      {
        title: 'Section Alpha with Very Long Name That Exceeds Normal Limits',
        link: { pathname: '/section/alpha' },
        onClick: () => console.log('Section Alpha clicked'),
      },
      {
        title: 'Items Section with Extended Title That Needs Truncation',
        link: { pathname: '/section/alpha/items' },
        onClick: () => console.log('Items clicked'),
      },
      {
        title: 'Item #12345 with Additional Context Information and Long Description',
        link: { pathname: '/section/alpha/items/12345' },
        onClick: () => console.log('Item #12345 clicked'),
      },
      {
        title: 'Details Management Interface with Extended Functionality',
        link: { pathname: '/section/alpha/items/12345/details' },
        onClick: () => console.log('Details clicked'),
      },
      {
        title: 'Detail #789 with Comprehensive Information and Metadata',
        link: { pathname: '/section/alpha/items/12345/details/789' },
        onClick: () => console.log('Detail #789 clicked'),
      },
      {
        title: 'Sub Items with Extended Configuration and Advanced Settings',
        link: { pathname: '/section/alpha/items/12345/details/789/sub-items' },
        onClick: () => console.log('Sub Items clicked'),
      },
      {
        title: 'Sub Item #1 with Implementation Details and Technical Specifications',
        link: { pathname: '/section/alpha/items/12345/details/789/sub-items/1' },
        onClick: () => console.log('Sub Item #1 clicked'),
      },
      {
        title: 'Current Sub Item Status with Real-time Data and Monitoring Information',
        link: { pathname: '/section/alpha/items/12345/details/789/sub-items/1/current' },
        onClick: () => console.log('Current Sub Item clicked'),
      },
    ],
    tree: treeData,
  },
};

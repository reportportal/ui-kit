import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { PlusIcon, EditIcon, DeleteIcon, SearchIcon, MinusIcon } from '../icons';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
} satisfies Story;

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
} satisfies Story;

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
} satisfies Story;

export const Text = {
  args: {
    variant: 'text',
    children: 'Text',
  },
} satisfies Story;

export const GhostDanger = {
  args: {
    variant: 'ghost-danger',
    children: 'Ghost Danger',
  },
} satisfies Story;

export const TextDanger = {
  args: {
    variant: 'text-danger',
    children: 'Text Danger',
  },
} satisfies Story;

export const WithLeftIcon = {
  args: {
    variant: 'primary',
    children: 'Add Item',
    icon: <PlusIcon />,
    iconPlace: 'start',
  },
} satisfies Story;

export const WithRightIcon = {
  args: {
    variant: 'ghost',
    children: 'Edit',
    icon: <EditIcon />,
    iconPlace: 'end',
  },
} satisfies Story;

export const DangerWithIcon = {
  args: {
    variant: 'danger',
    children: 'Delete',
    icon: <DeleteIcon />,
    iconPlace: 'start',
  },
} satisfies Story;

export const TextWithIcon = {
  args: {
    variant: 'text',
    children: 'Search',
    icon: <SearchIcon />,
    iconPlace: 'end',
  },
} satisfies Story;

export const GhostDangerWithIcon = {
  args: {
    variant: 'ghost-danger',
    children: 'Remove',
    icon: <DeleteIcon />,
    iconPlace: 'start',
  },
} satisfies Story;

export const TextDangerWithIcon = {
  args: {
    variant: 'text-danger',
    children: 'Remove Item',
    icon: <MinusIcon />,
    iconPlace: 'end',
  },
} satisfies Story;

import type { Meta, StoryObj } from '@storybook/react';

import { BaseIconButton } from '@components/baseIconButton/baseIconButton';
import * as icons from './index';
import styles from './icons.stories.module.scss';

const meta: Meta<typeof BaseIconButton> = {
  title: 'Icons/Icons',
  component: BaseIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseIconButton>;

export const IconsGrid: Story = {
  render: () => {
    const handleCopyName = (name: string) => {
      navigator.clipboard.writeText(name);
    };

    return (
      <div className={styles.grid}>
        {Object.entries(icons).map(([name, Icon]) => (
          <div
            key={name}
            className={styles['icon-item']}
            onClick={() => handleCopyName(name)}
            title={`Click to copy: ${name}`}
          >
            <BaseIconButton>
              <Icon />
            </BaseIconButton>
            <div className={styles['icon-name']}>{name}</div>
          </div>
        ))}
      </div>
    );
  },
};

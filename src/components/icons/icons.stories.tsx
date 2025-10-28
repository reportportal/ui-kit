import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

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

const IconsGridComponent = () => {
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleCopyName = async (name: string) => {
    await navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className={styles.grid}>
      {copiedName && (
        <div role="alert" className={styles['copy-notification']}>
          Copied: {copiedName}
        </div>
      )}
      {Object.entries(icons).map(([name, Icon]) => (
        <div
          key={name}
          className={styles['icon-item']}
          onClick={() => handleCopyName(name)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCopyName(name);
            }
          }}
          aria-label={`Copy ${name} icon name`}
          title={`Click to copy icon name: ${name}`}
          role="button"
        >
          <BaseIconButton>
            <Icon />
          </BaseIconButton>
          <div className={styles['icon-name']}>{name}</div>
        </div>
      ))}
    </div>
  );
};

export const IconsGrid: Story = {
  render: () => <IconsGridComponent />,
};

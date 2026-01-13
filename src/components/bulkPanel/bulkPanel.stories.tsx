import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BulkPanel } from './bulkPanel';
import { BulkPanelItem } from './types';

const meta: Meta<typeof BulkPanel> = {
  title: 'Navigation/BulkPanel',
  component: BulkPanel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BulkPanel>;

const labels = [
  'Short test',
  'VeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongWordWithoutSpaces',
  'Normal test case name',
  'ThisIsAnExtremelyLongLabelWithNoSpacesAtAllToTestEllipsisBehaviorInTheChipComponent',
  'Another short one',
  'SuperMegaUltraLongTestExecutionNameThatShouldDefinitelyTriggerEllipsisInTheUIComponent',
];

const generateItems = (count: number): BulkPanelItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    label: labels[i % labels.length],
  }));

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(2));

    const handleRemoveItem = (id: string | number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearSelection = () => {
      setItems([]);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'var(--rp-ui-base-bg-200)',
        }}
      >
        <div style={{ flex: 1, padding: 24 }}>
          <p>Click the chevron to expand the panel and see selected items.</p>
        </div>
        <div style={{ position: 'sticky', bottom: 0 }}>
          <BulkPanel
            items={items}
            onRemoveItem={handleRemoveItem}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>
    );
  },
};

export const WithManyItems: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(48));

    const handleRemoveItem = (id: string | number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearSelection = () => {
      setItems([]);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'var(--rp-ui-base-bg-200)',
        }}
      >
        <div style={{ flex: 1, padding: 24 }}>
          <p>Panel with many items - scrollable content when expanded.</p>
        </div>
        <div style={{ position: 'sticky', bottom: 0 }}>
          <BulkPanel
            items={items}
            onRemoveItem={handleRemoveItem}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>
    );
  },
};

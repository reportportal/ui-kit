import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BulkPanel } from './bulkPanel';
import { BulkPanelAction, BulkPanelItem } from './types';

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

export const WithActions: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(5));

    const handleRemoveItem = (id: string | number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearSelection = () => {
      setItems([]);
    };

    const actions: BulkPanelAction[] = [
      {
        label: 'Edit',
        variant: 'ghost',
        // No onValidate - all items are eligible, executes immediately
        onProceed: (eligibleItems) => {
          console.log('Edit proceed with items:', eligibleItems);
          alert(`Editing ${eligibleItems.length} items`);
        },
      },
      {
        label: 'Delete',
        variant: 'danger',
        // No onValidate - all items are eligible, executes immediately
        onProceed: (eligibleItems) => {
          console.log('Delete proceed with items:', eligibleItems);
          alert(`Deleting ${eligibleItems.length} items`);
          setItems((prev) => prev.filter((item) => !eligibleItems.some((e) => e.id === item.id)));
        },
      },
    ];

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
          <p>Panel with action buttons. All items are eligible - actions execute immediately.</p>
        </div>
        <div style={{ position: 'sticky', bottom: 0 }}>
          <BulkPanel
            items={items}
            actions={actions}
            onRemoveItem={handleRemoveItem}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>([
      { id: 1, label: 'Regular item 1' },
      { id: 2, label: 'Regular item 2' },
      { id: 3, label: 'Locked item 1' },
      { id: 4, label: 'Locked item 2' },
      { id: 5, label: 'Regular item 3' },
      { id: 6, label: 'Read-only item' },
    ]);

    const handleRemoveItem = (id: string | number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearSelection = () => {
      setItems([]);
    };

    const lockedIds = new Set([3, 4]);
    const readOnlyIds = new Set([6]);

    const actions: BulkPanelAction[] = [
      {
        label: 'Edit',
        variant: 'ghost',
        // onValidate returns INELIGIBLE items
        onValidate: (allItems) => {
          console.log('Edit validation for', allItems.length, 'items');
          // Read-only items cannot be edited
          return allItems
            .filter((item) => readOnlyIds.has(Number(item.id)))
            .map((item) => ({ ...item, tooltipContent: 'This item is read-only' }));
        },
        onProceed: (eligibleItems) => {
          alert(`Editing ${eligibleItems.length} items`);
        },
      },
      {
        label: 'Delete',
        variant: 'danger',
        // onValidate returns INELIGIBLE items
        onValidate: (allItems) => {
          console.log('Delete validation for', allItems.length, 'items');
          // Locked items cannot be deleted
          return allItems
            .filter((item) => lockedIds.has(Number(item.id)))
            .map((item) => ({
              ...item,
              tooltipContent: 'This item is locked and cannot be deleted',
            }));
        },
        onProceed: (eligibleItems) => {
          alert(`Deleting ${eligibleItems.length} items`);
          setItems((prev) => prev.filter((item) => !eligibleItems.some((e) => e.id === item.id)));
        },
      },
    ];

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
          <p>
            Click Delete - shows validation mode because items 3,4 are locked.
            <br />
            Click Edit - shows validation mode because item 6 is read-only.
          </p>
        </div>
        <div style={{ position: 'sticky', bottom: 0 }}>
          <BulkPanel
            items={items}
            actions={actions}
            onRemoveItem={handleRemoveItem}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>
    );
  },
};

export const AllIneligible: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>([
      { id: 1, label: 'Locked item 1' },
      { id: 2, label: 'Locked item 2' },
      { id: 3, label: 'Locked item 3' },
    ]);

    const handleRemoveItem = (id: string | number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearSelection = () => {
      setItems([]);
    };

    const actions: BulkPanelAction[] = [
      {
        label: 'Delete',
        variant: 'danger',
        // All items are ineligible - Proceed button won't be shown
        onValidate: (allItems) =>
          allItems.map((item) => ({
            ...item,
            tooltipContent: 'This item is locked',
          })),
        onProceed: () => {
          // Won't be called
        },
      },
    ];

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
          <p>
            All items are ineligible. Clicking Delete shows validation mode without Proceed button.
          </p>
        </div>
        <div style={{ position: 'sticky', bottom: 0 }}>
          <BulkPanel
            items={items}
            actions={actions}
            onRemoveItem={handleRemoveItem}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>
    );
  },
};

export const WithInfoMessage: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(100));

    const handleRemoveItem = (id: string | number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearSelection = () => {
      setItems([]);
    };

    const actions: BulkPanelAction[] = [
      {
        label: 'Delete',
        variant: 'danger',
        disabled: items.length > 50,
        onProceed: (eligibleItems) => {
          alert(`Deleting ${eligibleItems.length} items`);
        },
      },
      {
        label: 'Edit',
        disabled: items.length > 50,
        onProceed: (eligibleItems) => {
          alert(`Editing ${eligibleItems.length} items`);
        },
      },
      {
        label: 'Change Defect Type',
        onProceed: (eligibleItems) => {
          alert(`Changing defect type for ${eligibleItems.length} items`);
        },
      },
    ];

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
          <p>Default mode with info message about selection limit (350 items selected).</p>
        </div>
        <div style={{ position: 'sticky', bottom: 0 }}>
          <BulkPanel
            items={items}
            actions={actions}
            infoMessage={
              items.length > 50
                ? 'Some bulk actions are disabled due to the 50-item selection limit'
                : undefined
            }
            onRemoveItem={handleRemoveItem}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>
    );
  },
};

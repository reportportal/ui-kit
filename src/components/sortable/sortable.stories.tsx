import { useState, CSSProperties, Ref } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SortableItem } from './sortableItem';
import { SortableList } from './sortableList';
import { DragLayer } from './dragLayer';
import type { SortableItemProps, DragItem } from '@common/types';

const meta: Meta<typeof SortableItem> = {
  title: 'DnD/Sortable',
  component: SortableItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<SortableItemProps>;

interface ListItem {
  id: number;
  name: string;
}

const itemStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  backgroundColor: 'var(--rp-ui-base-bg-000, #fff)',
  border: '1px solid #e1e5e9',
  borderRadius: '4px',
  marginBottom: '8px',
  cursor: 'grab',
};

const dragHandleStyle: CSSProperties = {
  cursor: 'grab',
  color: '#9ca3af',
  display: 'flex',
  alignItems: 'center',
};

const DragHandleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="5" cy="3" r="1.5" />
    <circle cx="11" cy="3" r="1.5" />
    <circle cx="5" cy="8" r="1.5" />
    <circle cx="11" cy="8" r="1.5" />
    <circle cx="5" cy="13" r="1.5" />
    <circle cx="11" cy="13" r="1.5" />
  </svg>
);

export const BasicSortableItem: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);

    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Drag items to reorder
        </h3>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            onDrop={handleDrop}
            isLast={index === items.length - 1}
          >
            <div style={itemStyle}>{item.name}</div>
          </SortableItem>
        ))}
      </div>
    );
  },
};

export const WithDragHandle: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'Drag by handle only' },
      { id: 2, name: 'Click handle to drag' },
      { id: 3, name: 'Third item' },
    ]);

    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Use the handle (⋮⋮) to drag items
        </h3>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            onDrop={handleDrop}
            isLast={index === items.length - 1}
          >
            {({ dragRef }) => (
              <div style={itemStyle}>
                <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                  <DragHandleIcon />
                </span>
                <span>{item.name}</span>
              </div>
            )}
          </SortableItem>
        ))}
      </div>
    );
  },
};

export const UsingSortableList: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'First task' },
      { id: 2, name: 'Second task' },
      { id: 3, name: 'Third task' },
      { id: 4, name: 'Fourth task' },
      { id: 5, name: 'Fifth task' },
    ]);

    return (
      <div style={{ width: '350px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          SortableList Component
        </h3>
        <SortableList
          items={items}
          onReorder={setItems}
          renderItem={(item, _index, dragRef) => (
            <div style={itemStyle}>
              <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                <DragHandleIcon />
              </span>
              <span>{item.name}</span>
            </div>
          )}
        />
      </div>
    );
  },
};

const previewStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 16px',
  backgroundColor: '#fff',
  border: '1px solid #3b82f6',
  borderRadius: '4px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  fontSize: '14px',
  fontWeight: 500,
};

export const WithCustomDragPreview: Story = {
  render: () => {
    const CUSTOM_TYPE = 'CUSTOM_SORTABLE';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([
      { id: 1, name: 'Item with custom preview' },
      { id: 2, name: 'Another draggable item' },
      { id: 3, name: 'Third draggable item' },
    ]);

    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };

    const renderPreview = (dragItem: DragItem) => {
      const item = items.find((i) => i.id === dragItem.id);
      return (
        <div style={previewStyle}>
          <DragHandleIcon />
          <span>{item?.name || 'Unknown'}</span>
        </div>
      );
    };

    return (
      <div style={{ width: '350px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Custom drag preview (styled differently from original)
        </h3>
        <DragLayer type={CUSTOM_TYPE} renderPreview={renderPreview} />
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            type={CUSTOM_TYPE}
            onDrop={handleDrop}
            hideDefaultPreview
            isLast={index === items.length - 1}
          >
            {({ dragRef, isDragging }) => (
              <div style={{ ...itemStyle, opacity: isDragging ? 0.5 : 1 }}>
                <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                  <DragHandleIcon />
                </span>
                <span>{item.name}</span>
              </div>
            )}
          </SortableItem>
        ))}
      </div>
    );
  },
};

export const DisabledState: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items] = useState<ListItem[]>([
      { id: 1, name: 'Cannot drag this' },
      { id: 2, name: 'Also not draggable' },
      { id: 3, name: 'Disabled item' },
    ]);

    const disabledStyle: CSSProperties = {
      ...itemStyle,
      opacity: 0.5,
      cursor: 'not-allowed',
    };

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Disabled sortable items
        </h3>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            isDisabled
            isLast={index === items.length - 1}
          >
            <div style={disabledStyle}>{item.name}</div>
          </SortableItem>
        ))}
      </div>
    );
  },
};

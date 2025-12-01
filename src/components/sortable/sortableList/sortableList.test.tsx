import type { Ref } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithDnd } from '@common/utils/testUtils';

import { SortableList } from './sortableList';

interface TestItem {
  id: number;
  name: string;
}

describe('SortableList', () => {
  const mockItems: TestItem[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const mockRenderItem = (item: TestItem, _index: number, dragRef: Ref<HTMLElement>) => (
    <div data-testid={`item-${item.id}`}>
      <span ref={dragRef as Ref<HTMLSpanElement>}>Handle</span>
      <span>{item.name}</span>
    </div>
  );

  it('should render items with correct content', () => {
    renderWithDnd(
      <SortableList items={mockItems} onReorder={() => {}} renderItem={mockRenderItem} />,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = renderWithDnd(
      <SortableList
        items={mockItems}
        onReorder={() => {}}
        renderItem={mockRenderItem}
        className="custom-list-class"
      />,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-list-class');
  });

  it('should accept onReorder callback', () => {
    const onReorder = vi.fn();

    renderWithDnd(
      <SortableList items={mockItems} onReorder={onReorder} renderItem={mockRenderItem} />,
    );

    expect(onReorder).not.toHaveBeenCalled();
  });

  it('should accept isDisabled prop', () => {
    renderWithDnd(
      <SortableList
        items={mockItems}
        onReorder={() => {}}
        renderItem={mockRenderItem}
        isDisabled
      />,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('should accept custom keyExtractor', () => {
    const keyExtractor = vi.fn((item: TestItem) => `custom-${item.id}`);

    renderWithDnd(
      <SortableList
        items={mockItems}
        onReorder={() => {}}
        renderItem={mockRenderItem}
        keyExtractor={keyExtractor}
      />,
    );

    expect(keyExtractor).toHaveBeenCalledTimes(mockItems.length * 2);
  });

  it('should render empty list without errors', () => {
    const { container } = renderWithDnd(
      <SortableList items={[]} onReorder={() => {}} renderItem={mockRenderItem} />,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.children.length).toBe(0);
  });
});

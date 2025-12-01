import type { Ref } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithDnd } from '@common/utils/testUtils';

import { SortableItem } from './sortableItem';

describe('SortableItem', () => {
  it('should render with children as ReactNode', () => {
    renderWithDnd(
      <SortableItem id={1} index={0}>
        <div data-testid="item-content">Item 1</div>
      </SortableItem>,
    );

    expect(screen.getByTestId('item-content')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('should render with children as render function', () => {
    renderWithDnd(
      <SortableItem id={1} index={0}>
        {({ dragRef }) => (
          <div data-testid="item-content">
            <span ref={dragRef as Ref<HTMLSpanElement>} data-testid="drag-handle">
              Handle
            </span>
            <span>Content</span>
          </div>
        )}
      </SortableItem>,
    );

    expect(screen.getByTestId('item-content')).toBeInTheDocument();
    expect(screen.getByTestId('drag-handle')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = renderWithDnd(
      <SortableItem id={1} index={0} className="custom-class">
        <div>Item</div>
      </SortableItem>,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-class');
  });

  it('should accept id and index props', () => {
    renderWithDnd(
      <SortableItem id="test-id" index={5}>
        <div data-testid="item">Item</div>
      </SortableItem>,
    );

    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  it('should accept isDisabled prop', () => {
    renderWithDnd(
      <SortableItem id={1} index={0} isDisabled>
        <div data-testid="item">Disabled Item</div>
      </SortableItem>,
    );

    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  it('should accept onDrop callback', () => {
    const onDrop = vi.fn();

    renderWithDnd(
      <SortableItem id={1} index={0} onDrop={onDrop}>
        <div>Item</div>
      </SortableItem>,
    );

    expect(onDrop).not.toHaveBeenCalled();
  });
});

import { describe, it, expect } from 'vitest';

import { renderWithDnd } from '@common/utils/testUtils';
import type { DragItem } from '@common/types';

import { DragLayer } from './dragLayer';

describe('DragLayer', () => {
  const mockRenderPreview = (item: DragItem) => (
    <div data-testid="drag-preview">Preview for {item.id}</div>
  );

  it('should render without errors', () => {
    const { container } = renderWithDnd(
      <DragLayer type="SORTABLE_ITEM" renderPreview={mockRenderPreview} />,
    );

    expect(container).toBeInTheDocument();
  });

  it('should return null when not dragging', () => {
    const { container } = renderWithDnd(
      <DragLayer type="SORTABLE_ITEM" renderPreview={mockRenderPreview} />,
    );

    expect(container.querySelector('[data-testid="drag-preview"]')).not.toBeInTheDocument();
  });

  it('should accept type prop', () => {
    const { container } = renderWithDnd(
      <DragLayer type="CUSTOM_TYPE" renderPreview={mockRenderPreview} />,
    );

    expect(container).toBeInTheDocument();
  });

  it('should accept renderPreview function', () => {
    const customRenderPreview = (item: DragItem) => (
      <div data-testid="custom-preview">{item.id}</div>
    );

    const { container } = renderWithDnd(
      <DragLayer type="SORTABLE_ITEM" renderPreview={customRenderPreview} />,
    );

    expect(container).toBeInTheDocument();
  });
});

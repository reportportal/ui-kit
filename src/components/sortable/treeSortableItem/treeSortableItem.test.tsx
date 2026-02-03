/*
 * Copyright 2025 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithDnd } from '@common/utils/testUtils';

import { TreeSortableItem } from './treeSortableItem';

describe('TreeSortableItem', () => {
  it('should render with children as ReactNode', () => {
    renderWithDnd(
      <TreeSortableItem id={1} index={0}>
        <div data-testid="item-content">Folder 1</div>
      </TreeSortableItem>,
    );

    expect(screen.getByTestId('item-content')).toBeInTheDocument();
    expect(screen.getByText('Folder 1')).toBeInTheDocument();
  });

  it('should render with children as render function', () => {
    renderWithDnd(
      <TreeSortableItem id={1} index={0}>
        {({ dropPosition }) => (
          <div data-testid="item-content">
            <span data-testid="drop-position">{dropPosition || 'none'}</span>
            <span>Folder Content</span>
          </div>
        )}
      </TreeSortableItem>,
    );

    expect(screen.getByTestId('item-content')).toBeInTheDocument();
    expect(screen.getByTestId('drop-position')).toHaveTextContent('none');
  });

  it('should apply custom className', () => {
    const { container } = renderWithDnd(
      <TreeSortableItem id={1} index={0} className="custom-class">
        <div>Folder</div>
      </TreeSortableItem>,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-class');
  });

  it('should accept id, index, and parentId props', () => {
    renderWithDnd(
      <TreeSortableItem id="folder-1" index={0} parentId="root">
        <div data-testid="item">Folder</div>
      </TreeSortableItem>,
    );

    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  it('should accept isDisabled prop', () => {
    renderWithDnd(
      <TreeSortableItem id={1} index={0} isDisabled>
        <div data-testid="item">Disabled Folder</div>
      </TreeSortableItem>,
    );

    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  it('should accept acceptDrop prop', () => {
    renderWithDnd(
      <TreeSortableItem id={1} index={0} acceptDrop={false}>
        <div data-testid="item">Non-droppable Folder</div>
      </TreeSortableItem>,
    );

    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  it('should accept onDrop callback', () => {
    const onDrop = vi.fn();

    renderWithDnd(
      <TreeSortableItem id={1} index={0} onDrop={onDrop}>
        <div>Folder</div>
      </TreeSortableItem>,
    );

    expect(onDrop).not.toHaveBeenCalled();
  });

  it('should provide isDragging as false initially via render function', () => {
    renderWithDnd(
      <TreeSortableItem id={1} index={0}>
        {({ isDragging }) => (
          <div data-testid="item" data-is-dragging={isDragging}>
            Folder
          </div>
        )}
      </TreeSortableItem>,
    );

    expect(screen.getByTestId('item')).toHaveAttribute('data-is-dragging', 'false');
  });

  it('should provide dropPosition as null initially via render function', () => {
    renderWithDnd(
      <TreeSortableItem id={1} index={0}>
        {({ dropPosition }) => (
          <div data-testid="item" data-drop-position={dropPosition || 'null'}>
            Folder
          </div>
        )}
      </TreeSortableItem>,
    );

    expect(screen.getByTestId('item')).toHaveAttribute('data-drop-position', 'null');
  });
});

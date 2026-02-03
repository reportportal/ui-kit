/*!
 * Copyright 2026 EPAM Systems
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
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { SegmentedControl } from './segmentedControl';
import { SegmentedControlOption } from './types';

const defaultOptions: SegmentedControlOption[] = [
  { value: 'new', label: 'Save as new', selected: true },
  { value: 'update', label: 'Update existing filter' },
];

describe('SegmentedControl', () => {
  describe('Rendering', () => {
    it('renders all options', () => {
      render(<SegmentedControl options={defaultOptions} />);

      expect(screen.getByText('Save as new')).toBeInTheDocument();
      expect(screen.getByText('Update existing filter')).toBeInTheDocument();
    });

    it('marks selected option correctly', () => {
      render(<SegmentedControl options={defaultOptions} />);

      const saveButton = screen.getByRole('button', { name: /save as new/i });
      expect(saveButton.className).toContain('active');
    });

    it('renders with fullWidth prop', () => {
      const { container } = render(<SegmentedControl options={defaultOptions} fullWidth />);

      const control = container.firstChild as HTMLElement;
      expect(control.className).toContain('full-width');
    });
  });

  describe('States', () => {
    it('handles disabled option state', () => {
      const optionsWithDisabled: SegmentedControlOption[] = [
        { value: 'new', label: 'Save as new', selected: true },
        { value: 'update', label: 'Update existing filter', disabled: true },
      ];

      render(<SegmentedControl options={optionsWithDisabled} />);

      const updateButton = screen.getByRole('button', { name: /update/i });
      expect(updateButton).toBeDisabled();
      expect(updateButton.className).toContain('disabled');
    });

    it('applies custom className to button', () => {
      const optionsWithClassName: SegmentedControlOption[] = [
        { value: 'new', label: 'Save as new', selected: true, className: 'custom-class' },
        { value: 'update', label: 'Update existing filter' },
      ];

      render(<SegmentedControl options={optionsWithClassName} />);

      const saveButton = screen.getByRole('button', { name: /save as new/i });
      expect(saveButton.className).toContain('custom-class');
    });
  });

  describe('Interactions', () => {
    it('calls onChange when non-selected option is clicked', async () => {
      const onChange = vi.fn();
      render(<SegmentedControl options={defaultOptions} onChange={onChange} />);

      const updateButton = screen.getByRole('button', { name: /update/i });
      await userEvent.click(updateButton);

      expect(onChange).toHaveBeenCalledWith('update');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('does not call onChange when selected option is clicked', async () => {
      const onChange = vi.fn();
      render(<SegmentedControl options={defaultOptions} onChange={onChange} />);

      const saveButton = screen.getByRole('button', { name: /save as new/i });
      await userEvent.click(saveButton);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('does not call onChange when disabled option is clicked', async () => {
      const onChange = vi.fn();
      const optionsWithDisabled: SegmentedControlOption[] = [
        { value: 'new', label: 'Save as new', selected: true },
        { value: 'update', label: 'Update existing filter', disabled: true },
      ];

      render(<SegmentedControl options={optionsWithDisabled} onChange={onChange} />);

      const updateButton = screen.getByRole('button', { name: /update/i });
      await userEvent.click(updateButton);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('updates selected state when option is clicked', async () => {
      render(<SegmentedControl options={defaultOptions} onChange={vi.fn()} />);

      const updateButton = screen.getByRole('button', { name: /update/i });
      await userEvent.click(updateButton);

      expect(updateButton.className).toContain('active');

      const saveButton = screen.getByRole('button', { name: /save as new/i });
      expect(saveButton.className).not.toContain('active');
    });
  });

  describe('Styling', () => {
    it('applies custom className to container', () => {
      const { container } = render(
        <SegmentedControl options={defaultOptions} className="custom-control" />,
      );

      const control = container.firstChild as HTMLElement;
      expect(control.className).toContain('custom-control');
    });
  });
});

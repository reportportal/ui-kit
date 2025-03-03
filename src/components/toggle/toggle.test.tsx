import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { KeyCodes } from '@common/constants/keyCodes';
import DefaultExport, { Toggle as NamedExport } from './index';
import { Toggle } from './toggle';

describe('Toggle Component', () => {
  describe('Exports', () => {
    it('exports Toggle component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default Toggle component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('named export renders correctly', () => {
      render(<NamedExport value={false} onChange={() => {}} data-testid="named-toggle" />);
      const toggle = screen.getByTestId('named-toggle');
      expect(toggle).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      render(<DefaultExport value={false} onChange={() => {}} data-testid="default-toggle" />);
      const toggle = screen.getByTestId('default-toggle');
      expect(toggle).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      render(
        <div>
          <DefaultExport data-testid="default-toggle" value={false} onChange={() => {}} />
          <NamedExport data-testid="named-toggle" value={false} onChange={() => {}} />
        </div>,
      );

      const defaultToggle = screen.getByTestId('default-toggle');
      const namedToggle = screen.getByTestId('named-toggle');

      expect(defaultToggle).toBeInTheDocument();
      expect(namedToggle).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Toggle value={false} onChange={() => {}} data-testid="toggle-input" />);
      const toggle = screen.getByTestId('toggle-input');

      expect(toggle).toBeInTheDocument();
      expect(toggle).not.toBeChecked();
      expect(toggle).not.toBeDisabled();
    });

    it('renders with children', () => {
      render(
        <Toggle value={false} onChange={() => {}}>
          Toggle Label
        </Toggle>,
      );

      const label = screen.getByText('Toggle Label');
      expect(label).toBeInTheDocument();
      expect(label.className).toContain('children-container');
    });

    it('renders with title attribute', () => {
      render(
        <Toggle
          value={false}
          onChange={() => {}}
          title="Toggle Title"
          data-testid="toggle-input"
        />,
      );
      const toggle = screen.getByTestId('toggle-input');
      const label = toggle.closest('label');

      expect(label).toHaveAttribute('title', 'Toggle Title');
    });
  });

  describe('States', () => {
    it('renders unchecked state correctly', () => {
      render(<Toggle value={false} onChange={() => {}} data-testid="toggle-input" />);
      const toggle = screen.getByTestId('toggle-input');

      expect(toggle).not.toBeChecked();
      const sliderDiv = toggle.nextElementSibling;
      expect(sliderDiv).toHaveAttribute('aria-checked', 'false');
    });

    it('renders checked state correctly', () => {
      render(<Toggle value={true} onChange={() => {}} data-testid="toggle-input" />);
      const toggle = screen.getByTestId('toggle-input');

      expect(toggle).toBeChecked();
      const sliderDiv = toggle.nextElementSibling;
      expect(sliderDiv).toHaveAttribute('aria-checked', 'true');
    });

    it('renders disabled state correctly', () => {
      render(<Toggle value={false} onChange={() => {}} disabled data-testid="toggle-input" />);
      const toggle = screen.getByTestId('toggle-input');
      const label = toggle.closest('label');

      expect(toggle).toBeDisabled();
      expect(label?.className).toContain('disabled');
    });
  });

  describe('Interactions', () => {
    it('handles change events', async () => {
      const handleChange = vi.fn();
      render(<Toggle value={false} onChange={handleChange} data-testid="toggle-input" />);

      const toggle = screen.getByTestId('toggle-input');
      await userEvent.click(toggle);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger change when disabled', async () => {
      const handleChange = vi.fn();
      render(<Toggle value={false} onChange={handleChange} disabled data-testid="toggle-input" />);

      const toggle = screen.getByTestId('toggle-input');
      await userEvent.click(toggle);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('handles Space key press', async () => {
      const handleChange = vi.fn();
      const preventDefaultSpy = vi.fn();

      render(<Toggle value={false} onChange={handleChange} data-testid="toggle-input" />);

      const toggle = screen.getByTestId('toggle-input');
      toggle.focus();

      const keyDownEvent = new KeyboardEvent('keydown', {
        key: ' ',
        code: 'Space',
        keyCode: KeyCodes.SPACE_KEY_CODE,
        bubbles: true,
        cancelable: true,
      });

      Object.defineProperty(keyDownEvent, 'preventDefault', {
        value: preventDefaultSpy,
      });

      toggle.dispatchEvent(keyDownEvent);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('handles Enter key press', async () => {
      const handleChange = vi.fn();
      const preventDefaultSpy = vi.fn();

      render(<Toggle value={false} onChange={handleChange} data-testid="toggle-input" />);

      const toggle = screen.getByTestId('toggle-input');
      toggle.focus();

      const keyDownEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: KeyCodes.ENTER_KEY_CODE,
        bubbles: true,
        cancelable: true,
      });

      Object.defineProperty(keyDownEvent, 'preventDefault', {
        value: preventDefaultSpy,
      });

      toggle.dispatchEvent(keyDownEvent);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      render(
        <Toggle
          value={false}
          onChange={() => {}}
          className="custom-class"
          data-testid="toggle-input"
        />,
      );
      const toggle = screen.getByTestId('toggle-input');
      const label = toggle.closest('label');

      expect(label?.className).toContain('custom-class');
      expect(label?.className).toContain('toggle');
    });

    it('has proper ARIA attributes', () => {
      render(<Toggle value={true} onChange={() => {}} data-testid="toggle-input" />);
      const toggle = screen.getByTestId('toggle-input');
      const sliderDiv = toggle.nextElementSibling;

      expect(sliderDiv).toHaveAttribute('role', 'checkbox');
      expect(sliderDiv).toHaveAttribute('aria-checked', 'true');
    });

    it('applies proper focus styling', async () => {
      render(<Toggle value={false} onChange={() => {}} data-testid="toggle-input" />);
      const toggle = screen.getByTestId('toggle-input');

      toggle.focus();
      expect(document.activeElement).toBe(toggle);
    });

    it('has correct tabIndex when enabled and disabled', () => {
      const { rerender } = render(
        <Toggle value={false} onChange={() => {}} data-testid="toggle-input" />,
      );

      const enabledToggle = screen.getByTestId('toggle-input');
      expect(enabledToggle).toHaveAttribute('tabIndex', '0');

      rerender(<Toggle value={false} onChange={() => {}} disabled data-testid="toggle-input" />);

      const disabledToggle = screen.getByTestId('toggle-input');
      expect(disabledToggle).toHaveAttribute('tabIndex', '-1');
    });
  });
});

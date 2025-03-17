import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { KeyCodes } from '@common/constants/keyCodes';
import DefaultExport, { Checkbox as NamedExport } from './index';
import { Checkbox } from './checkbox';

describe('Checkbox Component', () => {
  describe('Exports', () => {
    it('exports Checkbox component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default Checkbox component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('named export renders correctly', () => {
      render(<NamedExport value={false} onChange={() => {}} data-testid="named-checkbox" />);
      const checkbox = screen.getByTestId('named-checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      render(<DefaultExport value={false} onChange={() => {}} data-testid="default-checkbox" />);
      const checkbox = screen.getByTestId('default-checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      render(
        <div>
          <DefaultExport data-testid="default-checkbox" value={false} onChange={() => {}} />
          <NamedExport data-testid="named-checkbox" value={false} onChange={() => {}} />
        </div>,
      );

      const defaultCheckbox = screen.getByTestId('default-checkbox');
      const namedCheckbox = screen.getByTestId('named-checkbox');

      expect(defaultCheckbox).toBeInTheDocument();
      expect(namedCheckbox).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Checkbox value={false} onChange={() => {}} data-testid="checkbox-input" />);
      const checkbox = screen.getByTestId('checkbox-input');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
      expect(checkbox).not.toBeDisabled();
    });

    it('renders with children', () => {
      render(
        <Checkbox value={false} onChange={() => {}}>
          Checkbox Label
        </Checkbox>,
      );

      const label = screen.getByText('Checkbox Label');
      expect(label).toBeInTheDocument();
      expect(label.className).toContain('children');
    });

    it('renders with title attribute', () => {
      render(
        <Checkbox
          value={false}
          onChange={() => {}}
          title="Checkbox Title"
          data-testid="checkbox-input"
        />,
      );
      const checkbox = screen.getByTestId('checkbox-input');
      const label = checkbox.closest('label');

      expect(label).toHaveAttribute('title', 'Checkbox Title');
      expect(checkbox).toHaveAttribute('title', 'Checkbox Title');
    });
  });

  describe('States', () => {
    it('renders unchecked state correctly', () => {
      render(<Checkbox value={false} onChange={() => {}} data-testid="checkbox-input" />);
      const checkbox = screen.getByTestId('checkbox-input');

      expect(checkbox).not.toBeChecked();
      const controlSpan = checkbox.nextElementSibling;
      expect(controlSpan).toHaveAttribute('aria-checked', 'false');
    });

    it('renders checked state correctly', () => {
      render(<Checkbox value={true} onChange={() => {}} data-testid="checkbox-input" />);
      const checkbox = screen.getByTestId('checkbox-input');

      expect(checkbox).toBeChecked();
      const controlSpan = checkbox.nextElementSibling;
      expect(controlSpan).toHaveAttribute('aria-checked', 'true');
    });

    it('renders disabled state correctly', () => {
      render(<Checkbox value={false} onChange={() => {}} disabled data-testid="checkbox-input" />);
      const checkbox = screen.getByTestId('checkbox-input');
      const label = checkbox.closest('label');

      expect(checkbox).toBeDisabled();
      expect(label?.className).toContain('disabled');
    });

    it('renders partially checked state correctly', () => {
      render(
        <Checkbox
          value={false}
          onChange={() => {}}
          partiallyChecked
          data-testid="checkbox-input"
        />,
      );
      const checkbox = screen.getByTestId('checkbox-input');

      expect(checkbox.className).toContain('partially-checked');
    });
  });

  describe('Interactions', () => {
    it('handles change events', async () => {
      const handleChange = vi.fn();
      render(<Checkbox value={false} onChange={handleChange} data-testid="checkbox-input" />);

      const checkbox = screen.getByTestId('checkbox-input');
      await userEvent.click(checkbox);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger change when disabled', async () => {
      const handleChange = vi.fn();
      render(
        <Checkbox value={false} onChange={handleChange} disabled data-testid="checkbox-input" />,
      );

      const checkbox = screen.getByTestId('checkbox-input');
      await userEvent.click(checkbox);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('handles Space key press with early return', async () => {
      const handleChange = vi.fn();
      const preventDefaultSpy = vi.fn();

      render(<Checkbox value={false} onChange={handleChange} data-testid="checkbox-input" />);

      const checkbox = screen.getByTestId('checkbox-input');
      checkbox.focus();

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

      checkbox.dispatchEvent(keyDownEvent);

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('handles Enter key press', async () => {
      const handleChange = vi.fn();
      render(<Checkbox value={false} onChange={handleChange} data-testid="checkbox-input" />);

      const checkbox = screen.getByTestId('checkbox-input');
      checkbox.focus();

      const keyDownEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: KeyCodes.ENTER_KEY_CODE, // 13
        bubbles: true,
        cancelable: true,
      });

      checkbox.dispatchEvent(keyDownEvent);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      render(
        <Checkbox
          value={false}
          onChange={() => {}}
          className="custom-class"
          data-testid="checkbox-input"
        />,
      );
      const checkbox = screen.getByTestId('checkbox-input');
      const label = checkbox.closest('label');

      expect(label?.className).toContain('custom-class');
      expect(label?.className).toContain('checkbox');
    });

    it('has proper ARIA attributes', () => {
      render(<Checkbox value={true} onChange={() => {}} data-testid="checkbox-input" />);
      const checkbox = screen.getByTestId('checkbox-input');
      const controlSpan = checkbox.nextElementSibling;

      expect(controlSpan).toHaveAttribute('aria-checked', 'true');
    });

    it('applies proper focus styling', async () => {
      render(<Checkbox value={false} onChange={() => {}} data-testid="checkbox-input" />);
      const checkbox = screen.getByTestId('checkbox-input');

      checkbox.focus();
      expect(document.activeElement).toBe(checkbox);
    });
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { KeyCodes } from '@common/constants/keyCodes';
import DefaultExport, { FieldNumber as NamedExport } from './index';
import { FieldNumber } from './fieldNumber';
import { MAX_WIDTH_CH, DEFAULT_WIDTH_CH } from './constants';

vi.mock('@components/icons', () => ({
  PlusIcon: () => <span>+</span>,
  MinusIcon: () => <span>-</span>,
}));

describe('FieldNumber Component', () => {
  describe('Exports', () => {
    it('exports FieldNumber component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default FieldNumber component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('named export renders correctly', () => {
      render(<NamedExport onChange={() => {}} />);
      const inputField = screen.getByRole('spinbutton');
      expect(inputField).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      render(<DefaultExport onChange={() => {}} />);
      const inputField = screen.getByRole('spinbutton');
      expect(inputField).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      render(
        <div>
          <DefaultExport data-testid="default-field" onChange={() => {}} />
          <NamedExport data-testid="named-field" onChange={() => {}} />
        </div>,
      );
      const defaultField = screen.getByTestId('default-field');
      const namedField = screen.getByTestId('named-field');
      expect(defaultField).toBeInTheDocument();
      expect(namedField).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<FieldNumber onChange={() => {}} />);
      const inputField = screen.getByRole('spinbutton');
      const minusButton = screen.getByText('-').closest('button');
      const plusButton = screen.getByText('+').closest('button');
      expect(inputField).toBeInTheDocument();
      expect(inputField).toHaveAttribute('placeholder', '0');
      expect(inputField).not.toBeDisabled();
      expect(minusButton).toBeInTheDocument();
      expect(plusButton).toBeInTheDocument();
    });

    it('renders with custom value', () => {
      render(<FieldNumber onChange={() => {}} value={42} />);
      const inputField = screen.getByRole('spinbutton');
      expect(inputField).toHaveValue(42);
    });

    it('renders with label', () => {
      render(<FieldNumber onChange={() => {}} label="Test Label" />);
      const label = screen.getByText('Test Label');
      expect(label).toBeInTheDocument();
      expect(label.className).toContain('label');
    });

    it('renders with postfix', () => {
      render(<FieldNumber onChange={() => {}} value={5} postfix="%" />);
      const postfixElement = screen.getByText('%');
      expect(postfixElement).toBeInTheDocument();
    });

    it('applies error styles when error prop is provided', () => {
      const { container } = render(<FieldNumber onChange={() => {}} error="Error message" />);
      const inputContainer = container.querySelector('[class*="input-container"]');
      expect(inputContainer?.className).toContain('error');
    });
  });

  describe('States', () => {
    it('handles disabled state', () => {
      render(<FieldNumber onChange={() => {}} disabled />);
      const inputField = screen.getByRole('spinbutton');
      const minusButton = screen.getByText('-').closest('button');
      const plusButton = screen.getByText('+').closest('button');
      expect(inputField).toBeDisabled();
      expect(minusButton).toHaveAttribute('disabled');
      expect(plusButton).toHaveAttribute('disabled');
    });
  });

  describe('Interactions', () => {
    it('calls onChange when input value changes via button clicks (minus)', async () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={5} />);
      const minusButton = screen.getByText('-').closest('button');
      if (minusButton) {
        await userEvent.click(minusButton);
      }
      expect(handleChange).toHaveBeenCalledWith(4);
    });

    it('calls onChange when input value changes via button clicks (plus)', async () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={5} />);
      const plusButton = screen.getByText('+').closest('button');
      if (plusButton) {
        await userEvent.click(plusButton);
      }
      expect(handleChange).toHaveBeenCalledWith(6);
    });

    it('calls onChange with empty string when input is cleared', async () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} min={10} value={42} />);
      const inputField = screen.getByRole('spinbutton');
      await userEvent.clear(inputField);
      expect(handleChange).toHaveBeenCalledWith('');
    });

    it('respects min value constraint when using buttons', async () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={1} min={1} />);
      const minusButton = screen.getByText('-').closest('button');
      if (minusButton) {
        await userEvent.click(minusButton);
      }
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('respects max value constraint when using buttons', async () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={10} max={10} />);
      const plusButton = screen.getByText('+').closest('button');
      if (plusButton) {
        await userEvent.click(plusButton);
      }
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('prevents non-numeric input', async () => {
      const preventDefaultMock = vi.fn();
      render(<FieldNumber onChange={() => {}} />);
      const inputField = screen.getByRole('spinbutton');
      inputField.focus();
      const event = new KeyboardEvent('keydown', {
        key: 'a',
        keyCode: 65,
        bubbles: true,
      });
      Object.defineProperty(event, 'preventDefault', {
        value: preventDefaultMock,
      });
      inputField.dispatchEvent(event);
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
    });

    it('allows numeric key presses', async () => {
      const preventDefaultMock = vi.fn();
      render(<FieldNumber onChange={() => {}} />);
      const inputField = screen.getByRole('spinbutton');
      inputField.focus();
      const event = new KeyboardEvent('keydown', {
        key: '5',
        keyCode: KeyCodes.NUMBER_START_KEY_CODE + 5,
        bubbles: true,
      });
      Object.defineProperty(event, 'preventDefault', {
        value: preventDefaultMock,
      });
      inputField.dispatchEvent(event);
      expect(preventDefaultMock).not.toHaveBeenCalled();
    });

    it('allows navigation key presses', async () => {
      const preventDefaultMock = vi.fn();
      render(<FieldNumber onChange={() => {}} />);
      const inputField = screen.getByRole('spinbutton');
      inputField.focus();
      const arrowEvent = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        keyCode: KeyCodes.ARROW_LEFT_KEY_CODE,
        bubbles: true,
      });
      Object.defineProperty(arrowEvent, 'preventDefault', {
        value: preventDefaultMock,
      });
      inputField.dispatchEvent(arrowEvent);
      expect(preventDefaultMock).not.toHaveBeenCalled();

      const deleteEvent = new KeyboardEvent('keydown', {
        key: 'Delete',
        keyCode: KeyCodes.DELETE_KEY_CODE,
        bubbles: true,
      });
      Object.defineProperty(deleteEvent, 'preventDefault', {
        value: preventDefaultMock,
      });
      inputField.dispatchEvent(deleteEvent);
      expect(preventDefaultMock).not.toHaveBeenCalled();
    });

    it('prevents default when numeric key is pressed with shift key', () => {
      const preventDefaultMock = vi.fn();
      render(<FieldNumber onChange={() => {}} />);
      const inputField = screen.getByRole('spinbutton');
      inputField.focus();
      const event = new KeyboardEvent('keydown', {
        key: '5',
        keyCode: KeyCodes.NUMBER_START_KEY_CODE + 5,
        bubbles: true,
        shiftKey: true,
      });
      Object.defineProperty(event, 'preventDefault', {
        value: preventDefaultMock,
      });
      inputField.dispatchEvent(event);
      expect(preventDefaultMock).toHaveBeenCalled();
    });

    it('calls onFocus when input field is clicked', async () => {
      const focusSpy = vi.spyOn(HTMLInputElement.prototype, 'focus');
      render(<FieldNumber onChange={() => {}} />);
      const inputFieldContainer = screen.getByRole('spinbutton').closest('span');
      if (inputFieldContainer) {
        await userEvent.click(inputFieldContainer);
      }
      expect(focusSpy).toHaveBeenCalled();
      focusSpy.mockRestore();
    });

    it('calls custom onFocus handler when provided', async () => {
      const handleFocus = vi.fn();
      const { container } = render(<FieldNumber onChange={() => {}} onFocus={handleFocus} />);
      const inputContainer = container.querySelector('[class*="input-field"]');
      if (inputContainer) {
        await userEvent.click(inputContainer);
        expect(handleFocus).toHaveBeenCalled();
      }
    });

    it('calls onChange with converted number when manual input is valid', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={0} min={0} max={100} />);
      const inputField = screen.getByRole('spinbutton');
      fireEvent.change(inputField, { target: { value: '42' } });
      expect(handleChange).toHaveBeenCalledWith(42);
    });

    it('removes leading zeros and calls onChange with number', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={0} min={0} max={100} />);
      const inputField = screen.getByRole('spinbutton');
      fireEvent.change(inputField, { target: { value: '0042' } });
      expect(handleChange).toHaveBeenCalledWith(42);
    });

    it('allows manually entered value above max during input', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={15} min={10} max={20} />);
      const inputField = screen.getByRole('spinbutton');
      fireEvent.change(inputField, { target: { value: '25' } });
      expect(handleChange).toHaveBeenCalledWith(25);
    });

    it('allows manually entered value below min during input', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={15} min={10} max={20} />);
      const inputField = screen.getByRole('spinbutton');
      fireEvent.change(inputField, { target: { value: '5' } });
      expect(handleChange).toHaveBeenCalledWith(5);
    });

    it('decrements from a value above max after clamping on first click', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={999999911199} min={0} max={999999999} />);
      const minusButton = screen.getByText('-').closest('button');
      if (minusButton) {
        fireEvent.click(minusButton);
      }
      expect(handleChange).toHaveBeenCalledWith(999999998);
    });

    it('normalizes value to min on blur when below min', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={5} min={10} max={20} />);
      const inputField = screen.getByRole('spinbutton');
      fireEvent.blur(inputField);
      expect(handleChange).toHaveBeenCalledWith(10);
    });

    it('normalizes value to max on blur when above max', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={25} min={10} max={20} />);
      const inputField = screen.getByRole('spinbutton');
      fireEvent.blur(inputField);
      expect(handleChange).toHaveBeenCalledWith(20);
    });

    it('does not change value on blur when within range', () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value={15} min={10} max={20} />);
      const inputField = screen.getByRole('spinbutton');
      fireEvent.blur(inputField);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Input Formatting', () => {
    it('removes leading zeros from input', async () => {
      const { rerender } = render(<FieldNumber onChange={() => {}} value="042" />);
      const inputField = screen.getByRole('spinbutton');
      expect(inputField).toHaveValue(42);
      rerender(<FieldNumber onChange={() => {}} value="007" />);
      expect(inputField).toHaveValue(7);
    });

    it('handles empty input correctly with default min value', async () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} value="5" />);
      const inputField = screen.getByRole('spinbutton');
      await userEvent.clear(inputField);
      expect(handleChange).toHaveBeenCalledWith('');
    });

    it('handles empty input correctly with set min value', async () => {
      const handleChange = vi.fn();
      render(<FieldNumber onChange={handleChange} min={4} value="5" />);
      const inputField = screen.getByRole('spinbutton');
      await userEvent.clear(inputField);
      expect(handleChange).toHaveBeenCalledWith('');
    });

    it('dynamically adjusts input width based on value length', () => {
      render(<FieldNumber onChange={() => {}} value={12345} />);
      const inputField = screen.getByRole('spinbutton');
      expect(inputField).toHaveStyle({ width: '5ch' });
    });

    it('applies postfix only when value is present', () => {
      const { rerender } = render(<FieldNumber onChange={() => {}} postfix="%" />);
      expect(screen.queryByText('%')).not.toBeInTheDocument();
      rerender(<FieldNumber onChange={() => {}} value={42} postfix="%" />);
      expect(screen.getByText('%')).toBeInTheDocument();
    });

    it('applies postfix when value is 0', () => {
      render(<FieldNumber onChange={() => {}} value={0} postfix="%" />);
      expect(screen.getByText('%')).toBeInTheDocument();
    });

    it('computes input width as MAX_WIDTH_CH when value length exceeds MAX_WIDTH_CH', () => {
      const longValue = '1'.repeat(MAX_WIDTH_CH + 5);
      render(<FieldNumber onChange={() => {}} value={longValue} />);
      const inputField = screen.getByRole('spinbutton');
      expect(inputField).toHaveStyle({ width: `${MAX_WIDTH_CH}ch` });
    });

    it('computes default width using DEFAULT_WIDTH_CH when value and placeholder are empty', () => {
      render(<FieldNumber onChange={() => {}} value="" placeholder="" />);
      const inputField = screen.getByRole('spinbutton');
      expect(inputField).toHaveStyle({ width: `${DEFAULT_WIDTH_CH}ch` });
    });
  });
});

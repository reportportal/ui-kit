import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { KeyCodes } from '@common/constants/keyCodes';
import DefaultExport, { Radio as NamedExport, RadioProps } from './index';
import { Radio } from './radio';
import { RadioGroup } from './radioGroup';

describe('Radio Component', () => {
  const defaultOption = {
    value: 'test',
    label: 'Test Option',
    disabled: false,
  };

  describe('Exports', () => {
    it('exports Radio component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default Radio component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('ensures RadioProps type is exported', () => {
      const props: RadioProps = {
        option: defaultOption,
        value: 'test',
        onChange: () => {},
      };
      expect(props).toBeDefined();
    });

    it('named export renders correctly', () => {
      render(<NamedExport option={defaultOption} value="" onChange={() => {}} />);
      const radioContainer = screen.getByText('Test Option').closest('label');
      expect(radioContainer).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      render(<DefaultExport option={defaultOption} value="" onChange={() => {}} />);
      const radioContainer = screen.getByText('Test Option').closest('label');
      expect(radioContainer).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      render(
        <div>
          <DefaultExport
            option={{ ...defaultOption, value: 'default' }}
            value=""
            onChange={() => {}}
            data-testid="default-radio"
          />
          <NamedExport
            option={{ ...defaultOption, value: 'named' }}
            value=""
            onChange={() => {}}
            data-testid="named-radio"
          />
        </div>,
      );

      const defaultRadio = screen.getByTestId('default-radio');
      const namedRadio = screen.getByTestId('named-radio');

      expect(defaultRadio).toBeInTheDocument();
      expect(namedRadio).toBeInTheDocument();

      const defaultToggler = defaultRadio.nextElementSibling;
      const namedToggler = namedRadio.nextElementSibling;

      expect(defaultToggler?.getAttribute('role')).toBe('radio');
      expect(namedToggler?.getAttribute('role')).toBe('radio');
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Radio option={defaultOption} value="" onChange={() => {}} />);
      const label = screen.getByText('Test Option').closest('label');
      const input = screen.getByText('Test Option').parentElement?.querySelector('input');

      expect(input).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(label?.className).not.toContain('_disabled_');
    });

    it('renders with proper label text', () => {
      const option = { ...defaultOption, label: 'Custom Label' };
      render(<Radio option={option} value="" onChange={() => {}} />);

      const label = screen.getByText('Custom Label');
      expect(label).toBeInTheDocument();
      expect(label.className).toContain('children-container');
    });

    it('applies proper ARIA attributes', () => {
      render(<Radio option={defaultOption} value="" onChange={() => {}} />);
      const input = screen.getByText('Test Option').parentElement?.querySelector('input');
      const toggler = input?.nextElementSibling;

      expect(toggler).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('States', () => {
    it('renders unchecked state correctly', () => {
      render(<Radio option={defaultOption} value="other" onChange={() => {}} />);
      const input = screen.getByText('Test Option').parentElement?.querySelector('input');
      const toggler = input?.nextElementSibling;

      expect(toggler).toHaveAttribute('aria-checked', 'false');
      expect(toggler?.className).not.toContain('checked');
    });

    it('renders checked state correctly', () => {
      render(<Radio option={defaultOption} value="test" onChange={() => {}} />);

      const input = screen.getByText('Test Option').parentElement?.querySelector('input');
      const toggler = input?.nextElementSibling;

      expect(toggler).toHaveAttribute('aria-checked', 'true');
      expect(toggler?.className).toContain('checked');
    });

    it('renders disabled state correctly', () => {
      const option = { ...defaultOption, disabled: true };
      render(<Radio option={option} value="" onChange={() => {}} />);

      const label = screen.getByText('Test Option').closest('label');

      expect(label?.className).toContain('_disabled_');

      const input = label?.querySelector('input');
      expect(input).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('handles change events', async () => {
      const handleChange = vi.fn();
      render(<Radio option={defaultOption} value="" onChange={handleChange} />);

      const label = screen.getByText('Test Option').closest('label');
      if (label) {
        await userEvent.click(label);
      }

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger change when disabled', () => {
      const option = { ...defaultOption, disabled: true };
      render(<Radio option={option} value="" onChange={() => {}} />);

      const label = screen.getByText('Test Option').closest('label');
      const input = label?.querySelector('input');

      expect(input).toBeDisabled();
      expect(label?.className).toContain('_disabled_');
      expect(label?.getAttribute('tabindex')).toBe('-1');
    });

    it('handles Space key press', async () => {
      const handleChange = vi.fn();
      render(<Radio option={defaultOption} value="" onChange={handleChange} />);

      const label = screen.getByText('Test Option').closest('label');
      if (label) {
        label.focus();

        const keyDownEvent = new KeyboardEvent('keydown', {
          key: ' ',
          code: 'Space',
          keyCode: KeyCodes.SPACE_KEY_CODE,
          bubbles: true,
          cancelable: true,
        });

        const preventDefaultSpy = vi.fn();
        Object.defineProperty(keyDownEvent, 'preventDefault', {
          value: preventDefaultSpy,
        });

        label.dispatchEvent(keyDownEvent);

        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledTimes(1);
      }
    });

    it('handles Enter key press', async () => {
      const handleChange = vi.fn();
      render(<Radio option={defaultOption} value="" onChange={handleChange} />);

      const label = screen.getByText('Test Option').closest('label');
      if (label) {
        label.focus();

        const keyDownEvent = new KeyboardEvent('keydown', {
          key: 'Enter',
          code: 'Enter',
          keyCode: KeyCodes.ENTER_KEY_CODE,
          bubbles: true,
          cancelable: true,
        });

        const preventDefaultSpy = vi.fn();
        Object.defineProperty(keyDownEvent, 'preventDefault', {
          value: preventDefaultSpy,
        });

        label.dispatchEvent(keyDownEvent);

        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledTimes(1);
      }
    });
  });
});

describe('RadioGroup Component', () => {
  const defaultOptions = [
    { value: 'option1', label: 'Option 1', disabled: false },
    { value: 'option2', label: 'Option 2', disabled: false },
    { value: 'option3', label: 'Option 3', disabled: true },
  ];

  describe('Rendering', () => {
    it('renders all options correctly', () => {
      render(<RadioGroup options={defaultOptions} value="" onChange={() => {}} />);

      const option1 = screen.getByText('Option 1');
      const option2 = screen.getByText('Option 2');
      const option3 = screen.getByText('Option 3');

      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
      expect(option3).toBeInTheDocument();
    });

    it('renders with correct layout', () => {
      const { container } = render(
        <RadioGroup options={defaultOptions} value="" onChange={() => {}} />,
      );

      const group = container.firstChild;
      expect(group).toHaveStyle({ display: 'flex', flexDirection: 'column' });
    });

    it('passes selected value to child radios', () => {
      render(<RadioGroup options={defaultOptions} value="option2" onChange={() => {}} />);

      const labels = screen.getAllByText(/Option \d/);

      expect(labels[0].parentElement?.querySelector('input')?.checked).toBe(false);
      expect(labels[1].parentElement?.querySelector('input')?.checked).toBe(true);
      expect(labels[2].parentElement?.querySelector('input')?.checked).toBe(false);
    });

    it('passes disabled state to child radios', () => {
      render(<RadioGroup options={defaultOptions} value="" onChange={() => {}} />);

      const labels = screen.getAllByText(/Option \d/);

      expect(labels[0].parentElement?.querySelector('input')?.disabled).toBe(false);
      expect(labels[1].parentElement?.querySelector('input')?.disabled).toBe(false);
      expect(labels[2].parentElement?.querySelector('input')?.disabled).toBe(true);

      expect(labels[0].parentElement?.className).not.toContain('_disabled_');
      expect(labels[1].parentElement?.className).not.toContain('_disabled_');
      expect(labels[2].parentElement?.className).toContain('_disabled_');
    });
  });

  describe('Interactions', () => {
    it('handles change events from child radios', async () => {
      const handleChange = vi.fn();
      render(<RadioGroup options={defaultOptions} value="" onChange={handleChange} />);

      const option1 = screen.getByText('Option 1').closest('label');
      if (option1) {
        await userEvent.click(option1);
      }

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger change for disabled options', () => {
      render(<RadioGroup options={defaultOptions} value="" onChange={() => {}} />);

      const option3Label = screen.getByText('Option 3').parentElement;
      const input = option3Label?.querySelector('input');

      expect(input).toBeDisabled();
      expect(option3Label?.className).toContain('_disabled_');
      expect(option3Label?.getAttribute('tabindex')).toBe('-1');
    });
  });
});

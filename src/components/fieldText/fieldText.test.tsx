import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import DefaultExport, { FieldText as NamedExport } from './index';
import { FieldText } from './fieldText';
import { InputType } from './types';

vi.mock('@components/icons', () => ({
  ClearIcon: () => <div data-testid="mock-clear-icon">×</div>,
}));

vi.mock('@components/spinLoader', () => ({
  SpinLoader: () => <div data-testid="mock-spinner">Loading...</div>,
}));

describe('FieldText Component', () => {
  describe('Exports', () => {
    it('exports FieldText component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('object');
    });

    it('exports default FieldText component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('object');
    });

    it('named export renders correctly', () => {
      render(<NamedExport onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');
      expect(inputField).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      render(<DefaultExport onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');
      expect(inputField).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<FieldText onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');

      expect(inputField).toBeInTheDocument();
      expect(inputField).not.toBeDisabled();
      expect(inputField.getAttribute('value')).toBe('');
      expect(inputField.getAttribute('type')).toBe('text');
    });

    it('renders with custom value', () => {
      render(<FieldText value="Test Value" onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');

      expect(inputField).toHaveValue('Test Value');
    });

    it('renders with email type', () => {
      render(<FieldText type={InputType.EMAIL} onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');

      expect(inputField).toHaveAttribute('type', 'email');
    });

    it('applies proper CSS classes', () => {
      const { container } = render(<FieldText className="custom-class" onChange={() => {}} />);
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(fieldContainer?.className).toContain('_field_');
      expect(fieldContainer?.className).toContain('custom-class');
      expect(fieldContainer?.className).toContain('_default-width_');
    });

    it('applies default width class by default', () => {
      const { container } = render(<FieldText onChange={() => {}} />);
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(fieldContainer?.className).toContain('_default-width_');
    });

    it('does not apply default width class when defaultWidth is false', () => {
      const { container } = render(<FieldText defaultWidth={false} onChange={() => {}} />);
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(fieldContainer?.className).not.toContain('_default-width_');
    });

    it('forwards ref to the input element', () => {
      const ref = React.createRef<HTMLInputElement>();

      render(<FieldText ref={ref} onChange={() => {}} />);

      expect(ref.current).not.toBeNull();

      if (ref.current) {
        expect(ref.current.tagName).toBe('INPUT');
        expect(ref.current.type).toBe('text');
      }
    });
  });

  describe('Label', () => {
    it('renders with label', () => {
      render(<FieldText label="Field Label" onChange={() => {}} />);
      const label = screen.getByText('Field Label');

      expect(label).toBeInTheDocument();
      expect(label.tagName.toLowerCase()).toBe('span');
      expect(label.className).toContain('_label_');
    });

    it('renders label with required asterisk', () => {
      render(<FieldText label="Field Label" isRequired onChange={() => {}} />);
      const label = screen.getByText('Field Label');

      const labelContainer = label.parentElement;
      const asterisk = labelContainer?.querySelector('[class*="asterisk"]');

      expect(asterisk).not.toBeNull();
    });

    it('renders correctly without label', () => {
      const { container } = render(<FieldText onChange={() => {}} />);
      const label = container.querySelector('[class*="label"]');

      expect(label).not.toBeInTheDocument();
    });
  });

  describe('Placeholder', () => {
    it('renders with placeholder', () => {
      render(<FieldText placeholder="Enter value" onChange={() => {}} />);
      const placeholder = screen.getByText('Enter value');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder.className).toContain('_placeholder_');
    });

    it('hides placeholder when input has value', () => {
      render(<FieldText placeholder="Enter value" value="Test" onChange={() => {}} />);

      expect(screen.queryByText('Enter value')).not.toBeInTheDocument();
    });

    it('shows required asterisk in placeholder when no label is provided', () => {
      render(<FieldText placeholder="Enter value" isRequired onChange={() => {}} />);

      const placeholder = screen.getByText('Enter value');
      const placeholderParent = placeholder.parentElement;
      const asterisk = placeholderParent?.querySelector('[class*="asterisk"]');

      expect(asterisk).not.toBeNull();
    });
  });

  describe('Error and Help Text', () => {
    it('renders error text when touched and error provided', () => {
      render(<FieldText error="Error message" touched onChange={() => {}} />);
      const errorText = screen.getByText('Error message');

      expect(errorText).toBeInTheDocument();
      expect(errorText.className).toContain('_error-text_');
    });

    it('does not render error text when not touched', () => {
      render(<FieldText error="Error message" touched={false} onChange={() => {}} />);

      expect(screen.queryByText('Error message')).not.toBeInTheDocument();
    });

    it('renders help text when provided', () => {
      render(<FieldText helpText="Help message" onChange={() => {}} />);
      const helpText = screen.getByText('Help message');

      expect(helpText).toBeInTheDocument();
      expect(helpText.className).toContain('_help-text_');
    });

    it('shows error instead of help text when both provided and touched', () => {
      render(
        <FieldText error="Error message" helpText="Help message" touched onChange={() => {}} />,
      );

      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Help message')).not.toBeInTheDocument();
    });

    it('shows both error and help text with hasDoubleMessage', () => {
      render(
        <FieldText
          error="Error message"
          helpText="Help message"
          touched
          hasDoubleMessage
          onChange={() => {}}
        />,
      );

      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.getByText('Help message')).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('handles disabled state', () => {
      const { container } = render(<FieldText disabled onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(inputField).toBeDisabled();
      expect(fieldContainer?.className).toContain('_disabled_');
    });

    it('handles error state', () => {
      const { container } = render(<FieldText error="Error message" touched onChange={() => {}} />);
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(fieldContainer?.className).toContain('_error_');
      expect(fieldContainer?.className).toContain('_touched_');
    });

    it('handles focus state', async () => {
      const { container } = render(<FieldText onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');

      await userEvent.click(inputField);

      const fieldContainer = container.querySelector('[class*="field"]');
      expect(fieldContainer).not.toBeNull();
      // Focus styling is handled by CSS :focus-within, which is hard to test in jsdom
    });

    it('handles collapsed state when collapsible is true', () => {
      const { container } = render(<FieldText collapsible onChange={() => {}} />);
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(fieldContainer?.className).toContain('_collapsed_');
    });

    it('does not collapse when input has value', () => {
      const { container } = render(<FieldText collapsible value="test" onChange={() => {}} />);
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(fieldContainer?.className).not.toContain('_collapsed_');
    });

    it('does not collapse when input is focused', async () => {
      const { container } = render(<FieldText collapsible onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');

      const fieldBeforeFocus = container.querySelector('[class*="field"]');
      expect(fieldBeforeFocus?.className).toContain('_collapsed_');

      await userEvent.click(inputField);
      const fieldAfterFocus = container.querySelector('[class*="field"]');
      expect(fieldAfterFocus?.className).not.toContain('_collapsed_');
    });
  });

  describe('Icons', () => {
    it('renders start icon', () => {
      const startIcon = <span data-testid="start-icon">icon</span>;
      const { container } = render(<FieldText startIcon={startIcon} onChange={() => {}} />);

      const iconContainer = container.querySelector('[class*="icon-container-start"]');
      const icon = screen.getByTestId('start-icon');

      expect(iconContainer).not.toBeNull();
      expect(icon).toBeInTheDocument();
    });

    it('renders end icon', () => {
      const endIcon = <span data-testid="end-icon">icon</span>;
      const { container } = render(<FieldText endIcon={endIcon} onChange={() => {}} />);

      const iconContainer = container.querySelector('[class*="icon-container-end"]');
      const icon = screen.getByTestId('end-icon');

      expect(iconContainer).not.toBeNull();
      expect(icon).toBeInTheDocument();
    });

    it('renders SpinLoader when loading is true', () => {
      render(<FieldText loading onChange={() => {}} />);

      expect(screen.getByTestId('mock-spinner')).toBeInTheDocument();
    });

    it('clicking start icon container focuses the input', async () => {
      const startIcon = <span data-testid="start-icon">icon</span>;
      render(<FieldText startIcon={startIcon} onChange={() => {}} />);

      const startIconElement = screen.getByTestId('start-icon');
      const iconContainer = startIconElement.closest('[class*="icon-container-start"]');

      expect(iconContainer).not.toBeNull();

      if (iconContainer) {
        const inputField = screen.getByRole('textbox');
        const focusSpy = vi.spyOn(inputField, 'focus');

        await userEvent.click(iconContainer);
        expect(focusSpy).toHaveBeenCalledTimes(1);
      }
    });
  });

  describe('Clearable', () => {
    it('does not render clear button when no value', () => {
      const { container } = render(<FieldText clearable value="" onChange={() => {}} />);

      const clearButton = container.querySelector('button[class*="clear-icon"]');
      expect(clearButton).toBeNull();
    });

    it('renders clear button when value exists', () => {
      render(<FieldText clearable value="test value" onChange={() => {}} />);

      const clearIcon = screen.getByTestId('mock-clear-icon');
      const clearButton = clearIcon.closest('button');

      expect(clearButton).not.toBeNull();
      if (clearButton) {
        expect(clearButton.className).toContain('_clear-icon_');
      }
    });

    it('calls onClear when clear button is clicked', async () => {
      const handleClear = vi.fn();
      render(<FieldText clearable value="test value" onChange={() => {}} onClear={handleClear} />);

      const clearIcon = screen.getByTestId('mock-clear-icon');
      const clearButton = clearIcon.closest('button');

      expect(clearButton).not.toBeNull();

      if (clearButton) {
        await userEvent.click(clearButton);
        expect(handleClear).toHaveBeenCalledTimes(1);
        expect(handleClear).toHaveBeenCalledWith('test value');
      }
    });

    it('renders clear icon with different classes when disabled', () => {
      render(<FieldText clearable disabled value="test value" onChange={() => {}} />);

      const clearIcon = screen.getByTestId('mock-clear-icon');
      const clearButton = clearIcon.closest('button');

      expect(clearButton).not.toBeNull();
      if (clearButton) {
        expect(clearButton.className).toContain('_disabled_');
      }
    });
  });

  describe('Interactions', () => {
    it('handles change events', async () => {
      const handleChange = vi.fn();
      render(<FieldText onChange={handleChange} />);

      const inputField = screen.getByRole('textbox');
      await userEvent.type(inputField, 'test');

      expect(handleChange).toHaveBeenCalled();
    });

    it('handles focus events', async () => {
      const handleFocus = vi.fn();
      render(<FieldText onFocus={handleFocus} onChange={() => {}} />);

      const inputField = screen.getByRole('textbox');
      await userEvent.click(inputField);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('handles blur events', async () => {
      const handleBlur = vi.fn();
      render(<FieldText onBlur={handleBlur} onChange={() => {}} />);

      const inputField = screen.getByRole('textbox');
      await userEvent.click(inputField);
      await userEvent.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('updates internal focused state on focus and blur', async () => {
      const { container } = render(<FieldText collapsible onChange={() => {}} />);
      const inputField = screen.getByRole('textbox');

      const fieldBeforeFocus = container.querySelector('[class*="field"]');
      expect(fieldBeforeFocus?.className).toContain('_collapsed_');

      await userEvent.click(inputField);
      const fieldDuringFocus = container.querySelector('[class*="field"]');
      expect(fieldDuringFocus?.className).not.toContain('_collapsed_');

      await userEvent.tab();
      const fieldAfterBlur = container.querySelector('[class*="field"]');
      expect(fieldAfterBlur?.className).toContain('_collapsed_');
    });
  });

  describe('Max Length Display', () => {
    it('renders max length display when maxLengthDisplay is provided', () => {
      const { container } = render(
        <FieldText value="test" maxLengthDisplay={10} onChange={() => {}} />,
      );

      const maxLengthDisplay = container.querySelector('[class*="max-length-display"]');
      expect(maxLengthDisplay).not.toBeNull();
      expect(maxLengthDisplay?.textContent).toContain('4');
      expect(maxLengthDisplay?.textContent).toContain('10');
    });

    it('does not render max length display when maxLengthDisplay is not provided', () => {
      const { container } = render(<FieldText value="test" onChange={() => {}} />);

      const maxLengthDisplay = container.querySelector('[class*="max-length-display"]');
      expect(maxLengthDisplay).toBeNull();
    });

    it('displays correct character count for initial value', () => {
      const { container } = render(
        <FieldText value="test" maxLengthDisplay={10} onChange={() => {}} />,
      );

      const maxLengthDisplay = container.querySelector('[class*="max-length-display"]');
      expect(maxLengthDisplay?.textContent).toBe('4/10');
    });
  });

  describe('Additional Props', () => {
    it('passes additional props to the input element', () => {
      render(
        <FieldText
          onChange={() => {}}
          data-testid="custom-testid"
          maxLength={50}
          aria-label="Test input"
        />,
      );

      const inputField = screen.getByTestId('custom-testid');
      expect(inputField).toBeInTheDocument();
      expect(inputField).toHaveAttribute('maxlength', '50');
      expect(inputField).toHaveAttribute('aria-label', 'Test input');
    });

    it('applies title attribute to the field container', () => {
      const { container } = render(<FieldText title="Field title" onChange={() => {}} />);
      const fieldContainer = container.querySelector('[class*="field"]');

      expect(fieldContainer).toHaveAttribute('title', 'Field title');
    });
  });
});

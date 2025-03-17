import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import DefaultExport, { BaseIconButton as NamedExport, BaseIconButtonProps } from './index';
import { BaseIconButton } from './baseIconButton';

describe('BaseIconButton Component', () => {
  describe('Exports', () => {
    it('exports BaseIconButton component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default BaseIconButton component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('ensures BaseIconButtonProps type is exported', () => {
      const props: BaseIconButtonProps = {
        children: 'Test',
        onClick: () => {},
        disabled: false,
      };
      expect(props).toBeDefined();
    });

    it('named export renders correctly', () => {
      render(<NamedExport data-testid="named-button">Icon</NamedExport>);
      const button = screen.getByTestId('named-button');
      expect(button).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      render(<DefaultExport data-testid="default-button">Icon</DefaultExport>);
      const button = screen.getByTestId('default-button');
      expect(button).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<BaseIconButton data-testid="icon-button">Icon</BaseIconButton>);
      const button = screen.getByTestId('icon-button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'button');
      expect(button).not.toBeDisabled();
      expect(button.textContent).toBe('Icon');
    });

    it('renders with children correctly', () => {
      render(
        <BaseIconButton data-testid="icon-button">
          <span data-testid="icon-child">⭐</span>
        </BaseIconButton>,
      );

      const iconChild = screen.getByTestId('icon-child');
      expect(iconChild).toBeInTheDocument();
      expect(iconChild.textContent).toBe('⭐');
    });

    it('applies proper CSS classes', () => {
      render(<BaseIconButton data-testid="icon-button">Icon</BaseIconButton>);
      const button = screen.getByTestId('icon-button');

      expect(button.className).toContain('base-icon-button');
    });

    it('renders with custom className', () => {
      render(
        <BaseIconButton className="custom-class" data-testid="icon-button">
          Icon
        </BaseIconButton>,
      );
      const button = screen.getByTestId('icon-button');

      expect(button.className).toContain('base-icon-button');
      expect(button.className).toContain('custom-class');
    });
  });

  describe('States', () => {
    it('handles disabled state', () => {
      render(
        <BaseIconButton disabled data-testid="icon-button">
          Icon
        </BaseIconButton>,
      );
      const button = screen.getByTestId('icon-button');

      expect(button).toBeDisabled();
      expect(button.className).toContain('disabled');
    });
  });

  describe('Interactions', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn();
      render(
        <BaseIconButton onClick={handleClick} data-testid="icon-button">
          Icon
        </BaseIconButton>,
      );

      const button = screen.getByTestId('icon-button');
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger click when disabled', async () => {
      const handleClick = vi.fn();
      render(
        <BaseIconButton disabled onClick={handleClick} data-testid="icon-button">
          Icon
        </BaseIconButton>,
      );

      const button = screen.getByTestId('icon-button');
      await userEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has button role by default', () => {
      render(<BaseIconButton data-testid="icon-button">Icon</BaseIconButton>);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });

    it('is keyboard accessible', async () => {
      const handleClick = vi.fn();
      render(
        <BaseIconButton onClick={handleClick} data-testid="icon-button">
          Icon
        </BaseIconButton>,
      );

      const button = screen.getByTestId('icon-button');
      button.focus();
      await userEvent.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});

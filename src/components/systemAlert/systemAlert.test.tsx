import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SystemAlert } from './systemAlert';
import { SystemAlertType } from './types';
import * as SystemAlertIndex from './index';

vi.mock('@components/icons', () => ({
  CloseIcon: () => <div data-testid="close-icon">X</div>,
  ErrorIcon: () => <div data-testid="error-icon">!</div>,
  InfoIcon: () => <div data-testid="info-icon">i</div>,
  SuccessIcon: () => <div data-testid="success-icon">✓</div>,
}));

describe('SystemAlert Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Exports', () => {
    it('exports SystemAlert component as named export', () => {
      expect(SystemAlert).toBeDefined();
      expect(SystemAlert).toBeTruthy();
      expect(typeof SystemAlert).toBe('function');
    });

    it('exports SystemAlert correctly from index file', () => {
      expect(SystemAlertIndex.SystemAlert).toBeDefined();
      expect(SystemAlertIndex.SystemAlert).toBe(SystemAlert);
    });

    it('uses SystemAlertType enum correctly', () => {
      expect(SystemAlertType).toBeDefined();
      expect(SystemAlertType.INFO).toEqual('info');
      expect(SystemAlertType.SUCCESS).toEqual('success');
      expect(SystemAlertType.ERROR).toEqual('error');
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      const handleClose = vi.fn();
      const { container } = render(<SystemAlert title="Test Alert" onClose={handleClose} />);

      const alertElement = container.querySelector('[class*="system-alert"]');

      expect(alertElement).toBeInTheDocument();
      expect(alertElement?.className).toContain('info');
      expect(screen.getByText('Test Alert')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <SystemAlert title="Test Alert" onClose={handleClose} className="custom-class" />,
      );

      const alertElement = container.querySelector('[class*="system-alert"]');

      expect(alertElement?.className).toContain('system-alert');
      expect(alertElement?.className).toContain('custom-class');
    });
  });

  describe('Alert Types', () => {
    it('renders info alert with correct styles and icon', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <SystemAlert title="Info Alert" onClose={handleClose} type={SystemAlertType.INFO} />,
      );

      const alertElement = container.querySelector('[class*="system-alert"]');

      expect(alertElement?.className).toContain('info');
      expect(screen.getByTestId('info-icon')).toBeInTheDocument();
    });

    it('renders success alert with correct styles and icon', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <SystemAlert title="Success Alert" onClose={handleClose} type={SystemAlertType.SUCCESS} />,
      );

      const alertElement = container.querySelector('[class*="system-alert"]');

      expect(alertElement?.className).toContain('success');
      expect(screen.getByTestId('success-icon')).toBeInTheDocument();
    });

    it('renders error alert with correct styles and icon', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <SystemAlert title="Error Alert" onClose={handleClose} type={SystemAlertType.ERROR} />,
      );

      const alertElement = container.querySelector('[class*="system-alert"]');

      expect(alertElement?.className).toContain('error');
      expect(screen.getByTestId('error-icon')).toBeInTheDocument();
    });

    it('uses custom icon when type is not a standard alert type', () => {
      const handleClose = vi.fn();
      const customIcon = <div data-testid="custom-icon">★</div>;

      const customType = 'custom' as SystemAlertType;

      render(
        <SystemAlert
          title="Custom Icon Alert"
          onClose={handleClose}
          icon={customIcon}
          type={customType}
        />,
      );

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('uses type-based icon even when custom icon is provided', () => {
      const handleClose = vi.fn();
      const customIcon = <div data-testid="custom-icon">★</div>;

      render(
        <SystemAlert
          title="Type-based Icon"
          onClose={handleClose}
          icon={customIcon}
          type={SystemAlertType.SUCCESS}
        />,
      );

      expect(screen.getByTestId('success-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('custom-icon')).not.toBeInTheDocument();
    });

    it('renders with default icon when custom icon is null', () => {
      const handleClose = vi.fn();

      render(
        <SystemAlert
          title="Null Icon Alert"
          onClose={handleClose}
          icon={null}
          type={SystemAlertType.INFO}
        />,
      );

      expect(screen.getByTestId('info-icon')).toBeInTheDocument();
    });
  });

  describe('Auto-close behavior', () => {
    it('auto-closes with default duration for info alert', () => {
      const handleClose = vi.fn();
      render(<SystemAlert title="Info Alert" onClose={handleClose} type={SystemAlertType.INFO} />);

      expect(handleClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(3999);
      expect(handleClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(1);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('auto-closes with longer duration for error alert', () => {
      const handleClose = vi.fn();
      render(
        <SystemAlert title="Error Alert" onClose={handleClose} type={SystemAlertType.ERROR} />,
      );

      expect(handleClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(6999);
      expect(handleClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(1);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('auto-closes with custom duration when provided', () => {
      const handleClose = vi.fn();
      render(
        <SystemAlert
          title="Custom Duration"
          onClose={handleClose}
          type={SystemAlertType.INFO}
          duration={2000}
        />,
      );

      expect(handleClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(1999);
      expect(handleClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(1);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('clears timeout on unmount', () => {
      const handleClose = vi.fn();
      const { unmount } = render(<SystemAlert title="Test Alert" onClose={handleClose} />);

      unmount();
      vi.advanceTimersByTime(4000);

      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  describe('Interactions', () => {
    it('calls onClose when close button is clicked', () => {
      const handleClose = vi.fn();
      render(<SystemAlert title="Test Alert" onClose={handleClose} />);

      const closeButton = screen.getByRole('button', { name: /close system alert/i });
      closeButton.click();

      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has accessible close button with aria-label', () => {
      const handleClose = vi.fn();
      render(<SystemAlert title="Test Alert" onClose={handleClose} />);

      const closeButton = screen.getByRole('button', { name: /close system alert/i });

      expect(closeButton).toHaveAttribute('aria-label', 'close system alert');
    });

    it('renders title as heading element for proper document structure', () => {
      const handleClose = vi.fn();
      render(<SystemAlert title="Test Alert" onClose={handleClose} />);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe('Test Alert');
    });
  });
});

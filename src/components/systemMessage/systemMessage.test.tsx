import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DefaultExport, { SystemMessage as NamedExport } from './index';
import { SystemMessage } from './systemMessage';

describe('SystemMessage Component', () => {
  describe('Exports', () => {
    it('exports SystemMessage component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default SystemMessage component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('named export renders correctly', () => {
      const { container } = render(<NamedExport>Test Message</NamedExport>);
      const messageElement = container.querySelector('[class*="system-message"]');
      expect(messageElement).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      const { container } = render(<DefaultExport>Test Message</DefaultExport>);
      const messageElement = container.querySelector('[class*="system-message"]');
      expect(messageElement).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      const { container: container1 } = render(<DefaultExport>Default Export</DefaultExport>);
      const { container: container2 } = render(<NamedExport>Named Export</NamedExport>);

      const defaultMessage = container1.querySelector('[class*="system-message"]');
      const namedMessage = container2.querySelector('[class*="system-message"]');

      expect(defaultMessage?.className).toContain('system-message');
      expect(namedMessage?.className).toContain('system-message');
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<SystemMessage>Default Message</SystemMessage>);
      const messageElement = container.querySelector('[class*="system-message"]');
      const stripesElement = container.querySelector('[class*="stripes-info"]');
      const childrenContainer = container.querySelector('[class*="children"]');

      expect(messageElement).toBeInTheDocument();
      expect(stripesElement).toBeInTheDocument();
      expect(childrenContainer).toBeInTheDocument();
      expect(childrenContainer?.textContent).toBe('Default Message');
    });

    it('renders with header', () => {
      render(<SystemMessage header="Test Header">Message Content</SystemMessage>);

      const header = screen.getByRole('heading');
      expect(header).toBeInTheDocument();
      expect(header.textContent).toBe('Test Header');
      expect(header.className).toContain('message-header-info');
    });

    it('renders with caption', () => {
      render(<SystemMessage caption="Test Caption">Message Content</SystemMessage>);

      const caption = screen.getByText('Test Caption');
      expect(caption).toBeInTheDocument();
      expect(caption.tagName.toLowerCase()).toBe('p');
    });

    it('renders with all content elements', () => {
      render(
        <SystemMessage header="Complete Message" caption="Full description here">
          Main message content
        </SystemMessage>,
      );

      expect(screen.getByRole('heading')).toHaveTextContent('Complete Message');
      expect(screen.getByText('Main message content')).toBeInTheDocument();
      expect(screen.getByText('Full description here')).toBeInTheDocument();
    });
  });

  describe('Modes', () => {
    it('renders info mode correctly', () => {
      const { container } = render(
        <SystemMessage mode="info" header="Info Message">
          Info content
        </SystemMessage>,
      );

      const stripesElement = container.querySelector('[class*="stripes-info"]');
      const header = screen.getByRole('heading');

      expect(stripesElement).toBeInTheDocument();
      expect(header.className).toContain('message-header-info');
    });

    it('renders warning mode correctly', () => {
      const { container } = render(
        <SystemMessage mode="warning" header="Warning Message">
          Warning content
        </SystemMessage>,
      );

      const stripesElement = container.querySelector('[class*="stripes-warning"]');
      const header = screen.getByRole('heading');

      expect(stripesElement).toBeInTheDocument();
      expect(header.className).toContain('message-header-warning');
    });

    it('renders error mode correctly', () => {
      const { container } = render(
        <SystemMessage mode="error" header="Error Message">
          Error content
        </SystemMessage>,
      );

      const stripesElement = container.querySelector('[class*="stripes-error"]');
      const header = screen.getByRole('heading');

      expect(stripesElement).toBeInTheDocument();
      expect(header.className).toContain('message-header-error');
    });

    it('defaults to info mode when no mode is specified', () => {
      const { container } = render(
        <SystemMessage header="Default Mode">Default mode content</SystemMessage>,
      );

      const stripesElement = container.querySelector('[class*="stripes-info"]');
      expect(stripesElement).toBeInTheDocument();
    });
  });

  describe('Width Behavior', () => {
    it('applies default width (100%)', () => {
      const { container } = render(<SystemMessage>Full width</SystemMessage>);
      const messageElement = container.querySelector('[class*="system-message"]');

      expect(messageElement?.className).not.toContain('content-width');
    });

    it('applies content-based width when widthByContent is true', () => {
      const { container } = render(<SystemMessage widthByContent>Content width</SystemMessage>);
      const messageElement = container.querySelector('[class*="system-message"]');

      expect(messageElement?.className).toContain('content-width');
    });
  });

  describe('Children Rendering', () => {
    it('renders complex children correctly', () => {
      render(
        <SystemMessage>
          <div data-testid="complex-child">
            <span>Nested content</span>
          </div>
        </SystemMessage>,
      );

      const complexChild = screen.getByTestId('complex-child');
      expect(complexChild).toBeInTheDocument();
      expect(complexChild.querySelector('span')).toHaveTextContent('Nested content');
    });

    it('renders without children', () => {
      const { container } = render(
        <SystemMessage header="No Children" caption="Just header and caption" />,
      );

      const childrenContainer = container.querySelector('[class*="children"]');
      expect(childrenContainer).toBeInTheDocument();
      expect(childrenContainer?.textContent).toBe('');
    });
  });
});

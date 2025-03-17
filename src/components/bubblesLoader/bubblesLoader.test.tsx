import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DefaultExport, { BubblesLoader as NamedExport } from './index';
import { BubblesLoader } from './bubblesLoader';

describe('BubblesLoader Component', () => {
  describe('Exports', () => {
    it('exports BubblesLoader component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default BubblesLoader component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('named export renders correctly', () => {
      const { container } = render(<NamedExport />);
      const loader = container.firstChild as HTMLElement;
      expect(loader).toBeInTheDocument();
      expect(loader.className).toContain('bubbles-loader');
    });

    it('default export renders correctly', () => {
      const { container } = render(<DefaultExport />);
      const loader = container.firstChild as HTMLElement;
      expect(loader).toBeInTheDocument();
      expect(loader.className).toContain('bubbles-loader');
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      const { container: container1 } = render(<DefaultExport />);
      const defaultLoader = container1.firstChild as HTMLElement;

      const { container: container2 } = render(<NamedExport />);
      const namedLoader = container2.firstChild as HTMLElement;

      expect(defaultLoader).toHaveClass('_bubbles-loader_b103e1');
      expect(namedLoader).toHaveClass('_bubbles-loader_b103e1');
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<BubblesLoader />);
      const loader = container.firstChild as HTMLElement;

      expect(loader).toBeInTheDocument();
      expect(loader.className).toContain('bubbles-loader');
      expect(loader.className).toContain('color-topaz');
    });

    it('renders correct number of bubble elements', () => {
      const { container } = render(<BubblesLoader />);
      const bubbles = container.querySelectorAll('._bubble_b103e1');

      expect(bubbles.length).toBe(7);
    });

    it('applies custom className', () => {
      const { container } = render(<BubblesLoader className="custom-class" />);
      const loader = container.firstChild as HTMLElement;

      expect(loader.className).toContain('bubbles-loader');
      expect(loader.className).toContain('custom-class');
    });
  });

  describe('Customization', () => {
    it('applies different color when specified', () => {
      const { container } = render(<BubblesLoader color="blue" />);
      const loader = container.firstChild as HTMLElement;

      expect(loader.className).toContain('color-blue');
      expect(loader.className).not.toContain('color-topaz');
    });

    it('applies default color when none specified', () => {
      const { container } = render(<BubblesLoader />);
      const loader = container.firstChild as HTMLElement;

      expect(loader.className).toContain('color-topaz');
    });

    it('applies proper color class when color is empty string', () => {
      const { container } = render(<BubblesLoader color="" />);
      const loader = container.firstChild as HTMLElement;

      expect(loader.className).not.toContain('color-');
    });
  });

  describe('Styling', () => {
    it('has proper CSS animation classes on bubbles', () => {
      const { container } = render(<BubblesLoader />);
      const firstBubble = container.querySelector('._bubble_b103e1') as HTMLElement;

      expect(firstBubble).not.toBeNull();
      expect(firstBubble.className).toContain('_bubble_b103e1');
    });
  });
});

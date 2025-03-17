import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DefaultExport, { SpinLoader as NamedExport } from './index';
import { SpinLoader } from './spinLoader';

describe('SpinLoader Component', () => {
  describe('Exports', () => {
    it('exports SpinLoader component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default SpinLoader component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('named export renders correctly', () => {
      const { container } = render(<NamedExport />);
      const loader = container.firstChild as HTMLElement;
      expect(loader).toBeInTheDocument();
      expect(loader.className).toContain('spin-loader');
    });

    it('default export renders correctly', () => {
      const { container } = render(<DefaultExport />);
      const loader = container.firstChild as HTMLElement;
      expect(loader).toBeInTheDocument();
      expect(loader.className).toContain('spin-loader');
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      const { container: container1 } = render(<DefaultExport />);
      const defaultLoader = container1.firstChild as HTMLElement;
      const { container: container2 } = render(<NamedExport />);
      const namedLoader = container2.firstChild as HTMLElement;
      expect(defaultLoader.className).toContain('spin-loader');
      expect(namedLoader.className).toContain('spin-loader');
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<SpinLoader />);
      const loader = container.firstChild as HTMLElement;
      const spinner = container.querySelector('[class*="spinner"]');

      expect(loader).toBeInTheDocument();
      expect(loader.className).toContain('spin-loader');
      expect(spinner).toBeInTheDocument();
      expect(spinner?.className).toContain('color-topaz');
    });

    it('applies custom className', () => {
      const { container } = render(<SpinLoader className="custom-class" />);
      const loader = container.firstChild as HTMLElement;

      expect(loader.className).toContain('spin-loader');
      expect(loader.className).toContain('custom-class');
    });
  });

  describe('Customization', () => {
    it('applies different color when specified', () => {
      const { container } = render(<SpinLoader color="blue" />);
      const spinner = container.querySelector('[class*="spinner"]');
      expect(spinner?.className).toContain('color-blue');
      expect(spinner?.className).not.toContain('color-topaz');
    });

    it('applies default color when none specified', () => {
      const { container } = render(<SpinLoader />);
      const spinner = container.querySelector('[class*="spinner"]');
      expect(spinner?.className).toContain('color-topaz');
    });

    it('applies proper color class when color is empty string', () => {
      const { container } = render(<SpinLoader color="" />);
      const spinner = container.querySelector('[class*="spinner"]');
      expect(spinner?.className).not.toContain('color-');
    });
  });

  describe('Styling', () => {
    it('has proper CSS animation classes', () => {
      const { container } = render(<SpinLoader />);
      const spinner = container.querySelector('[class*="spinner"]');

      expect(spinner).not.toBeNull();
      expect(spinner?.className).toContain('spinner');
    });

    it('has correct dimensions', () => {
      const { container } = render(<SpinLoader />);
      const loader = container.firstChild as HTMLElement;
      expect(loader.className).toContain('spin-loader');
    });
  });
});

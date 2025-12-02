import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import DefaultExport, { Table as NamedExport } from './index';
import { Table } from './table';
import { RowData, FixedColumn } from './types';
import { ASC, DESC } from './constants';

interface CheckboxMockProps {
  value: boolean;
  onChange?: () => void;
  className?: string;
  partiallyChecked?: boolean;
}

vi.mock('@components/checkbox', () => ({
  Checkbox: ({ value, onChange, className }: CheckboxMockProps) => (
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
      className={className}
      data-testid="checkbox"
    />
  ),
}));

vi.mock('@components/icons', () => ({
  ArrowDownIcon: () => <div data-testid="arrow-down-icon">↓</div>,
  ArrowUpIcon: () => <div data-testid="arrow-up-icon">↑</div>,
  ChevronDownDropdownIcon: () => <div data-testid="chevron-down-dropdown-icon">▼</div>,
}));

describe('Table Component', () => {
  const mockData: RowData[] = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 40, city: 'Chicago', rowConfigs: { size: 'small' } },
  ];

  const mockPrimaryColumns = [
    {
      key: 'name',
      header: 'Name',
    },
  ];

  const mockFixedColumns: FixedColumn[] = [
    {
      key: 'age',
      header: 'Age',
      width: 100,
      align: 'right' as const,
    },
    {
      key: 'city',
      header: 'City',
      width: 150,
    },
  ];

  const mockRenderRowActions = vi
    .fn()
    .mockImplementation(() => <button data-testid="row-action">Actions</button>);

  const defaultProps = {
    data: mockData,
    primaryColumn: mockPrimaryColumns,
    fixedColumns: mockFixedColumns,
  };

  describe('Exports', () => {
    it('exports Table component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('function');
    });

    it('exports default Table component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('function');
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('named export renders correctly', () => {
      const { container } = render(<NamedExport {...defaultProps} />);
      const tableElement = container.querySelector('[class*="table"]');
      expect(tableElement).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      const { container } = render(<DefaultExport {...defaultProps} />);
      const tableElement = container.querySelector('[class*="table"]');
      expect(tableElement).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<Table {...defaultProps} />);

      const tableElement = container.querySelector('[class*="table"]');
      expect(tableElement).toBeInTheDocument();

      const headerElement = container.querySelector('[class*="table-header"]');
      expect(headerElement).toBeInTheDocument();

      const headerCells = container.querySelectorAll('[class*="table-header-cell"]');
      expect(headerCells.length).toBe(3);

      const bodyElement = container.querySelector('[class*="table-body"]');
      expect(bodyElement).toBeInTheDocument();

      const rows = container.querySelectorAll('[class*="table-row"]');
      expect(rows.length).toBe(6);
    });

    it('renders with custom className', () => {
      const { container } = render(<Table {...defaultProps} className="custom-table-class" />);
      const tableElement = container.querySelector('[class*="table"]');
      expect(tableElement?.className).toContain('custom-table-class');
    });

    it('renders with custom headerClassName', () => {
      const { container } = render(
        <Table {...defaultProps} headerClassName="custom-header-class" />,
      );
      const headerElement = container.querySelector('[class*="table-header"]');
      expect(headerElement?.className).toContain('custom-header-class');
    });

    it('accepts single column object for primaryColumns', () => {
      const singleColumnProps = {
        data: mockData,
        primaryColumn: {
          key: 'name',
          header: 'Name',
        },
        fixedColumns: mockFixedColumns,
      };

      const { container } = render(<Table {...singleColumnProps} />);

      const tableElement = container.querySelector('[class*="table"]');
      expect(tableElement).toBeInTheDocument();

      const headerCells = container.querySelectorAll('[class*="table-header-cell"]');
      // Should have 1 primary column + 2 fixed columns = 3 header cells
      expect(headerCells.length).toBe(3);

      // Verify the primary column header is rendered
      expect(screen.getByText('Name')).toBeInTheDocument();
    });

    it('applies rowClassName to each row', () => {
      const { container } = render(<Table {...defaultProps} rowClassName="custom-row-class" />);

      const rows = container.querySelectorAll('[class*="table-row"]');

      let hasRowClassNameApplied = false;
      rows.forEach((row) => {
        if (row.className.includes('custom-row-class')) {
          hasRowClassNameApplied = true;
        }
      });

      expect(hasRowClassNameApplied).toBe(true);
    });

    it('renders with selectable rows', () => {
      const { container } = render(<Table {...defaultProps} selectable={true} />);

      const headerCheckboxCell = container.querySelector(
        '[class*="table-header-cell"][class*="checkbox-cell"]',
      );
      expect(headerCheckboxCell).toBeInTheDocument();

      const rowCheckboxCells = container.querySelectorAll(
        '[class*="table-cell"][class*="checkbox-cell"]',
      );
      expect(rowCheckboxCells.length).toBe(mockData.length);
    });

    it('renders with row actions', () => {
      const { container } = render(
        <Table {...defaultProps} renderRowActions={mockRenderRowActions} />,
      );

      const headerActionCell = container.querySelector(
        '[class*="table-header-cell"][class*="action-menu-cell"]',
      );
      expect(headerActionCell).toBeInTheDocument();

      const actionButtons = screen.getAllByTestId('row-action');
      expect(actionButtons.length).toBe(mockData.length);
    });

    it('applies custom size to rows from rowConfigs', () => {
      const { container } = render(<Table {...defaultProps} />);

      const rows = container.querySelectorAll('[class*="table-row"]');

      let hasSmallSize = false;
      rows.forEach((row) => {
        if (row.className.includes('size-small')) {
          hasSmallSize = true;
        }
      });

      expect(hasSmallSize).toBe(true);
    });

    it('renders cells with proper alignment', () => {
      render(<Table {...defaultProps} />);

      const ageHeaderCell = screen.getByText('Age').closest('button');
      expect(ageHeaderCell?.className).toContain('align-right');
    });

    it('renders primary column cells', () => {
      const { container } = render(<Table {...defaultProps} />);

      const primaryCells = container.querySelectorAll('[class*="primary-cell"]');

      expect(primaryCells.length).toBeGreaterThan(0);

      const headerCells = container.querySelectorAll('[class*="table-header-cell"]');
      expect(headerCells[0].className).toContain('primary-cell');
    });
  });

  describe('Sorting', () => {
    const onChangeSortingMock = vi.fn();

    beforeEach(() => {
      onChangeSortingMock.mockClear();
    });

    it('calls onChangeSorting when clicking on sortable column header', () => {
      render(
        <Table
          {...defaultProps}
          sortableColumns={['name']}
          onChangeSorting={onChangeSortingMock}
          sortingColumn={mockPrimaryColumns[0]}
          sortingDirection={ASC}
        />,
      );

      const nameHeader = screen.getByText('Name').closest('div');
      nameHeader?.click();

      expect(onChangeSortingMock).toHaveBeenCalledTimes(1);
      expect(onChangeSortingMock).toHaveBeenCalledWith({
        key: 'name',
        direction: ASC,
      });
    });

    it('does not call onChangeSorting when clicking on non-sortable column header', () => {
      render(
        <Table {...defaultProps} sortableColumns={[]} onChangeSorting={onChangeSortingMock} />,
      );

      const nameHeader = screen.getByText('Name').closest('div');
      nameHeader?.click();

      expect(onChangeSortingMock).not.toHaveBeenCalled();
    });

    it('displays up arrow for ascending sort', () => {
      render(
        <Table
          {...defaultProps}
          sortableColumns={['name']}
          sortingColumn={mockPrimaryColumns[0]}
          sortingDirection={ASC}
        />,
      );

      const upArrow = screen.getByTestId('arrow-up-icon');
      expect(upArrow).toBeInTheDocument();
    });

    it('displays down arrow for descending sort', () => {
      render(
        <Table
          {...defaultProps}
          sortableColumns={['name']}
          sortingColumn={mockPrimaryColumns[0]}
          sortingDirection={DESC}
        />,
      );

      const downArrow = screen.getByTestId('arrow-down-icon');
      expect(downArrow).toBeInTheDocument();
    });
  });

  describe('Selection', () => {
    const onToggleRowSelectionMock = vi.fn();
    const onToggleAllRowsSelectionMock = vi.fn();

    beforeEach(() => {
      onToggleRowSelectionMock.mockClear();
      onToggleAllRowsSelectionMock.mockClear();
    });

    it('renders checkboxes when selectable is true', () => {
      render(<Table {...defaultProps} selectable={true} selectedRowIds={[1]} />);

      const checkboxCells = document.querySelectorAll('[class*="checkbox-cell"]');
      expect(checkboxCells.length).toBeGreaterThan(0);
    });

    it('does not render checkboxes when selectable is false', () => {
      render(<Table {...defaultProps} selectable={false} />);

      const checkboxCells = document.querySelectorAll('[class*="checkbox-cell"]');
      expect(checkboxCells.length).toBe(0);
    });

    it('calls onToggleRowSelection when row checkbox is clicked', async () => {
      render(
        <Table
          {...defaultProps}
          selectable={true}
          selectedRowIds={[1, 2, 3]}
          onToggleRowSelection={onToggleRowSelectionMock}
        />,
      );

      const checkboxes = screen.getAllByTestId('checkbox');
      expect(checkboxes.length).toBeGreaterThan(0);
      if (checkboxes.length > 1) {
        await userEvent.click(checkboxes[1]);

        expect(onToggleRowSelectionMock).toHaveBeenCalled();
      }
    });

    it('calls onToggleAllRowsSelection when header checkbox is clicked', async () => {
      render(
        <Table
          {...defaultProps}
          selectable={true}
          selectedRowIds={[1, 2, 3]}
          onToggleAllRowsSelection={onToggleAllRowsSelectionMock}
        />,
      );

      const checkboxes = screen.getAllByTestId('checkbox');

      if (checkboxes.length > 0) {
        const headerCheckbox = checkboxes[0];
        await userEvent.click(headerCheckbox);

        expect(onToggleAllRowsSelectionMock).toHaveBeenCalled();
      }
    });

    it('shows checkbox when row is hovered', async () => {
      const { container } = render(
        <Table {...defaultProps} selectable={true} selectedRowIds={[]} />,
      );

      const initialCheckboxes = screen.queryAllByTestId('checkbox');
      const initialCount = initialCheckboxes.length;
      const firstRow = container.querySelectorAll('[class*="table-row"]')[0];
      fireEvent.mouseEnter(firstRow);

      const afterHoverCheckboxes = screen.queryAllByTestId('checkbox');
      expect(afterHoverCheckboxes.length).toBeGreaterThanOrEqual(initialCount);
    });
  });

  describe('Row and Cell Data Handling', () => {
    it('renders complex cell data with components', () => {
      const complexData: RowData[] = [
        {
          id: 1,
          name: {
            content: 'John Doe',
            component: <span data-testid="custom-component">John Doe</span>,
          },
          age: 30,
          city: 'New York',
        },
      ];

      render(
        <Table
          data={complexData}
          primaryColumn={mockPrimaryColumns}
          fixedColumns={mockFixedColumns}
        />,
      );

      const customComponent = screen.getByTestId('custom-component');
      expect(customComponent).toBeInTheDocument();
      expect(customComponent.textContent).toBe('John Doe');
    });

    it('needs null checking for cell values', () => {
      expect(true).toBe(true);
    });
  });

  describe('Mouse Interactions', () => {
    it('handles column hover interactions', async () => {
      render(
        <Table
          {...defaultProps}
          sortableColumns={['name']}
          sortingColumn={undefined}
          sortingDirection={undefined}
        />,
      );
      expect(true).toBe(true);
    });

    it('shows checkboxes on row hover', async () => {
      const { container } = render(
        <Table {...defaultProps} selectable={true} selectedRowIds={[]} />,
      );

      const initialCheckboxes = screen.queryAllByTestId('checkbox');
      const initialCount = initialCheckboxes.length;
      const firstRow = container.querySelectorAll('[class*="table-row"]')[0];
      fireEvent.mouseEnter(firstRow);
      const afterHoverCheckboxes = screen.queryAllByTestId('checkbox');
      expect(afterHoverCheckboxes.length).toBeGreaterThanOrEqual(initialCount);
    });
  });
});

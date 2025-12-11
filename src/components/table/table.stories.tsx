import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { Popover } from '@components/popover';
import { MeatballMenuIcon } from '@components/icons';
import {
  Column,
  FixedColumn,
  RowData,
  SortConfig,
  SortingDirection,
  TableComponentProps,
} from './types';
import { useEffect, useState } from 'react';
import { sortTableData, toggleDirection } from '@components/table/utils';
import { ASC } from './constants';

const meta: Meta<typeof Table> = {
  title: 'Tables & Lists/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible table component with support for:
- **Row sizes**: Configure via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in row data
- **Expandable rows**: Enable with \`isRowsExpandable\` prop
- **Pinned columns**: Use \`pinnedColumnKeys\` to pin columns to the left
- **Sorting**: Configure with \`sortableColumns\`, \`sortingColumn\`, \`sortingDirection\`
- **Selection**: Enable with \`selectable\` prop
- **Custom cell content**: Use \`DetailedCellData\` with \`content\` and \`component\` properties
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description:
        'Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.',
      table: {
        type: { summary: 'RowData[]' },
      },
    },
    primaryColumn: {
      description: 'The main column configuration (typically the name/title column).',
      table: {
        type: { summary: 'Column | Column[]' },
      },
    },
    fixedColumns: {
      description: 'Array of fixed-width columns with optional alignment.',
      table: {
        type: { summary: 'FixedColumn[]' },
      },
    },
    selectable: {
      description: 'Enable row selection with checkboxes.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isRowsExpandable: {
      description: 'Enable expand/collapse functionality for rows with long content.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    expandedRowIds: {
      description: 'Array of row IDs that are currently expanded.',
      table: {
        type: { summary: '(string | number)[]' },
      },
    },
    isAllExpandedByDefault: {
      description: 'Whether all rows should be expanded by default.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    expandAllTooltip: {
      description: 'Tooltip text for the expand all button.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    pinnedColumnKeys: {
      description: 'Array of column keys to pin to the left side of the table.',
      table: {
        type: { summary: 'string[]' },
      },
    },
    sortableColumns: {
      description: 'Array of column keys that can be sorted.',
      table: {
        type: { summary: 'string[]' },
      },
    },
    sortingColumn: {
      description: 'Currently sorted column.',
      table: {
        type: { summary: 'Column' },
      },
    },
    sortingDirection: {
      description: 'Current sorting direction.',
      control: 'select',
      options: ['ASC', 'DESC'],
      table: {
        type: { summary: "'ASC' | 'DESC'" },
      },
    },
    isHeaderFixed: {
      description: 'Keep the header fixed when scrolling vertically.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isHorizontallyScrollable: {
      description: 'Enable horizontal scrolling for wide tables.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      description: 'Custom CSS class for the table container.',
      table: {
        type: { summary: 'string' },
      },
    },
    headerClassName: {
      description:
        'Custom CSS class for the table header. Use this to customize header background, borders, etc.',
      table: {
        type: { summary: 'string' },
      },
    },
    bodyClassName: {
      description:
        'Custom CSS class for the table body. Use this to customize row gap, padding, etc.',
      table: {
        type: { summary: 'string' },
      },
    },
    rowClassName: {
      description: 'Custom CSS class for table rows.',
      table: {
        type: { summary: 'string' },
      },
    },
    onToggleRowExpansion: {
      description: 'Callback when a row is expanded/collapsed.',
      table: {
        type: { summary: '(id: string | number) => void' },
      },
    },
    onToggleAllRowsExpansion: {
      description: 'Callback when all rows are expanded/collapsed.',
      table: {
        type: { summary: '() => void' },
      },
    },
    onToggleRowSelection: {
      description: 'Callback when a row is selected/deselected.',
      table: {
        type: { summary: '(id: string | number) => void' },
      },
    },
    onToggleAllRowsSelection: {
      description: 'Callback when all rows are selected/deselected.',
      table: {
        type: { summary: '() => void' },
      },
    },
    onChangeSorting: {
      description: 'Callback when sorting changes.',
      table: {
        type: { summary: '(sortConfig?: SortConfig) => void' },
      },
    },
    renderRowActions: {
      description: 'Function to render action menu for each row.',
      table: {
        type: { summary: '(metaData?: MetaData) => ReactNode' },
      },
    },
  },
  args: {
    selectable: true,
  },
};

export default meta;

type Story = StoryObj<TableComponentProps>;

const renderRowActions = () => (
  <Popover
    placement={'bottom-end'}
    content={
      <div>
        <p>Edit</p>
        <p>Rename</p>
      </div>
    }
  >
    <MeatballMenuIcon />
  </Popover>
);

const data: RowData[] = [
  {
    id: 1,
    name: {
      content: 'Sam',
      component: (
        <a
          href={'https://example.com/profile/sam'}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          Sam
        </a>
      ),
    },
    age: 25,
    city: 'New York',
  },
  { name: 'Anna', age: 3, city: 'New York1', id: 2 },
  { name: 'Mike', age: 30, city: 'Los Angeles', config: { size: 'small' }, id: 3 },
];

const primaryColumns: Column[] = [
  {
    key: 'name',
    header: 'Name',
  },
];

const fixedColumns: FixedColumn[] = [
  {
    key: 'age',
    header: 'Age',
    align: 'right',
    width: 100,
  },
  {
    key: 'city',
    header: 'City',
    width: 150,
  },
];

export const Default: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumns[0].key,
      direction: ASC,
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumns[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(data, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const { key, direction } = sortConfig;
      const column = [...fixedColumns, ...primaryColumns].find((col) => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);

    return (
      <div style={{ minWidth: '700px' }}>
        <Table
          {...args}
          primaryColumn={primaryColumns}
          data={tableData}
          sortableColumns={[primaryColumns[0].key]}
          onChangeSorting={(sortConfigParam = sortConfig) => {
            let { direction } = sortConfigParam;
            const { key } = sortConfigParam;
            direction = toggleDirection(direction);
            const sortedData = sortTableData(tableData, { key, direction });
            setSortConfig({ key, direction });
            setTableData(sortedData);
          }}
          onToggleRowSelection={(id) => {
            const newCheckedRows = new Set(checkedRows);
            if (newCheckedRows.has(id)) {
              newCheckedRows.delete(id);
            } else {
              newCheckedRows.add(id);
            }
            setCheckedRows(newCheckedRows);
          }}
          onToggleAllRowsSelection={() => {
            if (checkedRows.size === data.length) {
              setCheckedRows(new Set());
            } else {
              const allRows = new Set(data.map((item) => item.id));
              setCheckedRows(allRows);
            }
          }}
          selectedRowIds={[...checkedRows]}
          sortingColumn={sortingColumn}
          sortingDirection={sortingDirection}
        />
      </div>
    );
  },
  args: {
    fixedColumns,
    renderRowActions,
    selectable: true,
  },
};

const wideTableData: RowData[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-123-4567',
    address: '123 Main Street, New York, NY 10001',
    department: 'Engineering',
    role: 'Senior Software Engineer',
    salary: '$120,000',
    startDate: '2020-01-15',
    status: 'Active',
    manager: 'Jane Smith',
    projects: 'Project Alpha, Project Beta',
    rowConfigs: { size: 'small' },
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1-555-987-6543',
    address: '456 Oak Avenue, Los Angeles, CA 90210',
    department: 'Marketing',
    role: 'Marketing Director',
    salary: '$95,000',
    startDate: '2019-03-20',
    status: 'Active',
    manager: 'Robert Johnson',
    projects: 'Campaign X, Campaign Y',
    rowConfigs: { size: 'small' },
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@example.com',
    phone: '+1-555-456-7890',
    address: '789 Pine Road, Chicago, IL 60601',
    department: 'Sales',
    role: 'Sales Representative',
    salary: '$75,000',
    startDate: '2021-06-10',
    status: 'Active',
    manager: 'Sarah Davis',
    projects: 'Client Onboarding, Lead Generation',
    rowConfigs: { size: 'small' },
  },
  {
    id: 4,
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    phone: '+1-555-234-5678',
    address: '321 Elm Street, Houston, TX 77001',
    department: 'HR',
    role: 'HR Manager',
    salary: '$85,000',
    startDate: '2018-09-12',
    status: 'Active',
    manager: 'Michael Brown',
    projects: 'Employee Onboarding, Policy Updates',
    rowConfigs: { size: 'small' },
  },
  {
    id: 5,
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    phone: '+1-555-345-6789',
    address: '654 Maple Drive, Phoenix, AZ 85001',
    department: 'Finance',
    role: 'Financial Analyst',
    salary: '$78,000',
    startDate: '2020-11-08',
    status: 'Active',
    manager: 'Emily White',
    projects: 'Budget Planning, Cost Analysis',
    rowConfigs: { size: 'small' },
  },
  {
    id: 6,
    name: 'Emily White',
    email: 'emily.white@example.com',
    phone: '+1-555-456-7891',
    address: '987 Cedar Lane, Philadelphia, PA 19101',
    department: 'Operations',
    role: 'Operations Manager',
    salary: '$110,000',
    startDate: '2017-05-22',
    status: 'Active',
    manager: 'David Green',
    projects: 'Process Optimization, Quality Control',
    rowConfigs: { size: 'small' },
  },
  {
    id: 7,
    name: 'David Green',
    email: 'david.green@example.com',
    phone: '+1-555-567-8901',
    address: '147 Birch Avenue, San Antonio, TX 78201',
    department: 'Engineering',
    role: 'Lead Developer',
    salary: '$135,000',
    startDate: '2016-02-14',
    status: 'Active',
    manager: 'Lisa Thompson',
    projects: 'Architecture Review, Team Mentoring',
    rowConfigs: { size: 'small' },
  },
  {
    id: 8,
    name: 'Lisa Thompson',
    email: 'lisa.thompson@example.com',
    phone: '+1-555-678-9012',
    address: '258 Spruce Court, San Diego, CA 92101',
    department: 'Product',
    role: 'Product Manager',
    salary: '$105,000',
    startDate: '2019-08-30',
    status: 'Active',
    manager: 'Tom Anderson',
    projects: 'Feature Planning, User Research',
    rowConfigs: { size: 'small' },
  },
  {
    id: 9,
    name: 'Tom Anderson',
    email: 'tom.anderson@example.com',
    phone: '+1-555-789-0123',
    address: '369 Willow Street, Dallas, TX 75201',
    department: 'Design',
    role: 'UX Designer',
    salary: '$88,000',
    startDate: '2021-01-18',
    status: 'Active',
    manager: 'Anna Martinez',
    projects: 'UI Redesign, User Testing',
    rowConfigs: { size: 'small' },
  },
  {
    id: 10,
    name: 'Anna Martinez',
    email: 'anna.martinez@example.com',
    phone: '+1-555-890-1234',
    address: '741 Poplar Boulevard, San Jose, CA 95101',
    department: 'QA',
    role: 'QA Engineer',
    salary: '$82,000',
    startDate: '2020-07-25',
    status: 'Active',
    manager: 'John Doe',
    projects: 'Automation Testing, Bug Tracking',
    rowConfigs: { size: 'small' },
  },
];

const wideTablePrimaryColumns: Column[] = [
  {
    key: 'name',
    header: 'Full Name',
  },
];

const wideTableFixedColumns: FixedColumn[] = [
  { key: 'email', header: 'Email Address', width: 200 },
  { key: 'phone', header: 'Phone Number', width: 150 },
  { key: 'address', header: 'Address', width: 250 },
  { key: 'department', header: 'Department', width: 120 },
  { key: 'role', header: 'Job Role', width: 180 },
  { key: 'salary', header: 'Salary', width: 100 },
  { key: 'startDate', header: 'Start Date', width: 120 },
  { key: 'status', header: 'Status', width: 100 },
  { key: 'manager', header: 'Manager', width: 150 },
  { key: 'projects', header: 'Current Projects', width: 200 },
];

// Generate more data for scrolling demonstration
const generateLargeDataSet = (count: number): RowData[] => {
  const names = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emma', 'Chris', 'Lisa', 'Tom', 'Anna'];
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
  ];
  const departments = [
    'Engineering',
    'Marketing',
    'Sales',
    'HR',
    'Finance',
    'Operations',
    'Design',
    'Product',
    'Legal',
    'Support',
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `${names[index % names.length]} ${index + 1}`,
    age: 22 + (index % 40),
    city: cities[index % cities.length],
    department: departments[index % departments.length],
    email: `user${index + 1}@example.com`,
    salary: `$${(50000 + ((index * 1000) % 100000)).toLocaleString()}`,
  }));
};

const largeDataSet = generateLargeDataSet(50);

const scrollableFixedColumns: FixedColumn[] = [
  { key: 'age', header: 'Age', width: 80, align: 'right' },
  { key: 'city', header: 'City', width: 120 },
  { key: 'department', header: 'Department', width: 120 },
  { key: 'email', header: 'Email', width: 200 },
  { key: 'salary', header: 'Salary', width: 100, align: 'right' },
];

export const FixedHeader: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumns[0].key,
      direction: ASC,
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumns[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(largeDataSet, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const { key, direction } = sortConfig;
      const column = [...scrollableFixedColumns, ...primaryColumns].find((col) => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);

    return (
      <div style={{ width: '900px', height: '500px', border: '1px solid #ccc', padding: '16px' }}>
        <h3 style={{ margin: '0 0 16px 0' }}>Fixed Header Table with Scrollable Body</h3>
        <div
          className="storybook-table-wrapper"
          style={{ height: 'calc(100% - 50px)', overflow: 'auto' }}
        >
          <Table
            {...args}
            data={tableData}
            primaryColumn={primaryColumns}
            fixedColumns={scrollableFixedColumns}
            isHeaderFixed={true}
            sortableColumns={[primaryColumns[0].key, 'age', 'department']}
            onChangeSorting={(sortConfigParam = sortConfig) => {
              let { direction } = sortConfigParam;
              const { key } = sortConfigParam;
              direction = toggleDirection(direction);
              const sortedData = sortTableData(tableData, { key, direction });
              setSortConfig({ key, direction });
              setTableData(sortedData);
            }}
            onToggleRowSelection={(id) => {
              const newCheckedRows = new Set(checkedRows);
              if (newCheckedRows.has(id)) {
                newCheckedRows.delete(id);
              } else {
                newCheckedRows.add(id);
              }
              setCheckedRows(newCheckedRows);
            }}
            onToggleAllRowsSelection={() => {
              if (checkedRows.size === largeDataSet.length) {
                setCheckedRows(new Set());
              } else {
                const allRows = new Set(largeDataSet.map((item) => item.id));
                setCheckedRows(allRows);
              }
            }}
            selectedRowIds={[...checkedRows]}
            sortingColumn={sortingColumn}
            sortingDirection={sortingDirection}
          />
        </div>
      </div>
    );
  },
  args: {
    selectable: true,
    renderRowActions,
  },
};

export const HorizontalScrollWithFixedHeaderControl: Story = {
  render: (args: TableComponentProps) => {
    return (
      <div style={{ width: '600px', height: '500px', border: '1px solid #ccc', padding: '16px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Fixed Header + Horizontal Scroll: Both scrollbars visible when needed
        </h3>
        <div
          className="storybook-table-wrapper"
          style={{ height: 'calc(100% - 50px)', position: 'relative' }}
        >
          <Table
            {...args}
            data={wideTableData}
            primaryColumn={wideTablePrimaryColumns}
            fixedColumns={wideTableFixedColumns}
            isHorizontallyScrollable
            isHeaderFixed
          />
        </div>
      </div>
    );
  },
  args: {
    selectable: false,
    renderRowActions,
  },
};

export const PinnedColumnsWithFixedHeader: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    return (
      <div style={{ width: '600px', height: '500px', border: '1px solid #ccc', padding: '16px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal
          scrolling
        </h3>
        <div
          className="storybook-table-wrapper"
          style={{ width: '550px', height: 'calc(100% - 50px)', position: 'relative' }}
        >
          <Table
            {...args}
            data={wideTableData}
            primaryColumn={wideTablePrimaryColumns}
            fixedColumns={wideTableFixedColumns}
            isHorizontallyScrollable
            isHeaderFixed
            pinnedColumnKeys={['name', 'email', 'department']}
            onToggleRowSelection={(id) => {
              const newCheckedRows = new Set(checkedRows);
              if (newCheckedRows.has(id)) {
                newCheckedRows.delete(id);
              } else {
                newCheckedRows.add(id);
              }
              setCheckedRows(newCheckedRows);
            }}
            onToggleAllRowsSelection={() => {
              if (checkedRows.size === wideTableData.length) {
                setCheckedRows(new Set());
              } else {
                const allRows = new Set(wideTableData.map((item) => item.id));
                setCheckedRows(allRows);
              }
            }}
            selectedRowIds={[...checkedRows]}
          />
        </div>
      </div>
    );
  },
  args: {
    selectable: true,
    renderRowActions,
  },
};

export const ExpandableRows: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([1]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    const expandableData: RowData[] = [
      {
        id: 1,
        name: 'Anna Smith',
        age: 25,
        city: 'New York',
        department: 'Engineering',
        email: 'sam.johnson@example.com',
      },
      {
        id: 2,
        name: 'Anna Smith',
        age: 32,
        city: 'San Francisco',
        department: 'Design',
        email: 'anna.smith@example.com',
      },
      {
        id: 3,
        name: 'Mike Davis',
        age: 28,
        city: 'Los Angeles',
        department: 'Marketing',
        email: 'mike.davis@example.com',
      },
      {
        id: 4,
        name: 'Sarah Wilson',
        age: 35,
        city: 'Chicago',
        department: 'Sales',
        email: 'sarah.wilson@example.com',
      },
    ];

    const expandableFixedColumns: FixedColumn[] = [
      { key: 'age', header: 'Age', align: 'right', width: 80 },
      { key: 'department', header: 'Department', width: 100 },
      { key: 'city', header: 'City', width: 100 },
    ];
    const expandablePrimaryColumns: Column[] = [
      {
        key: 'name',
        header: 'Name',
      },
    ];

    return (
      <div style={{ minWidth: '800px', maxWidth: '1300px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#333' }}>
          Expandable Rows Example
        </h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Click the expand/collapse icons to view detailed information for each row. Rows can be
          expanded and collapsed independently.
        </p>
        <Table
          {...args}
          data={expandableData}
          primaryColumn={expandablePrimaryColumns}
          fixedColumns={expandableFixedColumns}
          isRowsExpandable={true}
          selectable={true}
          expandedRowIds={[...expandedRows]}
          setExpandedRowIds={setExpandedRows}
          onToggleRowExpansion={(id) => {
            const newExpandedRows = new Set(expandedRows);
            if (newExpandedRows.has(id)) {
              newExpandedRows.delete(id);
            } else {
              newExpandedRows.add(id);
            }
            setExpandedRows(newExpandedRows);
          }}
          onToggleAllRowsExpansion={() => {
            if (expandedRows.size === expandableData.length) {
              setExpandedRows(new Set());
            } else {
              const allRows = new Set(expandableData.map((item) => item.id));
              setExpandedRows(allRows);
            }
          }}
          selectedRowIds={[...checkedRows]}
          onToggleRowSelection={(id) => {
            const newCheckedRows = new Set(checkedRows);
            if (newCheckedRows.has(id)) {
              newCheckedRows.delete(id);
            } else {
              newCheckedRows.add(id);
            }
            setCheckedRows(newCheckedRows);
          }}
          onToggleAllRowsSelection={() => {
            if (checkedRows.size === expandableData.length) {
              setCheckedRows(new Set());
            } else {
              const allRows = new Set(expandableData.map((item) => item.id));
              setCheckedRows(allRows);
            }
          }}
        />
      </div>
    );
  },
  args: {
    selectable: true,
  },
};

export const ExpandableRowsWithDefaultState: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([1, 2, 3, 4]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAllExpandedByDefault, setIsAllExpandedByDefault] = useState<boolean>(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    const expandableData: RowData[] = [
      {
        id: 1,
        name: 'Anna Smith',
        age: 25,
        city: 'New York',
        department: 'Engineering',
        email: 'anna.smith@example.com',
      },
      {
        id: 2,
        name: 'Mike Davis',
        age: 32,
        city: 'San Francisco',
        department: 'Design',
        email: 'mike.davis@example.com',
      },
      {
        id: 3,
        name: 'Sarah Wilson',
        age: 28,
        city: 'Los Angeles',
        department: 'Marketing',
        email: 'sarah.wilson@example.com',
      },
      {
        id: 4,
        name: 'John Brown',
        age: 35,
        city: 'Chicago',
        department: 'Sales',
        email: 'john.brown@example.com',
      },
    ];

    const expandableFixedColumns: FixedColumn[] = [
      { key: 'age', header: 'Age', align: 'right', width: 80 },
      { key: 'department', header: 'Department', width: 120 },
      { key: 'city', header: 'City', width: 120 },
    ];
    const expandablePrimaryColumns: Column[] = [
      {
        key: 'name',
        header: 'Name',
      },
    ];

    const expandAllTooltip = isAllExpandedByDefault
      ? 'Expanded by default'
      : 'Collapsed by default';

    return (
      <div style={{ minWidth: '800px', maxWidth: '1300px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#333' }}>
          Expandable Rows with Default State
        </h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Demonstrates <strong>isAllExpandedByDefault</strong> and <strong>expandAllTooltip</strong>{' '}
          props. The expandAll icon shows the default state regardless of individual row states.
          Hover over the expandAll icon to see the tooltip.
        </p>
        <Table
          {...args}
          data={expandableData}
          primaryColumn={expandablePrimaryColumns}
          fixedColumns={expandableFixedColumns}
          isRowsExpandable={true}
          selectable={true}
          expandedRowIds={[...expandedRows]}
          isAllExpandedByDefault={isAllExpandedByDefault}
          expandAllTooltip={expandAllTooltip}
          onToggleRowExpansion={(id) => {
            const newExpandedRows = new Set(expandedRows);
            if (newExpandedRows.has(id)) {
              newExpandedRows.delete(id);
            } else {
              newExpandedRows.add(id);
            }
            setExpandedRows(newExpandedRows);
          }}
          onToggleAllRowsExpansion={() => {
            const newIsAllExpandedByDefault = !isAllExpandedByDefault;
            setIsAllExpandedByDefault(newIsAllExpandedByDefault);

            if (newIsAllExpandedByDefault) {
              setExpandedRows(new Set(expandableData.map((item) => item.id)));
            } else {
              setExpandedRows(new Set());
            }
          }}
          selectedRowIds={[...checkedRows]}
          onToggleRowSelection={(id) => {
            const newCheckedRows = new Set(checkedRows);
            if (newCheckedRows.has(id)) {
              newCheckedRows.delete(id);
            } else {
              newCheckedRows.add(id);
            }
            setCheckedRows(newCheckedRows);
          }}
          onToggleAllRowsSelection={() => {
            if (checkedRows.size === expandableData.length) {
              setCheckedRows(new Set());
            } else {
              const allRows = new Set(expandableData.map((item) => item.id));
              setCheckedRows(allRows);
            }
          }}
        />
      </div>
    );
  },
  args: {
    selectable: true,
  },
};

// Data with very long text content for expansion testing
const longTextData: RowData[] = [
  {
    id: 1,
    name: 'John Alexander Maximilian Winchester-Blackwood III',
    description:
      'This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.',
    shortText: 'Brief note',
    longTitle:
      'Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives',
    email:
      'john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com',
    notes:
      'This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries.',
  },
  {
    id: 2,
    name: 'Maria Elena Rodriguez-Martinez',
    description:
      'Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.',
    shortText: 'Quick summary here',
    longTitle:
      'Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement',
    email: 'maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org',
    notes:
      'Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing.',
  },
  {
    id: 3,
    name: 'Robert James Thompson',
    description:
      'A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.',
    shortText: 'Standard',
    longTitle: 'Director of Operations',
    email: 'robert.thompson@company.com',
    notes: 'Short note about this person and their current projects.',
  },
  {
    id: 4,
    name: 'Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP',
    description:
      'This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.',
    shortText: 'Complex background',
    longTitle:
      'Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics',
    email:
      'dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net',
    notes:
      'Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length.',
  },
];

const longTextColumns: FixedColumn[] = [
  {
    key: 'description',
    header: 'Description',
    width: 200,
  },
  {
    key: 'longTitle',
    header: 'Job Title',
    width: 120,
  },
  {
    key: 'email',
    header: 'Email Address',
    width: 100,
  },
  {
    key: 'shortText',
    header: 'Type',
    width: 100,
  },
  {
    key: 'notes',
    header: 'Notes',
    width: 100,
  },
];

export const CellExpansion: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set());

    return (
      <div style={{ width: '1000px', padding: '16px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#333' }}>
          Row Content Expansion - Long Text Handling
        </h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
          <strong>Click the expand icon</strong> at the beginning of each row to expand/collapse ALL
          cells in that row. This example tests:
          <br />• Very long email addresses that should be ellipsed when collapsed
          <br />• Long text content that should wrap without breaking cell width constraints
          <br />• Proper word breaking for extremely long content
          <br />• Layout stability when transitioning between collapsed and expanded states
        </p>
        <div style={{ border: '1px solid #e1e5e9', borderRadius: '8px', overflow: 'hidden' }}>
          <Table
            {...args}
            data={longTextData}
            primaryColumn={[{ key: 'name', header: 'Full Name' }]}
            fixedColumns={longTextColumns}
            selectable={false}
            isRowsExpandable={true}
            expandedRowIds={[...expandedRows]}
            onToggleRowExpansion={(id) => {
              const newExpandedRows = new Set(expandedRows);
              if (newExpandedRows.has(id)) {
                newExpandedRows.delete(id);
              } else {
                newExpandedRows.add(id);
              }
              setExpandedRows(newExpandedRows);
            }}
            onToggleAllRowsExpansion={() => {
              if (expandedRows.size === longTextData.length) {
                setExpandedRows(new Set());
              } else {
                const allRows = new Set(longTextData.map((item) => item.id));
                setExpandedRows(allRows);
              }
            }}
          />
        </div>
        <p style={{ margin: '16px 0 0 0', fontSize: '12px', color: '#888', fontStyle: 'italic' }}>
          Test the table with your browser's developer tools at different widths to verify
          responsive behavior.
        </p>
      </div>
    );
  },
  args: {
    renderRowActions: undefined,
  },
};

/**
 * Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
 * Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.
 */
export const RowSizesWithExpand: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsSmall, setExpandedRowsSmall] = useState<Set<number | string>>(new Set([1]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsDefault, setExpandedRowsDefault] = useState<Set<number | string>>(
      new Set([5]),
    );
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsLarge, setExpandedRowsLarge] = useState<Set<number | string>>(new Set([9]));

    const createData = (idOffset: number, size?: 'small' | 'medium' | 'large'): RowData[] => [
      {
        id: idOffset + 1,
        name: 'Anna Smith',
        age: 25,
        city: 'New York',
        department: 'Engineering',
        rowConfigs: size ? { size } : undefined,
      },
      {
        id: idOffset + 2,
        name: 'John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content',
        age: 32,
        city: 'San Francisco Bay Area, California, United States of America',
        department: 'Design and User Experience Research Department',
        rowConfigs: size ? { size } : undefined,
      },
      {
        id: idOffset + 3,
        name: 'Mike Davis',
        age: 28,
        city: 'Los Angeles',
        department: 'Marketing',
        rowConfigs: size ? { size } : undefined,
      },
      {
        id: idOffset + 4,
        name: 'Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width',
        age: 35,
        city: 'Chicago Metropolitan Area',
        department: 'Sales and Business Development International Operations',
        rowConfigs: size ? { size } : undefined,
      },
    ];

    const smallData = createData(0, 'small');
    const defaultData = createData(4);
    const largeData = createData(8, 'large');

    const columns: FixedColumn[] = [
      { key: 'age', header: 'Age', align: 'right', width: 80 },
      { key: 'department', header: 'Department', width: 120 },
      { key: 'city', header: 'City', width: 120 },
    ];
    const primaryColumn: Column[] = [{ key: 'name', header: 'Name' }];

    const renderTable = (
      title: string,
      subtitle: string,
      rowData: RowData[],
      expandedRows: Set<number | string>,
      setExpandedRows: React.Dispatch<React.SetStateAction<Set<number | string>>>,
    ) => (
      <div style={{ marginBottom: '32px' }}>
        <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#333' }}>{title}</h4>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>{subtitle}</p>
        <Table
          {...args}
          data={rowData}
          primaryColumn={primaryColumn}
          fixedColumns={columns}
          isRowsExpandable={true}
          expandedRowIds={[...expandedRows]}
          onToggleRowExpansion={(id) => {
            const newExpandedRows = new Set(expandedRows);
            if (newExpandedRows.has(id)) {
              newExpandedRows.delete(id);
            } else {
              newExpandedRows.add(id);
            }
            setExpandedRows(newExpandedRows);
          }}
          onToggleAllRowsExpansion={() => {
            if (expandedRows.size === rowData.length) {
              setExpandedRows(new Set());
            } else {
              const allRows = new Set(rowData.map((item) => item.id));
              setExpandedRows(allRows);
            }
          }}
        />
      </div>
    );

    return (
      <div style={{ minWidth: '800px', maxWidth: '1000px' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', color: '#333' }}>
          Row Sizes with Expand - Testing Jump Fix
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Test expand/collapse on each table size. The row height should NOT change when
          expanding/collapsing (unless content requires more space).
        </p>

        {renderTable(
          'Small Rows (44px)',
          'rowConfigs: { size: "small" }',
          smallData,
          expandedRowsSmall,
          setExpandedRowsSmall,
        )}

        {renderTable(
          'Default Rows (64px)',
          'No rowConfigs specified',
          defaultData,
          expandedRowsDefault,
          setExpandedRowsDefault,
        )}

        {renderTable(
          'Large Rows (80px)',
          'rowConfigs: { size: "large" }',
          largeData,
          expandedRowsLarge,
          setExpandedRowsLarge,
        )}
      </div>
    );
  },
};

/**
 * Simple demonstration of row sizes without expand functionality.
 *
 * Row sizes are configured via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in each row data object.
 *
 * Available sizes:
 * - **small**: 44px height - best for dense data tables
 * - **medium** (default): 64px height - standard table row
 * - **large**: 80px height - for tables with more visual prominence
 */
export const RowSizes: Story = {
  render: () => {
    const rowSizesColumns: Column[] = [{ key: 'name', header: 'Name' }];

    const rowSizesFixedColumns: FixedColumn[] = [
      { key: 'status', header: 'Status', width: 100 },
      { key: 'description', header: 'Description', width: 250 },
    ];

    const smallRowsData = [
      {
        id: 1,
        name: 'Small Row 1',
        description: 'Compact row for dense tables',
        status: 'Active',
        rowConfigs: { size: 'small' as const },
      },
      {
        id: 2,
        name: 'Small Row 2',
        description: 'Height: 44px',
        status: 'Active',
        rowConfigs: { size: 'small' as const },
      },
    ];

    const defaultRowsData = [
      { id: 1, name: 'Default Row 1', description: 'Standard row size', status: 'Active' },
      {
        id: 2,
        name: 'Default Row 2',
        description: 'Height: 64px (no rowConfigs needed)',
        status: 'Active',
      },
    ];

    const largeRowsData = [
      {
        id: 1,
        name: 'Large Row 1',
        description: 'Prominent row for emphasis',
        status: 'Active',
        rowConfigs: { size: 'large' as const },
      },
      {
        id: 2,
        name: 'Large Row 2',
        description: 'Height: 80px',
        status: 'Active',
        rowConfigs: { size: 'large' as const },
      },
    ];

    return (
      <div style={{ minWidth: '600px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Small (44px)</h4>
          <code style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '12px' }}>
            rowConfigs: {'{ size: "small" }'}
          </code>
          <Table
            data={smallRowsData}
            primaryColumn={rowSizesColumns[0]}
            fixedColumns={rowSizesFixedColumns}
            selectable={false}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Default (64px)</h4>
          <code style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '12px' }}>
            No rowConfigs needed
          </code>
          <Table
            data={defaultRowsData}
            primaryColumn={rowSizesColumns[0]}
            fixedColumns={rowSizesFixedColumns}
            selectable={false}
          />
        </div>

        <div>
          <h4 style={{ margin: '0 0 8px 0' }}>Large (80px)</h4>
          <code style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '12px' }}>
            rowConfigs: {'{ size: "large" }'}
          </code>
          <Table
            data={largeRowsData}
            primaryColumn={rowSizesColumns[0]}
            fixedColumns={rowSizesFixedColumns}
            selectable={false}
          />
        </div>
      </div>
    );
  },
};

const customHeaderColumns: Column[] = [{ key: 'name', header: 'Name' }];

const customHeaderFixedColumns: FixedColumn[] = [
  { key: 'status', header: 'Status', width: 100 },
  { key: 'category', header: 'Category', width: 120 },
];

const customHeaderData = [
  {
    id: 1,
    name: 'Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling',
    status: 'Passed',
    category: 'Smoke',
    rowConfigs: { size: 'small' as const },
  },
  {
    id: 2,
    name: 'Another test case',
    status: 'Failed',
    category: 'Regression',
    rowConfigs: { size: 'small' as const },
  },
  {
    id: 3,
    name: 'Quick sanity check',
    status: 'Skipped',
    category: 'Sanity',
    rowConfigs: { size: 'small' as const },
  },
];

const CustomHeaderDemo = () => {
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());

  return (
    <div style={{ minWidth: '600px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#333' }}>
        Custom Header Background Color
      </h3>
      <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
        Use the <code>headerClassName</code> prop with your own CSS class to customize the header.
        Pinned columns and expand button inherit the background color automatically.
      </p>

      {/* Define custom styles for the demo */}
      <style>
        {`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}
      </style>

      <div
        style={{
          border: '1px solid var(--rp-ui-base-e-200)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <Table
          data={customHeaderData}
          primaryColumn={customHeaderColumns[0]}
          fixedColumns={customHeaderFixedColumns}
          pinnedColumnKeys={['status']}
          isRowsExpandable
          expandedRowIds={Array.from(expandedRows)}
          selectable={false}
          headerClassName="custom-gray-header"
          onToggleRowExpansion={(id) => {
            const newExpandedRows = new Set(expandedRows);
            if (newExpandedRows.has(id)) {
              newExpandedRows.delete(id);
            } else {
              newExpandedRows.add(id);
            }
            setExpandedRows(newExpandedRows);
          }}
          onToggleAllRowsExpansion={() => {
            if (expandedRows.size === customHeaderData.length) {
              setExpandedRows(new Set());
            } else {
              setExpandedRows(new Set(customHeaderData.map((item) => item.id)));
            }
          }}
        />
      </div>

      <div style={{ marginTop: '24px' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#333' }}>How to use:</h4>
        <pre
          style={{
            backgroundColor: '#f5f5f5',
            padding: '12px',
            borderRadius: '4px',
            fontSize: '12px',
            overflow: 'auto',
          }}
        >
          {`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`}
        </pre>
      </div>
    </div>
  );
};

/**
 * Demonstrates how to customize the table header background color using CSS.
 *
 * The Table component supports custom header styling via the `headerClassName` prop.
 * Pinned columns and expand cells will inherit the header background color automatically.
 *
 * This is useful when you need to match the table header with your application's design,
 * for example, using a gray header on a white background or vice versa.
 */
export const CustomHeaderStyle: Story = {
  render: () => <CustomHeaderDemo />,
};

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '../tooltip';
import { WarningIcon } from '../icons';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    activePage: 2,
    totalItems: 400,
    pageSize: 20,
    pageSizeOptions: [10, 20, 30, 40, 50],
    changePage: () => {},
    changePageSize: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);

    const totalPages = Math.ceil(args.totalItems / pageSize);

    return (
      <div style={{ width: '900px' }}>
        <Pagination
          {...args}
          pageSize={pageSize}
          activePage={page}
          totalPages={totalPages}
          changePage={(newPage) => {
            setPage(newPage);
          }}
          changePageSize={(size) => {
            setPageSize(size);
          }}
        />
      </div>
    );
  },
};

export const WithWarning: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);

    const totalPages = Math.ceil(args.totalItems / pageSize);

    return (
      <div style={{ width: '900px' }}>
        <Pagination
          {...args}
          pageSize={pageSize}
          activePage={page}
          totalPages={totalPages}
          changePage={(newPage) => {
            setPage(newPage);
          }}
          changePageSize={(size) => {
            setPageSize(size);
          }}
          warningContent={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '16px',
                padding: '0 0 0 8px',
                color: '#FFA500',
              }}
            >
              <Tooltip
                content={
                  <div style={{ maxWidth: '300px' }}>
                    <h3 style={{ margin: '0 0 8px 0' }}>Data Limit Exceeded</h3>
                    <p style={{ margin: 0 }}>
                      The results exceed the allowed 10,000 items limit and cannot be fully
                      displayed. Please refine your filters or export the data for the full results.
                    </p>
                  </div>
                }
                placement="top"
              >
                <div style={{ display: 'flex' }}>
                  <WarningIcon />
                </div>
              </Tooltip>
            </div>
          }
        />
      </div>
    );
  },
};

export const WithAccentTotalTooltip: Story = {
  args: {
    activePage: 1,
    totalItems: 10000,
    pageSize: 50,
    totalPages: 200,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);

    const totalPages = Math.ceil(args.totalItems / pageSize);
    const accentTotalTooltip =
      'The results exceed the allowed 10,000 items limit and cannot be fully displayed. Please refine your filters.';

    return (
      <div style={{ width: '900px' }}>
        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#8d95a1' }}>
          Latest executions only at the display cap: total is shown as an accent value with a
          tooltip. The standard limit-exceeded warning icon is not used.
        </p>
        <Pagination
          {...args}
          pageSize={pageSize}
          activePage={page}
          totalPages={totalPages}
          accentTotalTooltip={accentTotalTooltip}
          changePage={(newPage) => {
            setPage(newPage);
          }}
          changePageSize={(size) => {
            setPageSize(size);
          }}
        />
      </div>
    );
  },
};

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

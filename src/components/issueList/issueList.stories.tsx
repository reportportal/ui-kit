/*
 * Copyright 2025 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { IssueList, Issue } from './issueList';

const meta: Meta<typeof IssueList> = {
  title: 'Components/IssueList',
  component: IssueList,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof IssueList>;

const sampleIssues: Issue[] = [
  { key: '1', name: 'JIRA-101', link: '#' },
  { key: '2', name: 'JIRA-102', link: '#' },
  { key: '3', name: 'JIRA-103', link: '#' },
  { key: '4', name: 'JIRA-104', link: '#' },
  { key: '5', name: 'JIRA-105', link: '#' },
  { key: '6', name: 'JIRA-106', link: '#' },
  { key: '7', name: 'JIRA-107', link: '#' },
];

const manyIssues: Issue[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i + 1),
  name: `JIRA-${1001 + i}`,
}));

const lotsOfIssues: Issue[] = Array.from({ length: 15 }, (_, i) => ({
  key: String(i + 1),
  name: `BUG-${2001 + i}`,
  link: '#',
}));

export const Default: Story = {
  args: {
    issues: sampleIssues,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FewIssues: Story = {
  args: {
    issues: sampleIssues.slice(0, 2),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ManyIssues: Story = {
  args: {
    issues: manyIssues,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NarrowContainer: Story = {
  args: {
    issues: sampleIssues,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '200px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WideContainer: Story = {
  args: {
    issues: sampleIssues,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithClickHandler: Story = {
  args: {
    issues: sampleIssues.slice(0, 3),
    onIssueClick: (issue) => console.log(`Clicked: ${issue.name}`),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithRemoveHandler: Story = {
  args: {
    issues: sampleIssues.slice(0, 4),
    onIssueRemove: (issue) => console.log(`Remove: ${issue.name}`),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongIssueNames: Story = {
  args: {
    issues: [
      { key: '1', name: 'Very Long Issue Name JIRA-001', link: '#' },
      { key: '2', name: 'Another Very Long Name JIRA-002', link: '#' },
      { key: '3', name: 'Short', link: '#' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SingleIssueNarrow: Story = {
  args: {
    issues: [{ key: '1', name: 'VERY-LONG-ISSUE-NAME-JIRA-12345', link: '#' }],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithTooltip: Story = {
  args: {
    issues: sampleIssues.slice(0, 3),
    renderTooltip: (issue) => (
      <div style={{ padding: '8px' }}>
        <strong>Summary</strong>
        <p>This is a description for {issue.name}</p>
        <strong>Status</strong>
        <p>Open</p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ShowAllView: Story = {
  args: {
    issues: manyIssues,
    isExpanded: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', border: '1px dashed #ccc', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

const TableCell = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      padding: '8px 12px',
      borderBottom: '1px solid #e0e0e0',
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </div>
);

const ResizableColumn = ({
  children,
  minWidth = 100,
  initialWidth,
}: {
  children: React.ReactNode;
  minWidth?: number;
  initialWidth?: number;
}) => (
  <div
    style={{
      resize: 'horizontal',
      overflow: 'auto',
      minWidth,
      width: initialWidth,
      maxWidth: '100%',
      border: '1px solid #ccc',
      background: '#fafafa',
    }}
  >
    {children}
  </div>
);

export const InResizableTable: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <h4 style={{ marginBottom: '16px' }}>Resize the columns to test overflow behavior:</h4>

      <div style={{ marginBottom: '24px' }}>
        <h5>Initial width 80px with 15 issues:</h5>
        <ResizableColumn minWidth={80} initialWidth={80}>
          <TableCell>
            <IssueList issues={lotsOfIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>1 issue (ellipsis when narrow):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={[{ key: '1', name: 'JIRA-12345', link: '#' }]} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>2 issues (1 visible + counter when narrow):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList
              issues={[
                { key: '1', name: 'JIRA-101', link: '#' },
                { key: '2', name: 'JIRA-102', link: '#' },
              ]}
            />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>Many issues (overflow to counter):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={sampleIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>Long issue names:</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList
              issues={[
                { key: '1', name: 'VERY-LONG-ISSUE-NAME-123', link: '#' },
                { key: '2', name: 'ANOTHER-LONG-NAME-456', link: '#' },
                { key: '3', name: 'SHORT', link: '#' },
              ]}
            />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>Show All View (expanded row):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={sampleIssues} isExpanded />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>15 issues (counter &gt; 10):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={lotsOfIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>Very narrow (only counter visible):</h5>
        <ResizableColumn minWidth={40}>
          <TableCell>
            <IssueList issues={lotsOfIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h5>With tooltips (using portal):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList
              issues={sampleIssues}
              renderTooltip={(issue) => (
                <div>
                  <strong>{issue.name}</strong>
                  <p>Status: Open</p>
                  <p>Summary: This is a test issue</p>
                </div>
              )}
              tooltipPortalRoot={document.body}
            />
          </TableCell>
        </ResizableColumn>
      </div>
    </div>
  ),
};

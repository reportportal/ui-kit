import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';
import { ThemeProvider } from '../themeProvider';

// TODO: Create Storybook decorator - https://storybook.js.org/docs/react/writing-stories/decorators
const DarkWrapper = ({ children }) => (
  <div
    style={{
      marginTop: '20px',
      backgroundColor: 'var(--rp-ui-kit-darkmode-bg)',
      padding: '10px',
    }}
  >
    <ThemeProvider theme="dark">{children}</ThemeProvider>
  </div>
);

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} />
      <DarkWrapper>
        <Checkbox {...args} />
      </DarkWrapper>
    </>
  ),
};

export const WithChildren: Story = {
  render: (args) => (
    <>
      <Checkbox {...args}>Primary</Checkbox>
      <DarkWrapper>
        <Checkbox {...args}>Primary darkmode</Checkbox>
      </DarkWrapper>
    </>
  ),
};

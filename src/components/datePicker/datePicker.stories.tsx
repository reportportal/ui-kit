import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { ru } from 'date-fns/locale';
import { DatePicker } from './datePicker';
import { registerDatePickerLocale, getYearsFrom } from './utils';

const meta: Meta<typeof DatePicker> = {
  title: 'Controls/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      control: false,
      description: 'Callback function called when the date value changes.',
      table: { type: { summary: '(date: Date | any) => void' } },
    },
    onBlur: {
      control: false,
      description: 'Callback function called when the date picker loses focus.',
      table: { type: { summary: '() => void' } },
    },
    onFocus: {
      control: false,
      description: 'Callback function called when the date picker receives focus.',
      table: { type: { summary: '() => void' } },
    },
    headerNodes: {
      control: false,
      description: 'Custom React nodes to be rendered in the header of the date picker.',
      table: { type: { summary: 'ReactNode' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Indicates whether the date picker is disabled.',
      table: { type: { summary: 'boolean' } },
    },
    shouldCloseOnSelect: {
      control: 'boolean',
      description: 'Specifies whether the date picker should close when a date is selected.',
      table: { type: { summary: 'boolean' } },
    },
    fixedHeight: {
      control: 'boolean',
      description: 'Specifies whether the calendar should have a fixed height.',
      table: { type: { summary: 'boolean' } },
    },
    startDate: {
      control: 'date',
      description:
        'The start date of the date range. Used when selects="start" or for range selection.',
      table: { type: { summary: 'Date | undefined' } },
    },
    endDate: {
      control: 'date',
      description:
        'The end date of the date range. Used when selects="end" or for range selection.',
      table: { type: { summary: 'Date | undefined' } },
    },
    customClassName: {
      control: 'text',
      description: 'Custom CSS class name to apply to the date picker header.',
      table: { type: { summary: 'string' } },
    },
    popperClassName: {
      control: 'text',
      description: 'Custom CSS class name to apply to the popper (dropdown) container.',
      table: { type: { summary: 'string' } },
    },
    calendarClassName: {
      control: 'text',
      description: 'Custom CSS class name to apply to the calendar container.',
      table: { type: { summary: 'string' } },
    },
    customTimeInput: {
      control: false,
      description: 'Custom React element for time input. When provided, enables time selection.',
      table: { type: { summary: 'ReactElement' } },
    },
    language: {
      control: 'text',
      description:
        'Language code for localization (e.g., "en", "ru"). Requires locale registration via registerDatePickerLocale.',
      table: { type: { summary: 'string' } },
    },
    yearsOptions: {
      control: false,
      description:
        'Array of year numbers to display in the year dropdown. If empty, defaults to years from current year.',
      table: { type: { summary: 'number[]' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed in the input field.',
      table: { type: { summary: 'string' } },
    },
    dateFormat: {
      control: 'text',
      description: 'Format string for displaying the date (e.g., "MM-dd-yyyy", "dd/MM/yyyy").',
      table: { type: { summary: 'string' } },
    },
    selects: {
      control: 'select',
      options: ['start', 'end', 'none'],
      description:
        'Specifies the selection mode: "start" for start date, "end" for end date, "none" for single date selection.',
      table: { type: { summary: "'start' | 'end' | 'none'" } },
    },
    value: {
      control: 'date',
      description: 'The currently selected date value.',
      table: { type: { summary: 'Date | null' } },
    },
  },
  args: {
    disabled: false,
    shouldCloseOnSelect: true,
    fixedHeight: false,
    language: 'en',
    placeholder: 'MM-DD-YYYY',
    dateFormat: 'MM-dd-yyyy',
    selects: 'start',
    value: null,
    startDate: undefined,
    endDate: undefined,
    customClassName: '',
    popperClassName: '',
    calendarClassName: '',
    yearsOptions: [],
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>Default DatePicker:</div>
        <DatePicker {...args} value={date} onChange={setDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const Single: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>Single DatePicker:</div>
        <DatePicker {...args} value={date} onChange={setDate} selects="none" />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const Range: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [startDate, setStartDate] = useState<Date | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [endDate, setEndDate] = useState<Date | null>(null);
    return (
      <div style={{ padding: '200px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>Range DatePicker:</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <div style={{ marginBottom: '5px', fontSize: '12px' }}>Start Date:</div>
            <DatePicker
              {...args}
              value={startDate}
              startDate={startDate || undefined}
              endDate={endDate || undefined}
              onChange={setStartDate}
              selects="start"
            />
          </div>
          <div>
            <div style={{ marginBottom: '5px', fontSize: '12px' }}>End Date:</div>
            <DatePicker
              {...args}
              value={endDate}
              startDate={startDate || undefined}
              endDate={endDate || undefined}
              onChange={setEndDate}
              selects="end"
            />
          </div>
        </div>
        {(startDate || endDate) && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Range: {startDate?.toLocaleDateString() || '...'} -{' '}
            {endDate?.toLocaleDateString() || '...'}
          </div>
        )}
      </div>
    );
  },
};

export const WithLocale: Story = {
  render: (args) => {
    registerDatePickerLocale('ru', ru);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>DatePicker with Russian locale:</div>
        <DatePicker {...args} language="ru" value={date} onChange={setDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString('ru-RU')}
          </div>
        )}
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>Disabled DatePicker:</div>
        <DatePicker {...args} />
      </div>
    );
  },
};

export const WithCustomDateFormat: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>DatePicker with custom format (dd/MM/yyyy):</div>
        <DatePicker
          {...args}
          dateFormat="dd/MM/yyyy"
          placeholder="DD/MM/YYYY"
          value={date}
          onChange={setDate}
        />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const WithCustomYears: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(new Date(2020, 0, 1));
    // Generate years from 2020 to 2030 (inclusive)
    const customYears = Array.from({ length: 11 }, (_, i) => 2020 + i);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>DatePicker with custom years range (2020-2030):</div>
        <DatePicker {...args} yearsOptions={customYears} value={date} onChange={setDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const WithHeaderNodes: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>DatePicker with custom header nodes:</div>
        <DatePicker
          {...args}
          headerNodes={
            <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
              Custom Header
            </div>
          }
          value={date}
          onChange={setDate}
        />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const ShouldNotCloseOnSelect: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>DatePicker that stays open after selection:</div>
        <DatePicker {...args} shouldCloseOnSelect={false} value={date} onChange={setDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const FixedHeight: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>DatePicker with fixed height calendar:</div>
        <DatePicker {...args} fixedHeight={true} value={date} onChange={setDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

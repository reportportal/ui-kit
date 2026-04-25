import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { ru } from 'date-fns/locale';
import { DatePicker } from './datePicker';
import { registerDatePickerLocale } from './utils';

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
      table: { type: { summary: '(date: Date | null) => void' } },
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
    value: {
      control: 'date',
      description:
        'The currently selected date value (Date for single mode, [Date | null, Date | null] tuple for range mode).',
      table: { type: { summary: 'Date | null | [Date | null, Date | null]' } },
    },
    selectsRange: {
      control: 'boolean',
      description:
        'Enables range selection mode. When true, allows selecting a date range in a single field.',
      table: { type: { summary: 'boolean' } },
    },
    minDate: {
      control: 'date',
      description:
        'Earliest selectable calendar day (react-datepicker minDate). Omitted when unset; null is normalized to undefined.',
      table: { type: { summary: 'Date | null | undefined' } },
    },
    maxDate: {
      control: 'date',
      description:
        'Latest selectable calendar day (react-datepicker maxDate). Omitted when unset; null is normalized to undefined.',
      table: { type: { summary: 'Date | null | undefined' } },
    },
  },
  args: {
    disabled: false,
    shouldCloseOnSelect: true,
    fixedHeight: false,
    language: 'en',
    placeholder: 'MM-DD-YYYY',
    dateFormat: 'MM-dd-yyyy',
    value: null,
    customClassName: '',
    popperClassName: '',
    calendarClassName: '',
    yearsOptions: [],
    selectsRange: false,
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
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
        <DatePicker value={date} onChange={setDate} />
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
  render: () => {
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
        <DatePicker value={date} onChange={setDate} />
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
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;

    return (
      <div style={{ padding: '200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>Range DatePicker</div>
        <DatePicker selectsRange value={dateRange} onChange={(dates) => setDateRange(dates)} />
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
          <div>Start: {startDate?.toLocaleDateString() ?? 'Not selected'}</div>
          <div>End: {endDate?.toLocaleDateString() ?? 'Not selected'}</div>
        </div>
      </div>
    );
  },
};

export const WithLocale: Story = {
  render: () => {
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
        <DatePicker language="ru" value={date} onChange={setDate} />
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
  render: () => {
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
        <DatePicker disabled />
      </div>
    );
  },
};

export const WithMinMaxBounds: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(new Date(2026, 3, 15));
    const minDate = new Date(2026, 3, 10);
    const maxDate = new Date(2026, 3, 22);

    return (
      <div
        style={{
          padding: '100px 200px 400px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: 420,
        }}
      >
        <div>
          Single DatePicker with <strong>minDate</strong> and <strong>maxDate</strong> (April 10–22,
          2026). Open the calendar: days outside the range are disabled and shown with reduced
          opacity.
        </div>
        <DatePicker value={date} onChange={setDate} minDate={minDate} maxDate={maxDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const RangeWithMinMaxBounds: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
      new Date(2026, 3, 12),
      new Date(2026, 3, 18),
    ]);
    const rangeMin = new Date(2026, 3, 5);
    const rangeMax = new Date(2026, 3, 25);
    const [startDate, endDate] = dateRange;

    return (
      <div style={{ padding: '200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          Range DatePicker with calendar bounds (Apr 5–25, 2026). Same props apply in range mode.
        </div>
        <DatePicker
          selectsRange
          value={dateRange}
          onChange={(dates) => setDateRange(dates)}
          minDate={rangeMin}
          maxDate={rangeMax}
        />
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
          <div>Start: {startDate?.toLocaleDateString() ?? 'Not selected'}</div>
          <div>End: {endDate?.toLocaleDateString() ?? 'Not selected'}</div>
        </div>
      </div>
    );
  },
};

export const WithCustomDateFormat: Story = {
  render: () => {
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
  render: () => {
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
        <DatePicker yearsOptions={customYears} value={date} onChange={setDate} />
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
  render: () => {
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
  render: () => {
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
        <DatePicker shouldCloseOnSelect={false} value={date} onChange={setDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

export const DynamicHeight: Story = {
  render: () => {
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
        <div>DatePicker with dynamic height calendar:</div>
        <DatePicker fixedHeight={false} value={date} onChange={setDate} />
        {date && (
          <div style={{ fontSize: '12px', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
};

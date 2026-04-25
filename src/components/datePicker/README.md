## **DatePicker**

Width — 380px. Calendar max height — flexible.

### Props

- **value** : `Date | null` (single mode) or `[Date | null, Date | null]` when **selectsRange** is true; optional, default `null`
- **onChange** : `(date: Date | null) => void` or range tuple callback when **selectsRange** is true
- **selectsRange** : `boolean`, optional — range selection in one field (default single-date mode)
- **disabled** : `boolean`, optional, default `false`
- **minDate** : `Date | null | undefined`, optional — passed to `react-datepicker`; days strictly before this date are disabled in the calendar (shown with reduced opacity)
- **maxDate** : `Date | null | undefined`, optional — passed to `react-datepicker`; days strictly after this date are disabled in the calendar (shown with reduced opacity)
- **placeholder** : `string`, optional
- **dateFormat** : `string`, optional, default `MM-dd-yyyy`
- **shouldCloseOnSelect** : `boolean`, optional, default `true`
- **fixedHeight** : `boolean`, optional, default `true`
- **customClassName** : `string`, optional — forwarded to the custom header
- **popperClassName** : `string`, optional
- **calendarClassName** : `string`, optional
- **headerNodes** : `ReactNode`, optional
- **customTimeInput** : `ReactElement`, optional — when set, enables time selection in the picker
- **language** : `string`, optional, default `'en'` — register locales via **registerDatePickerLocale**
- **yearsOptions** : `number[]`, optional
- **popperPlacement** : Floating UI placement, optional, default `'bottom-start'`
- **onBlur** / **onFocus** : optional callbacks

### Events

- **onChange**
- **onBlur**
- **onFocus**

### Setup

- **registerDatePickerLocale** — register `date-fns` locales before using non-default **language** values.

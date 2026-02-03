import { Locale } from 'date-fns';
import { registerLocale } from 'react-datepicker';

export const registerDatePickerLocale = (language: string, locale: Locale) => {
  registerLocale(language, locale);
};

export const getYearsFrom = (start: number, extraYear: number, amountYearsToGenerate = 20) => {
  const generatedYears = new Array(amountYearsToGenerate).fill(undefined).map((_, i) => start - i);
  const end = start - amountYearsToGenerate + 1;

  if (extraYear > start) {
    return [extraYear, ...generatedYears];
  } else if (extraYear < end) {
    return [...generatedYears, extraYear];
  }

  return generatedYears;
};

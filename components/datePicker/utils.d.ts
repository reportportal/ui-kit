import { Locale } from 'date-fns';

export declare const registerDatePickerLocale: (language: string, locale: Locale) => void;
export declare const getYearsFrom: (start: number, extraYear: number, amountYearsToGenerate?: number) => number[];

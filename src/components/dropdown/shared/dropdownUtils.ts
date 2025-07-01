import { DropdownOptionType, DropdownValue } from '../types';

/**
 * Calculates the displayed value for dropdown components
 */
export const getDisplayedValue = (
  value: DropdownValue | DropdownValue[],
  options: DropdownOptionType[],
  multiSelect: boolean,
  optionAll: DropdownOptionType,
  placeholder: string,
): string | undefined => {
  // Handle "All" selection in multi-select
  if (multiSelect && Array.isArray(value) && options.length === value.length) {
    return optionAll.label;
  }

  // Get labels for selected values
  const displayedLabels = options.reduce<string[]>((labels, option) => {
    if ((Array.isArray(value) && value.includes(option.value)) || option.value === value) {
      labels.push(option.label);
    }
    return labels;
  }, []);

  if (displayedLabels.length > 0) {
    return displayedLabels.join(', ');
  }

  // Check if we have no selection
  if ((!value && value !== false && value !== 0) || (Array.isArray(value) && !value.length)) {
    return placeholder;
  }

  return undefined;
};

/**
 * Gets the formatted display value with optional formatter
 */
export const getFormattedDisplayValue = (
  value: DropdownValue | DropdownValue[],
  options: DropdownOptionType[],
  multiSelect: boolean,
  optionAll: DropdownOptionType,
  placeholder: string,
  formatDisplayedValue?: (value: string | undefined) => string,
): string => {
  const displayedValue = getDisplayedValue(value, options, multiSelect, optionAll, placeholder);

  if (!displayedValue || displayedValue === placeholder) {
    return displayedValue || '';
  }

  return formatDisplayedValue ? formatDisplayedValue(displayedValue) : displayedValue;
};

/**
 * Finds the selected option from options array
 */
export const getSelectedOption = (
  value: DropdownValue | DropdownValue[],
  options: DropdownOptionType[],
): DropdownOptionType | null => {
  const singleValue = Array.isArray(value) ? value[0] : value;
  return options.find(({ value: optionValue }) => optionValue === singleValue) || null;
};

/**
 * Calculates multi-selected items
 */
export const getMultiSelectedItems = (
  value: DropdownValue | DropdownValue[],
  options: DropdownOptionType[],
  multiSelect: boolean,
): DropdownOptionType[] | null => {
  return multiSelect && Array.isArray(value)
    ? options.filter((option) => value.includes(option.value))
    : null;
};

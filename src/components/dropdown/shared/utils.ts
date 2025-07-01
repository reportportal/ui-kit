import { DropdownOptionType } from '../types';

export const createOptionsFilter = (inputValue: string) => {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return (option: DropdownOptionType): boolean => {
    if (!inputValue) return true;

    return (
      option.label.toLowerCase().includes(lowerCasedInputValue) ||
      Boolean(option.title && option.title.toLowerCase().includes(lowerCasedInputValue))
    );
  };
};

export const filterOptions = (
  options: DropdownOptionType[],
  searchValue: string,
): DropdownOptionType[] => {
  if (!searchValue) return options;

  const filter = createOptionsFilter(searchValue);
  return options.filter(filter);
};

import { DropdownValue, DropdownOptionType, FlattenedDropdownOption } from './types';

export const calculateDefaultIndex = (
  options: DropdownOptionType[],
  selectedValue: DropdownValue | DropdownValue[],
): number => {
  const selectedValues = Array.isArray(selectedValue) ? selectedValue : [selectedValue];
  return options.findIndex(({ value }) => selectedValues.includes(value));
};

const calculateCurrentItemIndex = (index: number, itemsCount: number): number =>
  ((index % itemsCount) + itemsCount) % itemsCount;

const findNearestAvailableIndex = (options: DropdownOptionType[], index = 0, step = 1): number => {
  if (options.length === 0) {
    return 0;
  }
  if (!options[index]?.disabled) {
    return index;
  }
  const itemsCount = options.length;

  return findNearestAvailableIndex(
    options,
    calculateCurrentItemIndex(index + step, itemsCount),
    step,
  );
};

export const calculateNextIndex = (options: DropdownOptionType[], index?: number) =>
  findNearestAvailableIndex(options, index);

export const calculatePrevIndex = (options: DropdownOptionType[], index?: number) =>
  findNearestAvailableIndex(options, index, -1);

export const flattenOptions = (
  options: DropdownOptionType[],
  depth = 0,
  parent?: DropdownOptionType,
): FlattenedDropdownOption[] => {
  if (!options || options.length === 0) {
    return [];
  }
  return options.reduce<FlattenedDropdownOption[]>((acc, option) => {
    if (!option) {
      return acc;
    }
    acc.push({ option, depth, parent });
    if (option.children?.length) {
      acc.push(...flattenOptions(option.children, depth + 1, option));
    }
    return acc;
  }, []);
};

export const getLeafOptions = (options: DropdownOptionType[]): DropdownOptionType[] => {
  if (!options || options.length === 0) {
    return [];
  }
  return options.reduce<DropdownOptionType[]>((acc, option) => {
    if (!option) {
      return acc;
    }
    if (option.children?.length) {
      acc.push(...getLeafOptions(option.children));
    } else {
      acc.push(option);
    }
    return acc;
  }, []);
};

export const getOptionLeafValues = (option: DropdownOptionType): DropdownValue[] => {
  if (!option) {
    return [];
  }
  if (!option.children?.length) {
    return [option.value];
  }

  return option.children.reduce<DropdownValue[]>((acc, child) => {
    if (child) {
      acc.push(...getOptionLeafValues(child));
    }
    return acc;
  }, []);
};

import { GetOptionUniqKeyT } from './types';

export const getUniqKey = <T>(option: T, getOptionUniqKey?: GetOptionUniqKeyT<T>) => {
  return typeof option === 'string'
    ? option
    : getOptionUniqKey
      ? option[getOptionUniqKey(option)]
      : '';
};

export const isEqual = <T>(option: T, item: T): boolean => {
  if (option === item) {
    return true;
  }

  const bothAreObjects = option && item && typeof option === 'object' && typeof item === 'object';
  return Boolean(
    bothAreObjects &&
      Object.keys(option).length === Object.keys(item).length &&
      Object.entries(option)?.every(([k, v]) => isEqual(v, item[k as keyof T])),
  );
};

export const compareOptionWithItem = <T>(
  option: T,
  item: T,
  getUniqKeyCb?: GetOptionUniqKeyT<T>,
) => {
  return typeof option === 'string'
    ? option === item
    : getUniqKeyCb
      ? getUniqKeyCb(option) === getUniqKeyCb(item)
      : false;
};

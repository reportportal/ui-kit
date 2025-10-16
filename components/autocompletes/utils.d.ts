import { GetOptionUniqKeyT } from './types';

export declare const getUniqKey: <T>(option: T, getOptionUniqKey?: GetOptionUniqKeyT<T>) => string;
export declare const isEqual: <T>(option: T, item: T) => boolean;
export declare const compareOptionWithItem: <T>(option: T, item: T, getUniqKeyCb?: GetOptionUniqKeyT<T>) => boolean;

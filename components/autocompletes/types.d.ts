import { GetItemPropsOptions } from 'downshift';

export type GetOptionUniqKeyT<T> = (value: T) => keyof T;
export interface AdditionalDownshiftFields {
    isActive?: boolean;
}
export type OptionVariant = 'light' | 'dark' | string;
export type GetItemPropsT<T> = (args: GetItemPropsOptions<T> & AdditionalDownshiftFields) => GetItemPropsOptions<T> & AdditionalDownshiftFields;

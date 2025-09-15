export type GetOptionUniqKeyT<T> = (value: T) => keyof T;
export interface AdditionalDownshiftFields {
  isActive?: boolean;
}

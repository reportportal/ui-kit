/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ReactNode, useState } from 'react';
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftProps,
  DownshiftState,
  StateChangeOptions,
} from 'downshift';
import { compareOptionWithItem, getUniqKey, isEqual } from '../utils';

export type DownshiftStore<T> =
  | {
      [key: string]: boolean;
    }
  | T[];

export interface MultipleDownshiftProps<T> extends Partial<DownshiftProps<T>> {
  options: T[];
  children: (value: ControllerStateAndHelpers<T>) => ReactNode | ReactNode[];
  selectedItems: T[];
  handleUnStoredItemCb:
    | ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
    | null;
  existingItemsMap: { [key: string]: boolean };
  customizeNewSelectedValue: (value: T) => T;
  getOptionUniqKey?: (option: T) => keyof T;
  getOptionUniqKeyValue?: (option: T) => string;
  onChange: (selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void;
}

export type GetStateAndHelpersT<T> = ControllerStateAndHelpers<T> & {
  removeItem: (removedItem: T, downshift: ControllerStateAndHelpers<T> | null) => void;
  editItem: (oldItem: T, newItem: T) => void;
  handleChange: MultipleDownshiftProps<T>['onChange'];
  getOptionUniqKeyValue?: (option: T) => string;
  storedItemsMap: MultipleDownshiftProps<T>['existingItemsMap'];
};

export const MultipleDownshift = <T,>({
  options = [],
  onChange,
  selectedItems = [],
  handleUnStoredItemCb = null,
  existingItemsMap = {},
  children,
  customizeNewSelectedValue = (value) => value,
  getOptionUniqKey,
  getOptionUniqKeyValue,
  ...props
}: MultipleDownshiftProps<T>) => {
  const [storedItemsMap, setStoredItems] = useState(existingItemsMap);

  const collectStoredItems = (
    newItemData: T[],
    collectStoredItemsCb: (value: DownshiftStore<T>) => void,
  ) => {
    const newState = {
      ...storedItemsMap,
    };

    newItemData.forEach((item) => {
      if (options.find((option) => compareOptionWithItem(option, item, getOptionUniqKey))) {
        const key = getUniqKey(item, getOptionUniqKey) as string;
        newState[key] = true;
      }
    });
    setStoredItems(newState);
    collectStoredItemsCb(newState);
  };
  const filterStoredItems = (
    removedItem: T,
    filterStoredItemsCb: (value: DownshiftStore<T>) => void,
  ) => {
    const removedItemKey = getUniqKey(removedItem, getOptionUniqKey) as string;

    if (removedItemKey in storedItemsMap) {
      const newState = { ...storedItemsMap };
      delete newState[removedItemKey];
      setStoredItems(newState);
      filterStoredItemsCb(newState);
    } else {
      filterStoredItemsCb(storedItemsMap);
    }
  };

  const addSelectedItem = (newItemData: T, downshift: ControllerStateAndHelpers<T>) => {
    const customizedNewItemData = customizeNewSelectedValue(newItemData);
    const newItem = Array.isArray(customizedNewItemData)
      ? customizedNewItemData
      : [customizedNewItemData];
    const filteredSelectedItems = selectedItems.filter((item) => newItem.indexOf(item) < 0);
    const newSelectedItems = [...filteredSelectedItems, ...newItem];
    onChange?.(newSelectedItems, downshift);
    const collectStoredItemsCb = (storedItems: DownshiftStore<T>) =>
      handleUnStoredItemCb?.(newSelectedItems, storedItems);
    collectStoredItems(newItem, collectStoredItemsCb);
  };

  const editItem = (oldItem: T, newItem: T) => {
    const position = selectedItems.indexOf(oldItem);
    const newValue = [...selectedItems];
    newValue.splice(position, 1, newItem);
    onChange?.(newValue, null);
  };

  const removeItem = (removedItem: T, downshift: ControllerStateAndHelpers<T> | null) => {
    const newSelectedItems = selectedItems.filter((item) => !isEqual(item, removedItem));
    onChange?.(newSelectedItems, downshift);
    const filterStoredItemsCb = (storedItems: DownshiftStore<T>) =>
      handleUnStoredItemCb?.(newSelectedItems, storedItems);
    filterStoredItems(removedItem, filterStoredItemsCb);
  };

  const handleSelection = (selectedItem: T | null, downshift: ControllerStateAndHelpers<T>) => {
    if (!selectedItem) return;
    addSelectedItem(selectedItem, downshift);
  };

  const getStateAndHelpers = (downshift: ControllerStateAndHelpers<T>): GetStateAndHelpersT<T> => ({
    removeItem,
    editItem,
    handleChange: onChange,
    getOptionUniqKeyValue,
    storedItemsMap,
    ...downshift,
  });

  const stateReducer: (
    state: DownshiftState<T>,
    changes: StateChangeOptions<T>,
  ) => Partial<StateChangeOptions<T>> = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          inputValue: '',
        };
      default:
        return changes;
    }
  };

  return (
    <Downshift
      {...props}
      stateReducer={stateReducer}
      onChange={handleSelection}
      selectedItem={null}
    >
      {(downshift) => children(getStateAndHelpers(downshift))}
    </Downshift>
  );
};

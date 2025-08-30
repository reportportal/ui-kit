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
import isEqual from 'fast-deep-equal';

export interface DownshiftStore {
  [key: string | number]: boolean;
}

export interface MultipleDownshiftProps<T> extends DownshiftProps<T> {
  options: T[];
  onChange: () => void;
  children: (value: ControllerStateAndHelpers<T>) => ReactNode | ReactNode[];
  selectedItems: T[];
  handleUnStoredItemCb: ((args: any) => void) | null;
  existingItemsMap: DownshiftStore;
  customizeNewSelectedValue: (value: T) => T;
}

export const MultipleDownshift = <T,>({
  options = [],
  onChange = () => {},
  selectedItems = [],
  handleUnStoredItemCb = null,
  existingItemsMap = {},
  children,
  customizeNewSelectedValue = (value) => value,
  ...props
}: MultipleDownshiftProps<T>) => {
  const [storedItemsMap, setStoredItems] = useState(existingItemsMap);

  const collectStoredItems = (
    newItemData: T[],
    collectStoredItemsCb: (value: DownshiftStore) => void,
  ) => {
    const newState = {
      ...storedItemsMap,
    };
    newItemData.forEach((item) => {
      if (options.includes(item)) {
        if (typeof item === 'string') newState[item] = true;
        // else todo
      }
    });
    setStoredItems(newState);
    collectStoredItemsCb(newState);
  };
  const filterStoredItems = (
    removedItem: T,
    filterStoredItemsCb: (value: DownshiftStore) => void,
  ) => {
    if (typeof removedItem === 'string') {
      if (removedItem in storedItemsMap) {
        const newState = { ...storedItemsMap };
        delete newState[removedItem];
        setStoredItems(newState);
        filterStoredItemsCb(newState);
      } else {
        filterStoredItemsCb(storedItemsMap);
      }
    }
  };
  const addSelectedItem = (newItemData, downshift) => {
    const customizedNewItemData = customizeNewSelectedValue(newItemData);
    const newItem = Array.isArray(customizedNewItemData)
      ? customizedNewItemData
      : [customizedNewItemData];
    const filteredSelectedItems = selectedItems.filter((item) => newItem.indexOf(item) < 0);
    const newSelectedItems = [...filteredSelectedItems, ...newItem];
    onChange(newSelectedItems, downshift);
    const collectStoredItemsCb = (storedItems) =>
      handleUnStoredItemCb?.(newSelectedItems, storedItems);
    collectStoredItems(newItem, collectStoredItemsCb);
  };
  const editItem = (oldItem, newItem) => {
    const position = selectedItems.indexOf(oldItem);
    const newValue = [...selectedItems];
    newValue.splice(position, 1, newItem);
    onChange(newValue);
  };
  const removeItem = (removedItem, downshift) => {
    const newSelectedItems = selectedItems.filter((item) => !isEqual(item, removedItem));
    onChange(newSelectedItems, downshift);
    const filterStoredItemsCb = (storedItems) =>
      handleUnStoredItemCb?.(newSelectedItems, storedItems);
    filterStoredItems(removedItem, filterStoredItemsCb);
  };
  const handleSelection = (selectedItem, downshift) => {
    if (!selectedItem) return;
    addSelectedItem(selectedItem, downshift);
  };
  const getStateAndHelpers = (downshift: ControllerStateAndHelpers<T>) => ({
    removeItem,
    editItem,
    handleChange: onChange,
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
// MultipleDownshift.propTypes = {
//   options: PropTypes.array,
//   onChange: PropTypes.func,
//   children: PropTypes.func.isRequired,
//   selectedItems: PropTypes.array,
//   handleUnStoredItemCb: PropTypes.func,
//   existingItemsMap: PropTypes.shape({
//     value: PropTypes.bool,
//   }),
//   customizeNewSelectedValue: PropTypes.func,
// };

// MultipleDownshift.defaultProps = {
//   options: [],
//   onChange: () => {},
//   selectedItems: [],
//   handleUnStoredItemCb: null,
//   existingItemsMap: {},
//   customizeNewSelectedValue: (value) => value,
// };

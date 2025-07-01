import { useCallback } from 'react';
import { DropdownOptionType, DropdownValue } from '../types';

export interface UseDropdownLogicProps {
  value: DropdownValue | DropdownValue[];
  options: DropdownOptionType[];
  multiSelect: boolean;
  onChange: (value: DropdownValue | DropdownValue[]) => void;
  onSelectAll?: () => void;
  isOptionAllVisible?: boolean;
  onClose?: () => void; // For components that need to close after selection
}

export const useDropdownLogic = ({
  value,
  options,
  multiSelect,
  onChange,
  onSelectAll,
  isOptionAllVisible = false,
  onClose,
}: UseDropdownLogicProps) => {
  /**
   * Handle selecting/deselecting individual options
   */
  const handleChange = useCallback(
    (option: DropdownOptionType) => {
      if (option.disabled) {
        return;
      }

      if (multiSelect) {
        const newValue = Array.isArray(value) ? [...value] : [];
        const index = newValue.indexOf(option.value);

        if (index === -1) {
          newValue.push(option.value);
        } else {
          newValue.splice(index, 1);
        }

        onChange(newValue);
      } else {
        onChange(option.value);
        // Close dropdown for single-select after selection
        onClose?.();
      }
    },
    [value, multiSelect, onChange, onClose],
  );

  /**
   * Handle "Select All" functionality for multi-select
   */
  const handleSelectAll = useCallback(() => {
    if (isOptionAllVisible && Array.isArray(value)) {
      const allValues = options.map((item) => item.value);
      const isAllSelected = value.length === options.length;

      onChange(isAllSelected ? [] : allValues);
      onSelectAll?.();
    }
  }, [isOptionAllVisible, value, options, onChange, onSelectAll]);

  /**
   * Check if all options are selected (for "All" checkbox state)
   */
  const isAllSelected = multiSelect && Array.isArray(value) && value.length === options.length;

  /**
   * Check if some (but not all) options are selected (for "All" checkbox partial state)
   */
  const isSomeSelected =
    multiSelect && Array.isArray(value) && value.length > 0 && value.length < options.length;

  return {
    handleChange,
    handleSelectAll,
    isAllSelected,
    isSomeSelected,
  };
};

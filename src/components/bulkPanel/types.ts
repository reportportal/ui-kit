import { ReactNode } from 'react';
import { ButtonProps } from '@components/button';

export interface BulkPanelItem {
  id: string | number;
  label?: string;
  name?: string;
  tooltipContent?: ReactNode;
}

export interface BulkPanelAction {
  label: string;
  variant?: ButtonProps['variant'];
  disabled?: boolean;
  onClick?: () => void;
  /**
   * Called to validate items. May be called multiple times if items change.
   * Should return INELIGIBLE items array.
   * If not provided or returns empty array - all items are eligible and onProceed is called immediately.
   */
  onValidate?: (items: BulkPanelItem[]) => BulkPanelItem[];
  /**
   * @param direct - true if all items were eligible and proceed was called directly, false if called via Proceed button
   */
  onProceed: (eligibleItems: BulkPanelItem[], direct?: boolean) => void;
}

export interface BulkPanelCaptions {
  selected?: string;
  clearSelection?: string;
  selectedItems?: string;
  eligibleTab?: string;
  ineligibleTab?: string;
  ineligibleInfoMessage?: (ineligibleCount: number) => ReactNode | string;
  cancelButton?: (actionLabel: string) => ReactNode | string;
  proceedButton?: (eligibleCount: number) => ReactNode | string;
}

export interface BulkPanelProps {
  items: BulkPanelItem[];
  actions?: BulkPanelAction[];
  captions?: BulkPanelCaptions;
  infoMessage?: ReactNode;
  className?: string;
  portalRoot?: Element;
  onRemoveItem: (id: string | number) => void;
  onClearSelection: () => void;
}

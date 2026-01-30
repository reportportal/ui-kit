import { ComponentPropsWithRef } from '../../../node_modules/react';

export interface FiltersButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'type'> {
    appliedFiltersCount?: number;
    isOpen?: boolean;
    type?: 'button' | 'submit';
    text?: string;
    filtersLabelClassName?: string;
    clearable?: boolean;
    onClear?: () => void;
    clearButtonAriaLabel?: string;
}
export declare const FiltersButton: (props: FiltersButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>) => import('../../../node_modules/react').ReactElement<any, string | import('../../../node_modules/react').JSXElementConstructor<any>> | null;
export default FiltersButton;

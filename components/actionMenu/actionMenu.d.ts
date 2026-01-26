import { ReactNode, MouseEvent, ReactElement } from '../../../node_modules/react';
import { PopoverProps } from '../popover/popover';

export interface ActionItem {
    id?: string;
    label: string;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    hasPermission?: boolean;
    disabled?: boolean;
    className?: string;
}
export interface DividerItem {
    type: 'divider';
}
export type MenuItem = ActionItem | DividerItem | ReactNode;
export declare const ActionMenuItem: ({ className, children, ...props }: {
    [key: string]: unknown;
    className?: string | undefined;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export interface ActionMenuProps extends Pick<PopoverProps, 'placement'> {
    items?: MenuItem[];
    cleanupDividers?: boolean;
    className?: string;
    contentClassName?: string;
    buttonClassName?: string;
    popoverClassName?: string;
    menuClassName?: string;
    ariaLabel?: string;
    trigger?: ReactNode;
    disabled?: boolean;
}
export declare const ActionMenu: ({ placement, items, cleanupDividers, className, contentClassName, buttonClassName, popoverClassName, menuClassName, ariaLabel, trigger, disabled, }: ActionMenuProps) => ReactElement | null;

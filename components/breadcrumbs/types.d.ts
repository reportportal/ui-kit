import { ReactNode } from '../../../node_modules/react';

export interface BreadcrumbDescriptor {
    className?: string;
    title: string | ReactNode;
    link?: object | string;
    onClick?: () => void;
}
export interface TreeDescriptor extends BreadcrumbDescriptor {
    children?: TreeDescriptor[];
}
export type LinkComponentType = React.ComponentType<{
    to: object | string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}>;
export interface BreadcrumbsProps {
    descriptors: BreadcrumbDescriptor[];
    LinkComponent?: LinkComponentType;
    tree?: TreeDescriptor[];
    dataAutomationId?: string;
    isBackButton?: boolean;
    isLastClickable?: boolean;
    isSingleItemClickable?: boolean;
    maxShownDescriptors?: number;
    titleTailNumChars?: number;
    className?: string;
}

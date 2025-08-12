import { ReactNode } from '../../../../node_modules/react';
import { LinkComponentType } from '../types';

export interface BreadcrumbsContextValue {
    LinkComponent?: LinkComponentType;
}
export declare const BreadcrumbsContext: import('../../../../node_modules/react').Context<BreadcrumbsContextValue | undefined>;
interface BreadcrumbsProviderProps {
    children: ReactNode;
    LinkComponent?: LinkComponentType;
}
export declare const BreadcrumbsProvider: ({ children, LinkComponent }: BreadcrumbsProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};

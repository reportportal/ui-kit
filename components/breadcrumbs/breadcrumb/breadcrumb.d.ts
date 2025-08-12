import { BreadcrumbDescriptor } from '../types';

interface BreadcrumbProps {
    descriptor: BreadcrumbDescriptor;
    titleTailNumChars?: number;
    isClickable?: boolean;
    variant?: 'default' | 'dark';
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export {};

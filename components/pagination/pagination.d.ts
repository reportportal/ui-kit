import { ReactElement, ReactNode } from '../../../node_modules/react';
import { ChangePageSize, ChangePage } from './types';

type PaginationCaptions = {
    items?: string;
    of?: string;
    page?: string;
    goTo?: string;
    goAction?: string;
    perPage?: string;
};
export interface PaginationProps {
    activePage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
    pageSizeOptions: number[];
    changePage: ChangePage;
    changePageSize: ChangePageSize;
    captions?: PaginationCaptions;
    className?: string;
    warningContent?: ReactNode;
    limitExceeded?: boolean;
}
export declare const Pagination: ({ activePage, totalPages, pageSize, totalItems, pageSizeOptions, changePage, changePageSize, captions, className, warningContent, limitExceeded, }: PaginationProps) => ReactElement;
export {};

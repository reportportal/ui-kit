import { RefObject } from '../../../node_modules/react';

export declare function useEllipsisTitle<T extends HTMLElement = HTMLElement>(content: string | number | undefined): {
    ref: RefObject<T>;
    title: string | undefined;
};

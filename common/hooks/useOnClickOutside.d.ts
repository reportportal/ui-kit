import { RefObject } from '../../../node_modules/react';

export interface UseOnClickOutsideOptions {
    ignoreSelectors?: string[];
}
export declare function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(ref: RefObject<T>, handler?: (e?: MouseEvent) => void, options?: UseOnClickOutsideOptions): void;

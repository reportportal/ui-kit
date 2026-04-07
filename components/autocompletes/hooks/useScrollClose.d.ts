import { RefObject } from '../../../../node_modules/react';

interface UseScrollClose {
    (props: {
        skip?: boolean;
        onClose: () => void;
        menuRef: RefObject<HTMLElement | null>;
    }): void;
}
export declare const useScrollClose: UseScrollClose;
export {};

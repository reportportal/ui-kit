import { ReferenceType } from '@floating-ui/react';
import { MutableRefObject } from '../../../../node_modules/react';

interface UseResizeClose {
    (props: {
        skip?: boolean;
        reference: MutableRefObject<ReferenceType | null>;
    }): void;
}
export declare const useResizeClose: UseResizeClose;
export {};

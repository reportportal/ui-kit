import { DragEvent } from '../../../../node_modules/react';

interface UseOverlayDropAreaOptions {
    isOverlay: boolean;
}
export declare const useOverlayDropArea: ({ isOverlay }: UseOverlayDropAreaOptions) => {
    isDragActive?: boolean | undefined;
    handlers: {
        ref: import('../../../../node_modules/react').RefObject<HTMLDivElement>;
        onDragEnter: (event: DragEvent) => void;
        onDragLeave: (event: DragEvent) => void;
        onDragOver: (event: DragEvent) => void;
        onDrop: (event: DragEvent) => void;
    } | {
        ref?: undefined;
        onDragEnter?: undefined;
        onDragLeave?: undefined;
        onDragOver?: undefined;
        onDrop?: undefined;
    };
};
export {};

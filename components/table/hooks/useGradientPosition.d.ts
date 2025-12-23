export interface RightGradientPosition {
    visible: boolean;
    position: {
        top: number;
        left: number;
    };
    size: {
        width: number;
        height: number;
    };
}
export interface PinnedGradientPosition {
    visible: boolean;
    position: {
        top: number;
        left: number;
    };
    size: {
        width: number;
        height: number;
    };
}
export declare const useRightGradientPosition: (table: HTMLElement | null, header: HTMLElement | null, scrollContainer: HTMLElement | null, isHeaderPinned: boolean, scrollLeft: number, scrollTop: number, tableScrollWidth: number, gradientUpdateCounter: number) => RightGradientPosition;
export declare const usePinnedGradientPosition: (table: HTMLElement | null, scrollLeft: number, header: HTMLElement | null, scrollContainer: HTMLElement | null, isHeaderPinned: boolean, scrollTop: number, tableScrollWidth: number, gradientUpdateCounter: number) => PinnedGradientPosition;

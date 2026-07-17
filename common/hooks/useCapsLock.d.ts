type CapsLockEvent = {
    getModifierState?: (key: string) => boolean;
    nativeEvent?: {
        getModifierState?: (key: string) => boolean;
    };
    key?: string;
};
/**
 * Tracks Caps Lock state via window-level keyboard events.
 * Also exposes syncFromMouseEvent so callers can re-read the real OS state
 * from a MouseEvent (e.g. onMouseDown on the input).
 *
 * Optional-chained: autofill, password managers, and some browser/extension
 * events fire keydown/mousedown without getModifierState — calling it raw throws.
 */
export declare const useCapsLock: () => {
    capsLockOn: boolean;
    syncFromMouseEvent: (event: CapsLockEvent) => void;
};
export {};

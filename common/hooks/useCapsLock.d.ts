/**
 * Tracks Caps Lock state via window-level keyboard events.
 * Also exposes syncFromMouseEvent so callers can re-read the real OS state
 * from a MouseEvent (e.g. onMouseDown on the input) — MouseEvent.getModifierState
 * is reliable even after tab switches, unlike FocusEvent which lacks it.
 */
export declare const useCapsLock: () => {
    capsLockOn: boolean;
    syncFromMouseEvent: (event: MouseEvent) => void;
};

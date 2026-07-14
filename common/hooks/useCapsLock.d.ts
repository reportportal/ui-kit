/**
 * Tracks the OS-level Caps Lock state by listening to `keydown` on `window`.
 * Because Caps Lock is a global OS toggle, the listener is attached at window
 * level so every consumer updates simultaneously — even fields that are not
 * currently focused.
 */
export declare const useCapsLock: () => {
    capsLockOn: boolean;
};

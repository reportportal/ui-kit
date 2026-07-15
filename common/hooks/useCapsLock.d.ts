/**
 * Tracks Caps Lock via `getModifierState('CapsLock')` on keyboard events.
 * Never toggles state manually — always reads the real OS modifier state.
 * Resets to false when the browser tab becomes visible again.
 */
export declare const useCapsLock: () => {
    capsLockOn: boolean;
};

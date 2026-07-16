/*
 * Copyright 2026 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useCallback, useEffect, useState } from 'react';

/**
 * Tracks Caps Lock state via window-level keyboard events.
 * Also exposes syncFromMouseEvent so callers can re-read the real OS state
 * from a MouseEvent (e.g. onMouseDown on the input) — MouseEvent.getModifierState
 * is reliable even after tab switches, unlike FocusEvent which lacks it.
 */
export const useCapsLock = () => {
  const [capsLockOn, setCapsLockOn] = useState(false);

  const syncFromMouseEvent = useCallback((event: MouseEvent) => {
    setCapsLockOn(event.getModifierState('CapsLock'));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setCapsLockOn(event.getModifierState('CapsLock'));
    };

    // keydown fires before the OS flips the CapsLock modifier; keyup reads the new state.
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'CapsLock') {
        setCapsLockOn(event.getModifierState('CapsLock'));
      }
    };

    // Caps Lock may be toggled in another browser tab. Reset on tab return so a
    // stale icon clears immediately. The real state is re-read on the next
    // mousedown or keydown on the field.
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setCapsLockOn(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { capsLockOn, syncFromMouseEvent };
};

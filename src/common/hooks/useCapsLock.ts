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

import { useEffect, useState } from 'react';

/**
 * Tracks Caps Lock via `getModifierState('CapsLock')` on keyboard events.
 * Never toggles state manually — always reads the real OS modifier state.
 * Resets to false when the browser tab becomes visible again.
 */
export const useCapsLock = () => {
  const [capsLockOn, setCapsLockOn] = useState(false);

  useEffect(() => {
    const syncCapsLock = (event: KeyboardEvent) => {
      setCapsLockOn(event.getModifierState?.('CapsLock') ?? false);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // CapsLock keydown fires before the OS toggles the modifier; keyup reads the real state.
      if (event.key === 'CapsLock') {
        syncCapsLock(event);
      }
    };

    // Caps Lock may be toggled in another browser tab where this page receives no
    // keyboard events. Reset on tab return; the real state is re-detected on the
    // next keydown while a password field is focused.
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setCapsLockOn(false);
      }
    };

    window.addEventListener('keydown', syncCapsLock);
    window.addEventListener('keyup', handleKeyUp);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('keydown', syncCapsLock);
      window.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { capsLockOn };
};

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
 * Tracks the OS-level Caps Lock state by listening to `keydown` on `window`.
 * Resets to false when the browser tab becomes visible again, so a Caps Lock
 * toggle in another tab does not leave a stale icon on this page.
 */
export const useCapsLock = () => {
  const [capsLockOn, setCapsLockOn] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'CapsLock') {
        setCapsLockOn((prev) => !prev);
      } else {
        setCapsLockOn(event.getModifierState?.('CapsLock') ?? false);
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

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { capsLockOn };
};

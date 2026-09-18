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

import { describe, expect, it } from 'vitest';
import { AUTOCOMPLETE_PORTAL_MENU_ATTR } from '@components/autocompletes/constants';
import { DROPDOWN_PORTAL_MENU_ATTR } from '@components/dropdown';
import { MODAL_CLICK_OUTSIDE_IGNORE_SELECTORS, NOTIFICATION_PORTAL_ATTR } from './constants';

describe('Modal click-outside ignore selectors', () => {
  it('exports notification portal attribute for host apps', () => {
    expect(NOTIFICATION_PORTAL_ATTR).toBe('data-notification-portal');
  });

  it('ignores dropdown, autocomplete and notification portals', () => {
    expect(MODAL_CLICK_OUTSIDE_IGNORE_SELECTORS).toEqual([
      `[${DROPDOWN_PORTAL_MENU_ATTR}]`,
      `[${AUTOCOMPLETE_PORTAL_MENU_ATTR}]`,
      `[${NOTIFICATION_PORTAL_ATTR}]`,
    ]);
  });
});

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

import { createRef, MutableRefObject } from 'react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { NOTIFICATION_PORTAL_ATTR } from '@components/modal/constants';
import { useOnClickOutside } from './useOnClickOutside';

const dispatchPointerDown = (target: EventTarget) => {
  target.dispatchEvent(new Event('pointerdown', { bubbles: true }));
};

describe('useOnClickOutside', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('does not call handler when click is inside ignored notification portal', () => {
    const handler = vi.fn();
    const ref = createRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement | null>;
    const modal = document.createElement('div');
    const notification = document.createElement('div');
    notification.setAttribute(NOTIFICATION_PORTAL_ATTR, '');
    const closeButton = document.createElement('button');
    notification.appendChild(closeButton);
    document.body.append(modal, notification);
    ref.current = modal;

    renderHook(() =>
      useOnClickOutside(ref, handler, {
        ignoreSelectors: [`[${NOTIFICATION_PORTAL_ATTR}]`],
      }),
    );

    dispatchPointerDown(closeButton);

    expect(handler).not.toHaveBeenCalled();
  });

  it('calls handler when click is outside and not ignored', () => {
    const handler = vi.fn();
    const ref = createRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement | null>;
    const modal = document.createElement('div');
    const outside = document.createElement('div');
    document.body.append(modal, outside);
    ref.current = modal;

    renderHook(() => useOnClickOutside(ref, handler));

    dispatchPointerDown(outside);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});

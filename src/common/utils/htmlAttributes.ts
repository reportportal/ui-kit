/*
 * Copyright 2025 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Splits object properties into HTML attributes and remaining props.
 * Transforms camelCase data-* and aria-* attributes to kebab-case format
 * as required by HTML specification.
 *
 * @param attrs - Object containing properties to split
 * @returns Object with two properties:
 *   - transformed: data-* and aria-* attributes converted to kebab-case
 *   - remaining: all other properties unchanged
 *
 * @example
 * const props = { dataTestId: 'test', ariaLabel: 'Label', className: 'container' };
 * const { transformed, remaining } = splitHtmlAttributes(props);
 * // transformed: { 'data-test-id': 'test', 'aria-label': 'Label' }
 * // remaining: { className: 'container' }
 */
export const splitHtmlAttributes = (attrs: Record<string, unknown>) => {
  const transformed: Record<string, unknown> = {};
  const remaining: Record<string, unknown> = {};

  Object.entries(attrs).forEach(([key, value]) => {
    if (/^data[A-Z]/.test(key) || /^aria[A-Z]/.test(key)) {
      const kebabKey = key
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .toLowerCase();
      transformed[kebabKey] = value;
    } else {
      remaining[key] = value;
    }
  });

  return { transformed, remaining };
};

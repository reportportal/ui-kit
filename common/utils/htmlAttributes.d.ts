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
export declare const splitHtmlAttributes: (attrs: Record<string, unknown>) => {
    transformed: Record<string, unknown>;
    remaining: Record<string, unknown>;
};

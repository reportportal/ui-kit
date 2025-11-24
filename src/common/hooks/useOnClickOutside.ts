import { useEffect, RefObject } from 'react';

export interface UseOnClickOutsideOptions {
  ignoreSelectors?: string[];
}

export function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T>,
  handler?: (e?: MouseEvent) => void,
  options?: UseOnClickOutsideOptions,
) {
  useEffect(() => {
    if (!handler) {
      return undefined;
    }

    const listener = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        const shouldIgnore = options?.ignoreSelectors?.some((selector) =>
          target?.closest(selector),
        );

        if (!shouldIgnore) {
          handler(event);
        }
      }
    };

    document.addEventListener('pointerdown', listener);

    return () => {
      document.removeEventListener('pointerdown', listener);
    };
  }, [ref, handler, options]);
}

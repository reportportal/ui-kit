import { useLayoutEffect } from 'react';

type UsePreventInitialScrollProps = {
  skip?: boolean;
};

export const usePreventInitialScroll = ({ skip }: UsePreventInitialScrollProps) => {
  // Prevent page scrolling only during initial menu opening when rendered in a portal.
  // Scroll lock is active for a short period (300ms) to prevent browser auto-scroll behavior.
  useLayoutEffect(() => {
    if (skip) {
      return;
    }

    let savedScrollY = window.scrollY;
    let isLockActive = true;
    const LOCK_DURATION = 300;

    const preventScroll = () => {
      if (!isLockActive) {
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY !== savedScrollY) {
        window.scrollTo(0, savedScrollY);
      }
    };

    const handleScroll = (event: Event) => {
      if (!isLockActive) {
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      preventScroll();
    };

    savedScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: false, capture: true });

    requestAnimationFrame(() => {
      savedScrollY = window.scrollY;
      preventScroll();
    });

    const timeoutId = setTimeout(() => {
      isLockActive = false;
    }, LOCK_DURATION);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [skip]);
};

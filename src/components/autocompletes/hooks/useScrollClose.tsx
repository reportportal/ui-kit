import { useEffect, type RefObject } from 'react';

interface UseScrollClose {
  (props: { skip?: boolean; onClose: () => void; menuRef: RefObject<HTMLElement | null> }): void;
}

export const useScrollClose: UseScrollClose = ({ skip, onClose, menuRef }) => {
  useEffect(() => {
    if (skip) {
      return;
    }

    const handleScroll = (event: Event) => {
      if (menuRef.current?.contains(event.target as Node)) {
        return;
      }
      onClose();
    };

    // Capture phase (true) catches scroll from any ancestor container
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [skip, onClose, menuRef]);
};

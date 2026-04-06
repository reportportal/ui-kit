import { ReferenceType } from '@floating-ui/react';
import { useEffect, type MutableRefObject } from 'react';

interface UseResizeClose {
  (props: { skip?: boolean; reference: MutableRefObject<ReferenceType | null> }): void;
}

export const useResizeClose: UseResizeClose = ({ skip, reference }) => {
  useEffect(() => {
    if (skip) {
      return;
    }

    const handleResize = () => {
      // Downshift does not expose a direct close method here;
      // clicking outside will close it naturally, but we trigger blur on the reference element.
      const referenceElement = reference.current;
      if (referenceElement instanceof HTMLElement) {
        referenceElement.blur();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [skip, reference]);
};

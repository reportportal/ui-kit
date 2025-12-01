import { CSSProperties } from 'react';
import type { XYCoord } from 'react-dnd';

export const getPreviewStyles = (clientOffset: XYCoord | null): CSSProperties => {
  if (!clientOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = clientOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
};

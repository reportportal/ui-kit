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

export const calculateCursorBasedDropIndex = (
  fromIndex: number,
  targetIndex: number,
  isTopZone: boolean,
): number => {
  if (isTopZone) {
    // Dropping in top zone: insert BEFORE this item
    // If dragging forward (fromIndex < targetIndex)
    return fromIndex < targetIndex ? targetIndex - 1 : targetIndex;
  }
  // Dropping in bottom zone: insert AFTER this item
  // If dragging backward (fromIndex > targetIndex)
  return fromIndex > targetIndex ? targetIndex + 1 : targetIndex;
};

export const isInTopZone = (cursorY: number, elementHeight: number): boolean => {
  const threshold = elementHeight * 0.7;
  return cursorY < threshold;
};

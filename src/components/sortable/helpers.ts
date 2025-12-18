import { CSSProperties } from 'react';
import type { XYCoord } from 'react-dnd';
import type { DropPosition } from '@common/types';
import { DROP_POSITIONS } from '@common/types';

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

// Returns: DROP_POSITIONS.TOP | DROP_POSITIONS.BOTTOM | null (null = dead zone, no line)
export const getDropZone = (cursorY: number, elementHeight: number): DropPosition => {
  const relativeY = cursorY / elementHeight;

  // Dead zones at edges (5% top and bottom) to prevent jitter
  if (relativeY < 0.05 || relativeY > 0.95) {
    return null;
  }

  // Top zone: 5% to 50%
  if (relativeY < 0.5) {
    return DROP_POSITIONS.TOP;
  }

  // Bottom zone: 50% to 95%
  return DROP_POSITIONS.BOTTOM;
};

// Legacy function for compatibility
export const isInTopZone = (cursorY: number, elementHeight: number): boolean => {
  const threshold = elementHeight * 0.5;
  return cursorY < threshold;
};

// Check if cursor is in dead zone (top 5% or bottom 5% of element)
// Returns true if in dead zone (should not show any line)
export const isInDeadZone = (cursorY: number, elementHeight: number): boolean => {
  const topDeadZone = elementHeight * 0.05;
  const bottomDeadZone = elementHeight * 0.95;
  return cursorY < topDeadZone || cursorY > bottomDeadZone;
};

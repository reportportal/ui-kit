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

export const calculateCursorBasedDropIndex = ({
  fromIndex,
  targetIndex,
  isTopZone,
}: {
  fromIndex: number;
  targetIndex: number;
  isTopZone: boolean;
}) => {
  if (isTopZone) {
    const isDraggingForward = fromIndex < targetIndex;

    return isDraggingForward ? targetIndex - 1 : targetIndex;
  }

  const isDraggingBackward = fromIndex > targetIndex;

  return isDraggingBackward ? targetIndex + 1 : targetIndex;
};

export const getDropZone = (cursorY: number, elementHeight: number): DropPosition => {
  const relativeY = cursorY / elementHeight;

  // Dead zones at edges
  if (relativeY < 0.05 || relativeY > 0.95) {
    return null;
  }

  if (relativeY < 0.5) {
    return DROP_POSITIONS.TOP;
  }

  return DROP_POSITIONS.BOTTOM;
};

export const isInTopZone = (cursorY: number, elementHeight: number) => {
  const threshold = elementHeight * 0.5;

  return cursorY < threshold;
};

export const isInDeadZone = (cursorY: number, elementHeight: number) => {
  const topDeadZone = elementHeight * 0.05;
  const bottomDeadZone = elementHeight * 0.95;

  return cursorY < topDeadZone || cursorY > bottomDeadZone;
};

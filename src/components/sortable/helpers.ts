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

  if (relativeY < 0.5) {
    return DROP_POSITIONS.TOP;
  }

  return DROP_POSITIONS.BOTTOM;
};

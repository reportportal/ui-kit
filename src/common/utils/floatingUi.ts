import { Placement, ElementRects } from '@floating-ui/react';
import { TRIANGLE_WIDTH, ARROW_OFFSET, verticalPlacements } from '../constants/floatingUi';

export const getAlignmentAxisOffset = (
  rects: ElementRects,
  currentPlacement: Placement,
  arrowOffset = ARROW_OFFSET,
  isCentered = true,
): number => {
  if (isCentered) {
    return (
      ((verticalPlacements.includes(currentPlacement)
        ? rects.reference.height
        : rects.reference.width) -
        TRIANGLE_WIDTH) /
        2 -
      arrowOffset
    );
  }

  return -arrowOffset;
};

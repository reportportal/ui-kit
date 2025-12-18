import { describe, it, expect } from 'vitest';
import { calculateCursorBasedDropIndex, isInTopZone, getPreviewStyles } from './helpers';

describe('sortable helpers', () => {
  describe('isInTopZone', () => {
    it('should return true when cursor is in upper 50% of element', () => {
      expect(isInTopZone(0, 100)).toBe(true); // at top
      expect(isInTopZone(25, 100)).toBe(true); // middle of top zone
      expect(isInTopZone(49, 100)).toBe(true); // just before threshold
    });

    it('should return false when cursor is in lower 50% of element', () => {
      expect(isInTopZone(50, 100)).toBe(false); // exactly at threshold
      expect(isInTopZone(75, 100)).toBe(false); // middle of bottom zone
      expect(isInTopZone(100, 100)).toBe(false); // at bottom
    });

    it('should handle different element heights', () => {
      expect(isInTopZone(25, 50)).toBe(false); // 25 >= 50*0.5=25
      expect(isInTopZone(24, 50)).toBe(true); // 24 < 25
      expect(isInTopZone(100, 200)).toBe(false); // 100 >= 200*0.5=100
      expect(isInTopZone(99, 200)).toBe(true); // 99 < 100
    });
  });

  describe('calculateCursorBasedDropIndex', () => {
    describe('dragging forward in list (fromIndex < targetIndex)', () => {
      it('should return targetIndex-1 when dropping in top zone', () => {
        // Dragging item 0 to position before item 2 -> lands at index 1
        expect(calculateCursorBasedDropIndex(0, 2, true)).toBe(1);
        // Dragging item 1 to position before item 4 -> lands at index 3
        expect(calculateCursorBasedDropIndex(1, 4, true)).toBe(3);
      });

      it('should return targetIndex when dropping in bottom zone', () => {
        // Dragging item 0 to position after item 2 -> lands at index 2
        expect(calculateCursorBasedDropIndex(0, 2, false)).toBe(2);
        // Dragging item 1 to position after item 4 -> lands at index 4
        expect(calculateCursorBasedDropIndex(1, 4, false)).toBe(4);
      });
    });

    describe('dragging backward in list (fromIndex > targetIndex)', () => {
      it('should return targetIndex when dropping in top zone', () => {
        // Dragging item 3 to position before item 1 -> lands at index 1
        expect(calculateCursorBasedDropIndex(3, 1, true)).toBe(1);
        // Dragging item 4 to position before item 0 -> lands at index 0
        expect(calculateCursorBasedDropIndex(4, 0, true)).toBe(0);
      });

      it('should return targetIndex+1 when dropping in bottom zone', () => {
        // Dragging item 3 to position after item 1 -> lands at index 2
        expect(calculateCursorBasedDropIndex(3, 1, false)).toBe(2);
        // Dragging item 4 to position after item 2 -> lands at index 3
        expect(calculateCursorBasedDropIndex(4, 2, false)).toBe(3);
      });
    });

    describe('dragging to first position', () => {
      it('should return 0 when dropping before first item', () => {
        expect(calculateCursorBasedDropIndex(2, 0, true)).toBe(0);
        expect(calculateCursorBasedDropIndex(5, 0, true)).toBe(0);
      });

      it('should return 1 when dropping after first item', () => {
        expect(calculateCursorBasedDropIndex(2, 0, false)).toBe(1);
        expect(calculateCursorBasedDropIndex(5, 0, false)).toBe(1);
      });
    });

    describe('dragging to last position', () => {
      it('should handle dropping at last item from earlier position', () => {
        // From index 0 to last item (index 4), top zone
        expect(calculateCursorBasedDropIndex(0, 4, true)).toBe(3);
        // From index 0 to last item (index 4), bottom zone
        expect(calculateCursorBasedDropIndex(0, 4, false)).toBe(4);
      });
    });

    describe('edge cases', () => {
      it('should handle dragging to adjacent position forward', () => {
        // Dragging item 1 to item 2 (adjacent)
        expect(calculateCursorBasedDropIndex(1, 2, true)).toBe(1); // stays in place
        expect(calculateCursorBasedDropIndex(1, 2, false)).toBe(2); // moves to 2
      });

      it('should handle dragging to adjacent position backward', () => {
        // Dragging item 2 to item 1 (adjacent)
        expect(calculateCursorBasedDropIndex(2, 1, true)).toBe(1); // moves to 1
        expect(calculateCursorBasedDropIndex(2, 1, false)).toBe(2); // stays in place
      });

      it('should handle same index (should not happen but be safe)', () => {
        expect(calculateCursorBasedDropIndex(2, 2, true)).toBe(2);
        expect(calculateCursorBasedDropIndex(2, 2, false)).toBe(2);
      });
    });
  });

  describe('getPreviewStyles', () => {
    it('should return display none when no offset', () => {
      expect(getPreviewStyles(null)).toEqual({ display: 'none' });
    });

    it('should return transform styles when offset provided', () => {
      const result = getPreviewStyles({ x: 100, y: 200 });
      expect(result.transform).toBe('translate(100px, 200px)');
      expect(result.WebkitTransform).toBe('translate(100px, 200px)');
    });
  });
});

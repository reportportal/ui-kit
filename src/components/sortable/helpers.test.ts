import { describe, it, expect } from 'vitest';
import { calculateCursorBasedDropIndex, getPreviewStyles } from './helpers';

describe('sortable helpers', () => {
  describe('calculateCursorBasedDropIndex', () => {
    describe('dragging forward in list (fromIndex < targetIndex)', () => {
      it('should return targetIndex-1 when dropping in top zone', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 0, targetIndex: 2, isTopZone: true }),
        ).toBe(1);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 1, targetIndex: 4, isTopZone: true }),
        ).toBe(3);
      });

      it('should return targetIndex when dropping in bottom zone', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 0, targetIndex: 2, isTopZone: false }),
        ).toBe(2);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 1, targetIndex: 4, isTopZone: false }),
        ).toBe(4);
      });
    });

    describe('dragging backward in list (fromIndex > targetIndex)', () => {
      it('should return targetIndex when dropping in top zone', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 3, targetIndex: 1, isTopZone: true }),
        ).toBe(1);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 4, targetIndex: 0, isTopZone: true }),
        ).toBe(0);
      });

      it('should return targetIndex+1 when dropping in bottom zone', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 3, targetIndex: 1, isTopZone: false }),
        ).toBe(2);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 4, targetIndex: 2, isTopZone: false }),
        ).toBe(3);
      });
    });

    describe('dragging to first position', () => {
      it('should return 0 when dropping before first item', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 2, targetIndex: 0, isTopZone: true }),
        ).toBe(0);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 5, targetIndex: 0, isTopZone: true }),
        ).toBe(0);
      });

      it('should return 1 when dropping after first item', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 2, targetIndex: 0, isTopZone: false }),
        ).toBe(1);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 5, targetIndex: 0, isTopZone: false }),
        ).toBe(1);
      });
    });

    describe('dragging to last position', () => {
      it('should handle dropping at last item from earlier position', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 0, targetIndex: 4, isTopZone: true }),
        ).toBe(3);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 0, targetIndex: 4, isTopZone: false }),
        ).toBe(4);
      });
    });

    describe('edge cases', () => {
      it('should handle dragging to adjacent position forward', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 1, targetIndex: 2, isTopZone: true }),
        ).toBe(1);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 1, targetIndex: 2, isTopZone: false }),
        ).toBe(2);
      });

      it('should handle dragging to adjacent position backward', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 2, targetIndex: 1, isTopZone: true }),
        ).toBe(1);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 2, targetIndex: 1, isTopZone: false }),
        ).toBe(2);
      });

      it('should handle same index (should not happen but be safe)', () => {
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 2, targetIndex: 2, isTopZone: true }),
        ).toBe(2);
        expect(
          calculateCursorBasedDropIndex({ fromIndex: 2, targetIndex: 2, isTopZone: false }),
        ).toBe(2);
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

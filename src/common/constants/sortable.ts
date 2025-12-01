import type { CSSProperties } from 'react';

export const DEFAULT_SORTABLE_TYPE = 'SORTABLE_ITEM';

export const DRAG_LAYER_STYLES: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

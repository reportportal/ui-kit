import { createPortal } from 'react-dom';
import { useDragLayer, DragLayerMonitor } from 'react-dnd';
import type { DragLayerProps, DragLayerCollectedProps } from '@common/types';
import { DRAG_LAYER_STYLES } from '@common/constants/sortable';
import { getItemStyles } from '../helpers';

export const DragLayer = ({ type, renderPreview }: DragLayerProps) => {
  const { itemType, isDragging, item, clientOffset } = useDragLayer<DragLayerCollectedProps>(
    (monitor: DragLayerMonitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      clientOffset: monitor.getClientOffset(),
      isDragging: monitor.isDragging(),
    }),
  );

  if (!isDragging) {
    return null;
  }

  if (itemType !== type || !item) {
    return null;
  }

  const preview = (
    <div style={DRAG_LAYER_STYLES}>
      <div style={getItemStyles(clientOffset)}>{renderPreview(item)}</div>
    </div>
  );

  // Use portal to render outside modal to avoid transform issues
  return createPortal(preview, document.body);
};

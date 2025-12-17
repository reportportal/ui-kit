import { createPortal } from 'react-dom';
import { useDragLayer, DragLayerMonitor } from 'react-dnd';
import classNames from 'classnames/bind';

import type { DragLayerProps, DragLayerCollectedProps } from '@common/types';

import { getPreviewStyles } from '../helpers';
import styles from './dragLayer.module.scss';

const cx = classNames.bind(styles);

export const DragLayer = ({
  type,
  renderPreview,
  className,
  previewClassName,
  portalTarget = document.body,
}: DragLayerProps) => {
  const { itemType, isDragging, item, clientOffset } = useDragLayer<DragLayerCollectedProps>(
    (monitor: DragLayerMonitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      clientOffset: monitor.getClientOffset(),
      isDragging: monitor.isDragging(),
    }),
  );

  if (!isDragging || itemType !== type || !item || !portalTarget) {
    return null;
  }

  const preview = (
    <div className={cx('drag-layer', className)}>
      <div className={cx('drag-preview', previewClassName)} style={getPreviewStyles(clientOffset)}>
        {renderPreview(item)}
      </div>
    </div>
  );

  return createPortal(preview, portalTarget);
};

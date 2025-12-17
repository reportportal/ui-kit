import { useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';

import type {
  TreeSortableContainerProps,
  PendingDropInfo,
  TreeDragItem,
  TreeDropPosition,
  DropConfirmationLabels,
  DropAction,
} from '@common/types';
import { DROP_ACTIONS } from '@common/types';

import { TreeSortableContext, TreeSortableContextValue } from './TreeSortableContext';
import styles from './treeSortableContainer.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_LABELS: DropConfirmationLabels = {
  [DROP_ACTIONS.MOVE]: 'Move',
  [DROP_ACTIONS.DUPLICATE]: 'Duplicate',
  [DROP_ACTIONS.CANCEL]: 'Cancel',
};

export const TreeSortableContainer = ({
  children,
  showDropConfirmation = false,
  confirmationLabels,
  portalTarget,
  onMove,
  onDuplicate,
  onCancel,
}: TreeSortableContainerProps) => {
  const [pendingDrop, setPendingDrop] = useState<PendingDropInfo | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number } | null>(
    null,
  );
  const popoverRef = useRef<HTMLDivElement>(null);

  const labels = { ...DEFAULT_LABELS, ...confirmationLabels };

  const resetDropState = useCallback(() => {
    setPendingDrop(null);
    setPopoverPosition(null);
  }, []);

  const requestDrop = useCallback(
    (
      draggedItem: TreeDragItem,
      targetId: string | number,
      position: TreeDropPosition,
      dropElement: HTMLElement,
    ) => {
      if (!showDropConfirmation) {
        onMove?.(draggedItem, targetId, position);
        return;
      }

      const rect = dropElement.getBoundingClientRect();
      setPopoverPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 8,
      });
      setPendingDrop({ draggedItem, targetId, position });
    },
    [showDropConfirmation, onMove],
  );

  const handleAction = useCallback(
    (action: DropAction) => {
      if (!pendingDrop) {
        resetDropState();
        return;
      }

      const { draggedItem, targetId, position } = pendingDrop;

      switch (action) {
        case DROP_ACTIONS.MOVE:
          onMove?.(draggedItem, targetId, position);
          break;
        case DROP_ACTIONS.DUPLICATE:
          onDuplicate?.(draggedItem, targetId, position);
          break;
        case DROP_ACTIONS.CANCEL:
          onCancel?.();
          break;
      }

      resetDropState();
    },
    [pendingDrop, onMove, onDuplicate, onCancel, resetDropState],
  );

  const contextValue: TreeSortableContextValue = {
    showDropConfirmation,
    pendingDraggedItemId: pendingDrop?.draggedItem.id ?? null,
    pendingTargetId: pendingDrop?.targetId ?? null,
    pendingDropPosition: pendingDrop?.position ?? null,
    requestDrop,
  };

  const portalElement = portalTarget ?? (typeof document !== 'undefined' ? document.body : null);

  return (
    <TreeSortableContext.Provider value={contextValue}>
      {children}
      {pendingDrop &&
        popoverPosition &&
        portalElement &&
        createPortal(
          <div
            ref={popoverRef}
            className={cx('drop-confirmation-popover')}
            style={{
              top: popoverPosition.top,
              left: popoverPosition.left,
            }}
          >
            <button
              type="button"
              className={cx('drop-confirmation-popover__button')}
              onClick={() => handleAction(DROP_ACTIONS.MOVE)}
            >
              {labels[DROP_ACTIONS.MOVE]}
            </button>
            <button
              type="button"
              className={cx('drop-confirmation-popover__button')}
              onClick={() => handleAction(DROP_ACTIONS.DUPLICATE)}
            >
              {labels[DROP_ACTIONS.DUPLICATE]}
            </button>
            <button
              type="button"
              className={cx(
                'drop-confirmation-popover__button',
                'drop-confirmation-popover__button--cancel',
              )}
              onClick={() => handleAction(DROP_ACTIONS.CANCEL)}
            >
              {labels[DROP_ACTIONS.CANCEL]}
            </button>
          </div>,
          portalElement,
        )}
    </TreeSortableContext.Provider>
  );
};

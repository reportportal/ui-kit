/*
 * Copyright 2025 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
import { DROP_ACTIONS, TREE_DROP_POSITIONS } from '@common/types';
import { useOnClickOutside } from '@common/hooks';

import { TreeSortableContext, TreeSortableContextValue } from './TreeSortableContext';
import styles from './treeSortableContainer.module.scss';

const cx = classNames.bind(styles);

const POPOVER_OFFSET_PX = 2;

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
  onMoveExternal,
  onDuplicateExternal,
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
        const onMoveHandler = draggedItem.isExternal ? onMoveExternal : onMove;
        onMoveHandler?.(draggedItem, targetId, position);

        return;
      }

      const rect = dropElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      let top: number;

      if (position === TREE_DROP_POSITIONS.BEFORE) {
        top = rect.top + POPOVER_OFFSET_PX;
      } else if (position === TREE_DROP_POSITIONS.AFTER) {
        top = rect.top + rect.height + POPOVER_OFFSET_PX;
      } else {
        top = rect.top;
      }

      setPopoverPosition({
        top,
        left: centerX,
      });
      setPendingDrop({ draggedItem, targetId, position });
    },
    [showDropConfirmation, onMove, onMoveExternal],
  );

  const handleAction = useCallback(
    (action: DropAction) => {
      if (!pendingDrop) {
        resetDropState();
        return;
      }

      const { draggedItem, targetId, position } = pendingDrop;
      const isExternal = draggedItem.isExternal === true;

      switch (action) {
        case DROP_ACTIONS.MOVE:
          if (isExternal) {
            onMoveExternal?.(draggedItem, targetId, position);
          } else {
            onMove?.(draggedItem, targetId, position);
          }
          break;
        case DROP_ACTIONS.DUPLICATE:
          if (isExternal) {
            onDuplicateExternal?.(draggedItem, targetId, position);
          } else {
            onDuplicate?.(draggedItem, targetId, position);
          }
          break;
        case DROP_ACTIONS.CANCEL:
          onCancel?.();
          break;
      }

      resetDropState();
    },
    [
      pendingDrop,
      onMove,
      onDuplicate,
      onMoveExternal,
      onDuplicateExternal,
      onCancel,
      resetDropState,
    ],
  );

  useOnClickOutside(
    popoverRef,
    pendingDrop && showDropConfirmation ? () => handleAction(DROP_ACTIONS.CANCEL) : undefined,
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
            className={cx('drop-confirmation-popover', {
              'drop-confirmation-popover--before':
                pendingDrop.position === TREE_DROP_POSITIONS.BEFORE,
              'drop-confirmation-popover--after':
                pendingDrop.position === TREE_DROP_POSITIONS.AFTER,
              'drop-confirmation-popover--inside':
                pendingDrop.position === TREE_DROP_POSITIONS.INSIDE,
            })}
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
            <div className={cx('drop-confirmation-popover__divider')} />
            <button
              type="button"
              className={cx('drop-confirmation-popover__button')}
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

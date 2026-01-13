import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import { Scrollbars } from 'rc-scrollbars';
import { useOnClickOutside } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { Selection } from '@components/selection';
import { Chip } from '@components/chip';
import { ChevronDownDropdownIcon } from '@components/icons';
import { BulkPanelProps } from './types';
import styles from './bulkPanel.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_CAPTIONS = {
  selected: 'selected',
  clearSelection: 'Clear selection',
  selectedItems: 'Selected items',
};

export const BulkPanel = ({
  items,
  onRemoveItem,
  onClearSelection,
  className,
  captions: captionsProp,
  portalRoot,
}: BulkPanelProps) => {
  const captions = { ...DEFAULT_CAPTIONS, ...captionsProp };
  const [isExpanded, setIsExpanded] = useState(false);
  const panelContentRef = useRef<HTMLDivElement>(null);

  const handleCollapse = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isExpanded) return;

    const onKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === KeyCodes.ESCAPE_KEY_CODE) {
        handleCollapse();
      }
    };

    document.addEventListener('keydown', onKeydown, false);
    return () => document.removeEventListener('keydown', onKeydown, false);
  }, [isExpanded, handleCollapse]);

  useOnClickOutside(panelContentRef, isExpanded ? handleCollapse : undefined);

  if (items.length === 0) return null;

  const panel = (
    <div
      className={cx('bulk-panel', { expanded: isExpanded }, className)}
      role="region"
      aria-label="Bulk actions panel"
    >
      <div className={cx('panel-content', { expanded: isExpanded })} ref={panelContentRef}>
        <div className={cx('header')}>
          <div className={cx('selection-info')}>
            <button
              onClick={handleToggle}
              aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
              aria-expanded={isExpanded}
            >
              <span className={cx('expand-icon', { expanded: isExpanded })}>
                <ChevronDownDropdownIcon />
              </span>
            </button>

            <Selection
              selectedCount={items.length}
              onClearSelection={onClearSelection}
              captions={{
                selected: captions.selected,
                buttonCaption: captions.clearSelection,
              }}
            />
          </div>
        </div>

        <div className={cx('items-section')}>
          <div className={cx('items-header')}>{captions.selectedItems}</div>
          <div className={cx('items-scroll')}>
            <Scrollbars hideTracksWhenNotNeeded>
              <div className={cx('items-list')}>
                {items.map((item) => (
                  <Chip key={item.id} onRemove={() => onRemoveItem(item.id)}>
                    {item.label}
                  </Chip>
                ))}
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
    </div>
  );

  return isExpanded && portalRoot ? createPortal(panel, portalRoot) : panel;
};

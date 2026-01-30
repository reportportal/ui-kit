import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import { Scrollbars } from 'rc-scrollbars';
import { useOnClickOutside } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { Selection } from '@components/selection';
import { Chip } from '@components/chip';
import { Button } from '@components/button';
import { Tooltip } from '@components/tooltip';
import { ChevronDownDropdownIcon, WarningIcon } from '@components/icons';
import { BulkPanelAction, BulkPanelItem, BulkPanelProps } from './types';
import styles from './bulkPanel.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_CAPTIONS = {
  selected: 'selected',
  clearSelection: 'Clear selection',
  selectedItems: 'Selected items',
  eligibleTab: 'Eligible Items',
  ineligibleTab: 'Ineligible Items',
  ineligibleInfoMessage: (count: number) => (
    <>
      You have <b>{count}</b> ineligible item{count === 1 ? '' : 's'}
    </>
  ),
  cancelButton: (actionLabel: string) => `Cancel "${actionLabel}"`,
  proceedButton: (count: number) => `Proceed with ${count} Eligible Item${count === 1 ? '' : 's'}`,
};

const TABS = {
  ELIGIBLE: 'eligible',
  INELIGIBLE: 'ineligible',
};

type TabType = (typeof TABS)[keyof typeof TABS];

export const BulkPanel = ({
  items,
  actions = [],
  captions: captionsProp,
  infoMessage,
  className,
  portalRoot,
  onRemoveItem,
  onClearSelection,
}: BulkPanelProps) => {
  const captions = { ...DEFAULT_CAPTIONS, ...captionsProp };
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>(TABS.INELIGIBLE);
  const [currentAction, setCurrentAction] = useState<BulkPanelAction | null>(null);
  const panelContentRef = useRef<HTMLDivElement>(null);

  const isValidationMode = currentAction !== null;

  const { eligibleItems, ineligibleItems } = useMemo(() => {
    if (!currentAction) return { eligibleItems: [], ineligibleItems: [] };

    const ineligible = currentAction.onValidate?.(items) ?? [];
    const ineligibleIds = new Set(ineligible.map((i) => i.id));
    const eligible = items.filter((i) => !ineligibleIds.has(i.id));

    return { eligibleItems: eligible, ineligibleItems: ineligible };
  }, [items, currentAction]);

  const eligibleCount = eligibleItems.length;
  const ineligibleCount = ineligibleItems.length;
  const showProceedButton = isValidationMode && eligibleCount > 0;

  const validationInfoMessage =
    isValidationMode && ineligibleCount > 0
      ? captions.ineligibleInfoMessage(ineligibleCount)
      : null;

  const displayedItems = useMemo(() => {
    if (!isValidationMode) return items;
    if (ineligibleCount === 0) return eligibleItems;
    if (eligibleCount === 0) return ineligibleItems;
    return activeTab === TABS.ELIGIBLE ? eligibleItems : ineligibleItems;
  }, [
    isValidationMode,
    items,
    eligibleItems,
    ineligibleItems,
    activeTab,
    ineligibleCount,
    eligibleCount,
  ]);

  const handleCollapse = useCallback(() => {
    requestAnimationFrame(() => {
      setIsExpanded(false);
    });
  }, []);

  const handleActionClick = useCallback(
    (action: BulkPanelAction) => {
      action.onClick?.();

      const ineligible = action.onValidate?.(items) ?? [];

      if (ineligible.length === 0) {
        action.onProceed(items, true);
        handleCollapse();
      } else {
        setCurrentAction(action);
        setActiveTab(TABS.INELIGIBLE);
        setIsExpanded(true);
      }
    },
    [items, handleCollapse],
  );

  const handleCancel = useCallback(() => {
    const onCancel = currentAction?.onCancel;

    setCurrentAction(null);
    handleCollapse();
    onCancel?.();
  }, [currentAction, handleCollapse]);

  const handleProceed = useCallback(() => {
    currentAction?.onProceed(eligibleItems);
    setCurrentAction(null);
    handleCollapse();
  }, [currentAction, eligibleItems, handleCollapse]);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleRemoveItem = useCallback(
    (id: string | number) => {
      onRemoveItem(id);
    },
    [onRemoveItem],
  );

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

  const isIneligibleItem = (item: BulkPanelItem) => ineligibleItems.some((i) => i.id === item.id);

  const renderItem = (item: BulkPanelItem) => {
    const chip = (
      <Chip
        key={item.id}
        onRemove={() => handleRemoveItem(item.id)}
        variant={isIneligibleItem(item) && isValidationMode ? 'error' : 'default'}
      >
        {item.label ?? item.name}
      </Chip>
    );

    return (
      <div key={item.id} className={cx('item')}>
        {item.tooltipContent ? (
          <Tooltip
            wrapperClassName={cx('tooltip-wrapper')}
            key={item.id}
            content={item.tooltipContent}
            placement="top"
            width={270}
            portalRoot={portalRoot}
          >
            {chip}
          </Tooltip>
        ) : (
          chip
        )}
      </div>
    );
  };

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
          <div className={cx('header-actions')}>
            {(validationInfoMessage || infoMessage) && (
              <div className={cx('info-message-container')}>
                <i className={cx('warning-icon')}>
                  <WarningIcon />
                </i>
                <div className={cx('info-message')}>{validationInfoMessage || infoMessage}</div>
              </div>
            )}
            <div className={cx('buttons-container')}>
              {isValidationMode ? (
                <>
                  <Button variant="ghost" onClick={handleCancel}>
                    {captions.cancelButton(currentAction?.label ?? '')}
                  </Button>
                  {showProceedButton && (
                    <Button variant="primary" onClick={handleProceed}>
                      {captions.proceedButton(eligibleCount)}
                    </Button>
                  )}
                </>
              ) : (
                actions.map((action, index) => (
                  <Button
                    key={`${action.label}-${index}`}
                    variant={action.variant}
                    onClick={() => handleActionClick(action)}
                    disabled={action.disabled}
                  >
                    {action.label}
                  </Button>
                ))
              )}
            </div>
          </div>
        </div>

        <div className={cx('items-section')}>
          <div className={cx('items-header')}>
            {isValidationMode ? (
              <div className={cx('tabs')}>
                {ineligibleCount > 0 && (
                  <button
                    className={cx('tab', {
                      active: activeTab === TABS.INELIGIBLE || eligibleCount === 0,
                    })}
                    onClick={() => setActiveTab(TABS.INELIGIBLE)}
                  >
                    {captions.ineligibleTab}
                    <span className={cx('tab-count')}>{ineligibleCount}</span>
                  </button>
                )}
                {eligibleCount > 0 && (
                  <button
                    className={cx('tab', {
                      active: activeTab === TABS.ELIGIBLE || ineligibleCount === 0,
                    })}
                    onClick={() => setActiveTab(TABS.ELIGIBLE)}
                  >
                    {captions.eligibleTab}
                    <span className={cx('tab-count')}>{eligibleCount}</span>
                  </button>
                )}
              </div>
            ) : (
              captions.selectedItems
            )}
          </div>
          <div className={cx('items-scroll')}>
            <Scrollbars hideTracksWhenNotNeeded>
              <div className={cx('items-list')}>
                {displayedItems.map((item) => renderItem(item))}
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
    </div>
  );

  return isExpanded && portalRoot ? createPortal(panel, portalRoot) : panel;
};

import { ReactElement, useCallback, MouseEvent, KeyboardEvent, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { ActionMenu, ActionItem } from '../actionMenu';
import styles from './filterItem.module.scss';

const cx = classNames.bind(styles);

export interface FilterItemProps {
  id: string;
  caption: string;
  actions: ActionItem[];
  onClick?: (id: string) => void;
  onHover?: (id: string, isHovering: boolean) => void;
  className?: string;
  captionClassName?: string;
  disabled?: boolean;
  selected?: boolean;
  editMode?: boolean;
}

export const FilterItem = ({
  id,
  caption,
  actions,
  onClick,
  onHover,
  className,
  captionClassName,
  disabled = false,
  selected = false,
  editMode = false,
}: FilterItemProps): ReactElement => {
  const captionRef = useRef<HTMLDivElement>(null);
  const actionsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (captionRef.current) {
        const isTruncated = captionRef.current.scrollWidth > captionRef.current.clientWidth;
        if (isTruncated) {
          captionRef.current.setAttribute('title', caption);
        } else {
          captionRef.current.removeAttribute('title');
        }
      }
    };

    checkTruncation();

    if (typeof ResizeObserver !== 'undefined' && captionRef.current) {
      const resizeObserver = new ResizeObserver(checkTruncation);
      resizeObserver.observe(captionRef.current);

      return () => resizeObserver.disconnect();
    }
  }, [caption]);

  const handleContainerClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (disabled || editMode) return;
      if (actionsMenuRef.current?.contains(event.target as Node)) {
        return;
      }
      onClick?.(id);
    },
    [id, onClick, disabled, editMode],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' && !disabled) {
        const target = event.target as HTMLElement;
        if (target.closest('[aria-label="Actions menu"]')) {
          return;
        }
        onClick?.(id);
      }
    },
    [id, onClick, disabled],
  );

  const handleMouseEnter = useCallback(() => {
    if (!disabled) {
      onHover?.(id, true);
    }
  }, [id, onHover, disabled]);

  const handleMouseLeave = useCallback(() => {
    if (!disabled) {
      onHover?.(id, false);
    }
  }, [id, onHover, disabled]);

  const containerClassName = cx('filter-item', className, {
    selected,
    disabled,
  });

  const captionWrapperClassName = cx('caption-wrapper', captionClassName);

  return (
    <div
      className={containerClassName}
      data-filter-item-container
      onClick={handleContainerClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      <div className={captionWrapperClassName} ref={captionRef}>
        {caption}
      </div>

      <div ref={actionsMenuRef}>
        <ActionMenu
          items={actions}
          disabled={disabled || editMode}
          buttonClassName={cx('actions-button')}
          placement="bottom-start"
        />
      </div>
    </div>
  );
};

export default FilterItem;

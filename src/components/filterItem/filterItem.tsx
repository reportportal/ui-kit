/*!
 * Copyright 2026 EPAM Systems
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

import { ReactElement, useCallback, MouseEvent, KeyboardEvent, useRef } from 'react';
import classNames from 'classnames/bind';
import { useEllipsisTitle } from '@common/hooks';
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
  popoverClassName?: string;
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
  popoverClassName,
  disabled = false,
  selected = false,
  editMode = false,
}: FilterItemProps): ReactElement => {
  const { ref: captionRef, title: captionTitle } = useEllipsisTitle<HTMLDivElement>(caption);
  const actionsMenuRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (disabled || editMode) return;
      const target = event.target as HTMLElement;
      if (actionsMenuRef.current?.contains(target)) {
        return;
      }
      onClick?.(id);
    },
    [id, onClick, disabled, editMode],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' && !disabled && !editMode) {
        const target = event.target as HTMLElement;
        if (actionsMenuRef.current?.contains(target)) {
          return;
        }
        onClick?.(id);
      }
    },
    [id, onClick, disabled, editMode],
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
      <div className={captionWrapperClassName} ref={captionRef} title={captionTitle}>
        {caption}
      </div>

      <div ref={actionsMenuRef}>
        <ActionMenu
          items={actions}
          disabled={disabled || editMode}
          buttonClassName={cx('actions-button')}
          popoverClassName={popoverClassName}
          placement="bottom-start"
        />
      </div>
    </div>
  );
};

export default FilterItem;

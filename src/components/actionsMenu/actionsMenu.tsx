/*
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

import { ReactElement, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import { Placement } from '@floating-ui/react';
import { MeatballMenuIcon } from '../icons';
import { BaseIconButton } from '../baseIconButton';
import { Popover } from '../popover';
import styles from './actionsMenu.module.scss';

const cx = classNames.bind(styles);

export interface ActionsMenuItem {
  id: string;
  name: string;
  onClick?: (id: string) => void;
  className?: string;
}

export interface ActionsMenuProps {
  actions: ActionsMenuItem[];
  placement?: Placement;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  popoverClassName?: string;
  ariaLabel?: string;
}

const ActionsMenuContent = ({
  actions,
  onClose,
  menuClassName,
}: {
  actions: ActionsMenuItem[];
  onClose: () => void;
  menuClassName?: string;
}) => {
  const handleActionClick = (action: ActionsMenuItem) => {
    onClose();
    action.onClick?.(action.id);
  };

  return (
    <div className={cx('actions-menu-content', menuClassName)}>
      {actions.map((action) => (
        <button
          key={action.id}
          className={cx('actions-menu-item', action.className)}
          onClick={() => handleActionClick(action)}
          type="button"
        >
          {action.name}
        </button>
      ))}
    </div>
  );
};

export const ActionsMenu = ({
  actions,
  placement = 'bottom',
  disabled = false,
  className,
  buttonClassName,
  menuClassName,
  popoverClassName,
  ariaLabel = 'Actions menu',
}: ActionsMenuProps): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetIsOpened = useCallback(
    (opened: boolean) => {
      if (disabled) return;
      setIsMenuOpen(opened);
    },
    [disabled],
  );

  return (
    <div className={cx('actions-menu', className)}>
      <Popover
        className={cx('actions-menu-popover', popoverClassName)}
        content={
          <ActionsMenuContent
            actions={actions}
            onClose={() => setIsMenuOpen(false)}
            menuClassName={menuClassName}
          />
        }
        placement={placement}
        isOpened={disabled ? false : isMenuOpen}
        setIsOpened={handleSetIsOpened}
      >
        <BaseIconButton
          className={cx('actions-menu-button', buttonClassName)}
          disabled={disabled}
          aria-label={ariaLabel}
        >
          <MeatballMenuIcon />
        </BaseIconButton>
      </Popover>
    </div>
  );
};

export default ActionsMenu;

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

import {
  ReactNode,
  useCallback,
  useState,
  MouseEvent,
  isValidElement,
  Fragment,
  useRef,
  useEffect,
  KeyboardEvent,
  ReactElement,
} from 'react';
import { DetailsIcon } from '@components/icons';
import { BaseIconButton } from '@components/baseIconButton';
import { Popover } from '@components/popover';
import { PopoverProps } from '@components/popover/popover';
import classNames from 'classnames/bind';

import styles from './actionMenu.module.scss';

const cx = classNames.bind(styles);

export interface ActionItem {
  id?: string;
  label: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  hasPermission?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface DividerItem {
  type: 'divider';
}

export type MenuItem = ActionItem | DividerItem | ReactNode;

export const ActionMenuItem = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) => (
  <div className={cx('action-item', className)} tabIndex={-1} {...props}>
    {children}
  </div>
);

export interface ActionMenuProps extends Pick<PopoverProps, 'placement' | 'shouldUsePortal'> {
  items?: MenuItem[];
  cleanupDividers?: boolean;
  className?: string;
  contentClassName?: string;
  buttonClassName?: string;
  popoverClassName?: string;
  menuClassName?: string;
  ariaLabel?: string;
  trigger?: ReactNode;
  disabled?: boolean;
}

export const ActionMenu = ({
  placement = 'bottom-end',
  items = [],
  cleanupDividers = true,
  className,
  contentClassName,
  buttonClassName,
  popoverClassName,
  menuClassName,
  ariaLabel,
  trigger,
  disabled = false,
  shouldUsePortal,
}: ActionMenuProps): ReactElement | null => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  const handleSetIsOpened = useCallback(
    (opened: boolean) => {
      if (disabled) return;
      setIsMenuOpen(opened);
    },
    [disabled],
  );

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const firstItem = menuRef.current?.querySelector(
            `button[role="menuitem"]:not([disabled]), .${styles['action-item']}`,
          ) as HTMLElement | null;
          if (firstItem) {
            firstItem.focus();
          }
        });
      });
    }
  }, [isMenuOpen]);

  const isDivider = (item: unknown): item is DividerItem =>
    !!(item && typeof item === 'object' && 'type' in item && item.type === 'divider');

  const isVisible = (item: MenuItem): boolean => {
    if (isDivider(item)) {
      return true;
    }
    if (typeof item === 'object' && item !== null && 'hasPermission' in item) {
      return item.hasPermission !== false;
    }
    return true;
  };

  const handleMenuKeyDown = (event: KeyboardEvent) => {
    const menuItems = Array.from(
      menuRef.current?.querySelectorAll(
        `button[role="menuitem"]:not([disabled]), .${styles['action-item']}`,
      ) || [],
    ) as HTMLElement[];
    const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % menuItems.length;
      menuItems[nextIndex]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex =
        currentIndex === -1
          ? menuItems.length - 1
          : (currentIndex - 1 + menuItems.length) % menuItems.length;
      menuItems[prevIndex]?.focus();
    } else if (event.key === 'Tab') {
      event.preventDefault();
      if (event.shiftKey) {
        const prevIndex =
          currentIndex === -1
            ? menuItems.length - 1
            : (currentIndex - 1 + menuItems.length) % menuItems.length;
        menuItems[prevIndex]?.focus();
      } else {
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % menuItems.length;
        menuItems[nextIndex]?.focus();
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && menuRef.current?.contains(activeElement)) {
        activeElement.click();
        setIsMenuOpen(false);
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const menuItem = target.closest(`[role="menuitem"], .${styles['action-item']}`);

    if (menuItem && !menuItem.hasAttribute('disabled')) {
      if (target === menuItem) {
        const firstInteractive = menuItem.querySelector(
          'a, button, [role="button"], [onclick]',
        ) as HTMLElement;
        if (firstInteractive) {
          firstInteractive.click();
        }
      }
      setIsMenuOpen(false);
    }
  };

  const renderItem = (item: MenuItem, index: number) => {
    if (isDivider(item)) {
      return <div key={`divider-${index}`} className={cx('divider')} />;
    }

    if (isValidElement(item)) {
      return <Fragment key={index}>{item}</Fragment>;
    }

    if (typeof item === 'object' && item !== null && 'label' in item) {
      if (item.hasPermission === false) return null;

      return (
        <button
          key={item.id || `action-${index}`}
          ref={(el) => {
            if (el) {
              buttonRefs.current.set(index, el);
            } else {
              buttonRefs.current.delete(index);
            }
          }}
          type="button"
          role="menuitem"
          tabIndex={-1}
          className={cx('action-item', { disabled: item.disabled }, item.className)}
          disabled={item.disabled}
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            item.onClick?.(event);
          }}
        >
          {item.label}
        </button>
      );
    }

    return null;
  };

  const cleanupDividerItems = (itemsToClean: MenuItem[]): MenuItem[] => {
    if (!cleanupDividers) {
      return itemsToClean;
    }

    let cleaned = itemsToClean.filter((item) => item !== null && item !== undefined);

    if (cleaned.length === 0) {
      return cleaned;
    }

    while (cleaned.length > 0 && isDivider(cleaned[0])) {
      cleaned.shift();
    }

    while (cleaned.length > 0 && isDivider(cleaned[cleaned.length - 1])) {
      cleaned.pop();
    }

    cleaned = cleaned.filter((item, index) => {
      if (!isDivider(item)) {
        return true;
      }
      if (index === 0) {
        return true;
      }
      return !isDivider(cleaned[index - 1]);
    });

    cleaned = cleaned.filter((item, index) => {
      if (!isDivider(item)) {
        return true;
      }

      const nextIsVisible = cleaned.slice(index + 1).some((it) => isVisible(it));
      return nextIsVisible;
    });

    return cleaned;
  };
  const renderedItems = cleanupDividerItems(items).map(renderItem).filter(Boolean);

  if (renderedItems.length === 0) {
    return null;
  }

  return (
    <div className={cx('action-menu', className)}>
      <Popover
        placement={placement}
        isOpened={disabled ? false : isMenuOpen}
        setIsOpened={handleSetIsOpened}
        shouldUsePortal={shouldUsePortal}
        content={
          <div
            ref={menuRef}
            role="menu"
            tabIndex={-1}
            onKeyDown={handleMenuKeyDown}
            onClick={handleMenuClick}
            className={cx('action-dropdown', menuClassName, contentClassName)}
          >
            {renderedItems}
          </div>
        }
        className={cx('actions-popover', popoverClassName)}
      >
        {trigger ? (
          <div className={buttonClassName}>{trigger}</div>
        ) : (
          <BaseIconButton
            className={cx('action-menu-button', buttonClassName)}
            disabled={disabled}
            aria-label={ariaLabel || 'Actions menu'}
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
          >
            <DetailsIcon />
          </BaseIconButton>
        )}
      </Popover>
    </div>
  );
};

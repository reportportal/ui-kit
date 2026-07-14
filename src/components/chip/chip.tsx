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

import { ReactNode, MouseEvent, KeyboardEvent } from 'react';
import classNames from 'classnames/bind';
import { CloseIcon } from '@components/icons';
import styles from './chip.module.scss';

const cx = classNames.bind(styles);

export type ChipVariant = 'default' | 'error' | 'warning' | 'link';

export interface ChipProps {
  children: ReactNode;
  variant?: ChipVariant;
  link?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  maxWidth?: number;
  title?: string;
  disabled?: boolean;
}

export const Chip = ({
  children,
  variant = 'default',
  link,
  onClick,
  onRemove,
  className,
  maxWidth,
  title,
  disabled = false,
}: ChipProps) => {
  const isClickable = !!onClick && !disabled;
  const role = isClickable ? 'button' : undefined;
  const tabIndex = isClickable ? 0 : undefined;
  const classes = cx('chip', variant, className, {
    disabled,
    clickable: !!onClick || !!link,
    removable: !!onRemove,
  });

  const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    onRemove?.(event);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onClick?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  const content = (
    <>
      <span className={cx('label')} style={maxWidth ? { maxWidth } : undefined} title={title}>
        {children}
      </span>
      {onRemove && !disabled && (
        <button
          type="button"
          className={cx('remove-button')}
          onClick={handleRemove}
          aria-label="Remove"
        >
          <CloseIcon />
        </button>
      )}
    </>
  );

  if (link && !disabled) {
    return (
      <a
        href={link}
        className={classes}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <span
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role}
      tabIndex={tabIndex}
    >
      {content}
    </span>
  );
};

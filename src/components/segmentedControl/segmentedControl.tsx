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

import { ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './segmentedControl.module.scss';
import { SegmentedControlProps, SegmentedControlOption } from './types';

const cx = classNames.bind(styles);

export const SegmentedControl = ({
  options: initialOptions,
  onChange,
  className,
  fullWidth = false,
  ariaLabel,
}: SegmentedControlProps): ReactElement => {
  const [options, setOptions] = useState<SegmentedControlOption[]>(initialOptions);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  const handleClick = (option: SegmentedControlOption) => {
    if (!option.disabled && !option.selected) {
      const newOptions = options.map((opt) => ({
        ...opt,
        selected: opt.value === option.value,
      }));
      setOptions(newOptions);
      onChange?.(option.value);
    }
  };

  return (
    <div
      className={cx('segmented-control', className, {
        'full-width': fullWidth,
      })}
      role="group"
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cx('button', option.className, {
            active: option.selected,
            disabled: option.disabled,
          })}
          onClick={() => handleClick(option)}
          disabled={option.disabled}
          aria-pressed={option.selected}
        >
          {option.icon && <span className={cx('icon')}>{option.icon}</span>}
          {option.label}
        </button>
      ))}
    </div>
  );
};

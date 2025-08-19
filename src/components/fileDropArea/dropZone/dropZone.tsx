/*
 * Copyright 2025 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ReactNode } from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames/bind';

import { useFileDropAreaContext } from '../fileDropAreaProvider/useFileDropAreaContext';

import styles from '../fileDropArea.module.scss';

const cx = classNames.bind(styles);

interface DropZoneProps {
  icon: ReactNode;
  description?: ReactNode;
  fileSizeMessage?: string;
  className?: string;
}

export const DropZone = ({ icon, description, fileSizeMessage, className }: DropZoneProps) => {
  const {
    variant = 'default',
    error,
    isDisabled,
    isMultipleFiles,
    overlayProps,
    onDrop,
    handleDropzoneClick,
    registerOpenFunction,
  } = useFileDropAreaContext();

  const isOverlay = variant === 'overlay';

  return (
    <Dropzone multiple={isMultipleFiles} disabled={isDisabled} noClick={isOverlay} onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive, open }) => {
        registerOpenFunction(open);

        const isActive = isOverlay ? Boolean(overlayProps?.isDragActive) : isDragActive;

        return (
          <div
            {...getRootProps({
              className: cx('file-drop-area', className, {
                'file-drop-area--active': isActive,
                'file-drop-area--disabled': isDisabled,
                'file-drop-area--error': Boolean(error),
                'file-drop-area--overlay-mode': isOverlay,
              }),
              onClick: isOverlay ? undefined : handleDropzoneClick,
            })}
          >
            <input {...getInputProps()} />
            <div className={cx('file-drop-area__content')}>
              <div className={cx('file-drop-area__icon')}>{icon}</div>
              <div className={cx('file-drop-area__text')}>
                {description && (
                  <div className={cx('file-drop-area__description')}>{description}</div>
                )}
                {fileSizeMessage && (
                  <div className={cx('file-drop-area__file-size-info')}>{fileSizeMessage}</div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Dropzone>
  );
};

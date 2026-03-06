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

import { useMemo, MouseEvent, useCallback } from 'react';
import classNames from 'classnames/bind';

import {
  CloseIcon,
  CsvIcon,
  ExternalLinkIcon,
  ImageIcon,
  JarIcon,
  PdfIcon,
  XlsIcon,
  FileOtherIcon,
} from '@components/icons';
import { getFileExtension, addMiddleEllipsis } from '@common/utils';
import { VoidFn } from '@common/types';

import { TextPosition } from './types';
import styles from './attachedFile.module.scss';

const cx = classNames.bind(styles);

export interface AttachedFileProps {
  fileName: string;
  size: number;
  isFullWidth?: boolean;
  uploadingProgress?: number;
  isUploading?: boolean;
  isUploadFailed?: boolean;
  uploadFailedMessage?: string;
  onRemove?: VoidFn;
  onDownload?: VoidFn;
  withPreview?: boolean;
  textPosition?: TextPosition;
  imageSrc?: string;
}

const FILE_ICON_MAP = {
  csv: CsvIcon,
  jar: JarIcon,
  pdf: PdfIcon,
  jpg: ImageIcon,
  jpeg: ImageIcon,
  png: ImageIcon,
  gif: ImageIcon,
  svg: ImageIcon,
  webp: ImageIcon,
  xls: XlsIcon,
  xlsx: XlsIcon,
} as const;

const getFileIconByExtension = (extension: string) =>
  FILE_ICON_MAP[extension.toLowerCase() as keyof typeof FILE_ICON_MAP] ?? FileOtherIcon;

export const AttachedFile = ({
  fileName,
  size,
  uploadingProgress = 0,
  isUploadFailed = false,
  uploadFailedMessage,
  isUploading = false,
  isFullWidth = false,
  onDownload,
  onRemove,
  withPreview = false,
  textPosition = TextPosition.right,
  imageSrc,
}: AttachedFileProps) => {
  const fileExtension = useMemo(() => getFileExtension(fileName), [fileName]);
  const upperCaseExtension = fileExtension.toUpperCase();

  const FileIcon = useMemo(() => getFileIconByExtension(fileExtension), [fileExtension]);

  const handleRemove = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (!isUploading) {
        onRemove?.();
      }
    },
    [isUploading, onRemove],
  );

  const downloadFile = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (!isUploadFailed && !isUploading && onDownload) {
        onDownload();
      }
    },
    [isUploadFailed, isUploading, onDownload],
  );

  const isBottomTextPosition = textPosition === TextPosition.bottom;

  return (
    <div
      className={cx('attached-file', {
        'attached-file--failed': isUploadFailed,
        'attached-file--uploading': isUploading,
        'attached-file--full-width': isFullWidth,
        'attached-file--bottom-placed': isBottomTextPosition,
      })}
    >
      <div className={cx('attached-file__icon')}>
        {withPreview && imageSrc ? (
          <img className={cx('attached-file__thumbnail')} src={imageSrc} alt={fileName} />
        ) : (
          <div className={cx('attached-file__file-icon')}>
            <FileIcon />
          </div>
        )}
      </div>
      <div className={cx('attached-file__info')}>
        {!isBottomTextPosition && onDownload ? (
          <button type="button" className={cx('attached-file__file-name')} onClick={downloadFile}>
            <span className={cx('attached-file__name-text')}>{fileName}</span>
            {!isUploading && !isUploadFailed && (
              <span className={cx('attached-file__download-icon')}>
                <ExternalLinkIcon />
              </span>
            )}
          </button>
        ) : (
          <div
            className={cx('attached-file__file-name', {
              'attached-file__file-name--bottom-placed': isBottomTextPosition,
            })}
          >
            <span className={cx('attached-file__name-text')}>
              {isBottomTextPosition ? addMiddleEllipsis(fileName) : fileName}
            </span>
          </div>
        )}
        {!isBottomTextPosition ? (
          <>
            {!isUploadFailed && (
              <div className={cx('attached-file__file-details')}>
                {upperCaseExtension}, {size} MB
              </div>
            )}
            {isUploadFailed && (
              <div className={cx('attached-file__error-message')}>{uploadFailedMessage}</div>
            )}
          </>
        ) : null}
      </div>
      {!isBottomTextPosition ? (
        <>
          {onRemove && (
            <button
              type="button"
              className={cx('attached-file__remove-button', {
                'attached-file__remove-button--disabled': isUploading,
              })}
              disabled={isUploading}
              onClick={handleRemove}
            >
              <CloseIcon />
            </button>
          )}
          {isUploading && uploadingProgress > 0 && (
            <div className={cx('attached-file__upload-progress')}>
              <div
                className={cx('attached-file__upload-progress-bar')}
                style={{ width: `${uploadingProgress}%` }}
              />
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

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

import { useCallback, useEffect } from 'react';
import classNames from 'classnames/bind';
import { isEmpty } from 'es-toolkit/compat';

import { AttachedFile } from '@components/attachedFile';

import { useFileDropAreaContext } from '../fileDropAreaProvider/useFileDropAreaContext';
import { FileValidationError } from '../types';
import { getValidationErrorMessage } from '../utils';

import styles from './attachedFilesList.module.scss';

const cx = classNames.bind(styles);

export interface AttachmentFile {
  id: string;
  fileName: string;
  file: File;
  size: number;
  uploadingProgress?: number;
  isUploadFailed?: boolean;
  isUploading?: boolean;
  validationErrors?: FileValidationError[];
  customErrorMessage?: string;
}

interface AttachedFilesListProps {
  files: AttachmentFile[];
  className?: string;
  onRemoveFile: (fileId: string) => void;
  onDownloadFile?: (file: AttachmentFile) => void;
}

export const AttachedFilesList = ({
  files,
  className,
  onRemoveFile,
  onDownloadFile,
}: AttachedFilesListProps) => {
  const { messages, clearError } = useFileDropAreaContext();

  useEffect(() => {
    const hasFilesWithValidationErrors = files.some((file) => !isEmpty(file.validationErrors));

    if (hasFilesWithValidationErrors) {
      clearError();
    }
  }, [files, clearError]);

  const handleFileRemoval = useCallback(
    (file: AttachmentFile) => () => onRemoveFile(file.id),
    [onRemoveFile],
  );

  const handleFileDownload = useCallback(
    (file: AttachmentFile) => () => onDownloadFile?.(file),
    [onDownloadFile],
  );

  if (isEmpty(files)) {
    return null;
  }

  return (
    <div className={cx('attached-files-list', className)}>
      {files.map((file) => {
        const validationErrorMessage = getValidationErrorMessage(
          file.validationErrors ?? [],
          messages,
          file.customErrorMessage,
        );

        return (
          <AttachedFile
            key={file.id}
            fileName={file.fileName}
            size={file.size}
            uploadingProgress={file.uploadingProgress}
            isUploadFailed={file.isUploadFailed || Boolean(validationErrorMessage)}
            isUploading={file.isUploading}
            onRemove={handleFileRemoval(file)}
            {...(validationErrorMessage && { uploadFailedMessage: validationErrorMessage })}
            {...(onDownloadFile && { onDownload: handleFileDownload(file) })}
          />
        );
      })}
    </div>
  );
};

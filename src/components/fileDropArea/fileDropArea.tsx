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

import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';

import { useFileDropArea } from './hooks/useFileDropArea';
import { useOverlayDropArea } from './hooks/useOverlayDropArea';
import { BrowseButton } from './browseButton';
import { ErrorMessage } from './errorMessage';
import { DropZone } from './dropZone';
import { FileDropAreaProvider } from './fileDropAreaProvider';
import { AttachedFilesList } from './attachedFilesList';
import { FileDropAreaBaseConfig, FileWithValidation } from './types';

import styles from './fileDropArea.module.scss';

const cx = classNames.bind(styles);

interface FileDropAreaProps extends FileDropAreaBaseConfig {
  variant?: 'default' | 'overlay';
  onFilesAdded: (files: FileWithValidation[]) => void;
}

interface FileDropAreaComposite extends FC<PropsWithChildren<FileDropAreaProps>> {
  DropZone: typeof DropZone;
  BrowseButton: typeof BrowseButton;
  Error: typeof ErrorMessage;
  AttachedFilesList: typeof AttachedFilesList;
}

export const FileDropArea: FileDropAreaComposite = ({
  maxFileSize,
  acceptFileMimeTypes,
  isMultipleFiles,
  isDisabled,
  variant = 'default',
  children,
  messages,
  onFilesAdded,
}) => {
  const isOverlay = variant === 'overlay';
  const dropAreaProps = useFileDropArea({
    maxFileSize,
    acceptFileMimeTypes,
    messages,
    isMultipleFiles,
    isDisabled,
    onFilesAdded,
  });
  const overlayProps = useOverlayDropArea({
    isOverlay,
  });

  const renderChildren = () => {
    if (isOverlay) {
      return (
        <div className={cx('file-drop-area--overlay')} {...overlayProps.handlers}>
          {children}
        </div>
      );
    }

    return children;
  };

  return (
    <FileDropAreaProvider
      {...dropAreaProps}
      variant={variant}
      messages={messages}
      overlayProps={overlayProps}
      isDisabled={isDisabled}
      isMultipleFiles={isMultipleFiles}
    >
      {renderChildren()}
    </FileDropAreaProvider>
  );
};

FileDropArea.DropZone = DropZone;
FileDropArea.BrowseButton = BrowseButton;
FileDropArea.Error = ErrorMessage;
FileDropArea.AttachedFilesList = AttachedFilesList;

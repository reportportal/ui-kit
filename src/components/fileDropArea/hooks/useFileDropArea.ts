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

import { useCallback } from 'react';

import { FileDropAreaBaseConfig, FileWithValidation } from '../types';
import { useFileProcessing } from './useFileProcessing';
import { DEFAULT_MAX_FILE_SIZE } from '../constants';

interface UseFileDropAreaOptions extends FileDropAreaBaseConfig {
  onFilesAdded: (files: FileWithValidation[]) => void;
}

export const useFileDropArea = ({
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  acceptFileMimeTypes = [],
  onFilesAdded,
}: UseFileDropAreaOptions) => {
  const { onDrop, handleFileInputChange, error, clearError } = useFileProcessing({
    maxFileSize,
    acceptFileMimeTypes,
    onFilesAdded,
  });

  const handleDropzoneClick = useCallback(() => {
    clearError();
  }, [clearError]);

  return {
    error,
    onDrop,
    handleDropzoneClick,
    handleFileInputChange,
    clearError,
  };
};

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

import { ChangeEvent, useCallback, useState } from 'react';
import { isEmpty } from 'es-toolkit/compat';

import {
  FileValidationError as ValidationError,
  FileValidationOptions,
  FileWithValidation,
} from '../types';
import { validateFile } from '../utils';
import { DEFAULT_MAX_FILE_SIZE } from '../constants';

interface FileProcessingOptions extends FileValidationOptions {
  onFilesAdded: (files: FileWithValidation[]) => void;
}

export const useFileProcessing = ({
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  acceptFileMimeTypes = [],
  onFilesAdded,
}: FileProcessingOptions) => {
  const [error, setError] = useState<ValidationError | null>(null);

  const processFiles = useCallback(
    (files: File[]) => {
      setError(null);

      const validatedFiles: FileWithValidation[] = files.map((file) => ({
        file,
        validationErrors: validateFile(file, { maxFileSize, acceptFileMimeTypes }),
      }));

      onFilesAdded(validatedFiles);

      const firstErrorResult = validatedFiles.find(
        ({ validationErrors }) => !isEmpty(validationErrors),
      );

      if (firstErrorResult) {
        setError(firstErrorResult.validationErrors[0]);
      }
    },
    [maxFileSize, acceptFileMimeTypes, onFilesAdded],
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      processFiles(acceptedFiles);
    },
    [processFiles],
  );

  const handleFileInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.currentTarget;

      if (files) {
        processFiles([...files]);
      }

      event.currentTarget.value = '';
    },
    [processFiles],
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    onDrop,
    handleFileInputChange,
    error,
    clearError,
  };
};

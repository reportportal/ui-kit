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

import { getFileExtension } from '@common/utils';

import { FileValidationOptions, FileValidationError } from '../types';
import { isEmpty } from 'es-toolkit/compat';

export const validateFile = (file: File, options: FileValidationOptions): FileValidationError[] => {
  const { maxFileSize, acceptFileMimeTypes = [] } = options;
  const errors: FileValidationError[] = [];

  if (maxFileSize && file.size > maxFileSize) {
    errors.push(FileValidationError.INCORRECT_FILE_SIZE);
  }

  if (!isEmpty(acceptFileMimeTypes)) {
    const fileExtension = getFileExtension(file.name);
    const isValidType = acceptFileMimeTypes.some((type) =>
      type.startsWith('.') ? fileExtension === type.slice(1) : file.type === type,
    );

    if (!isValidType) {
      errors.push(FileValidationError.INCORRECT_FILE_FORMAT);
    }
  }

  return errors;
};

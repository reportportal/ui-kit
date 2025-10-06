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

import { isEmpty } from 'es-toolkit/compat';

import { FileValidationError, FileValidationMessages } from '../types';

export const getValidationErrorMessage = (
  errors: FileValidationError[],
  messages: FileValidationMessages,
  customErrorMessage?: string,
) => {
  if (customErrorMessage) {
    return customErrorMessage;
  }

  if (isEmpty(errors)) {
    return null;
  }

  const validationErrorMessage = {
    [FileValidationError.INCORRECT_FILE_SIZE]: messages.incorrectFileSize,
    [FileValidationError.INCORRECT_FILE_FORMAT]: messages.incorrectFileFormat,
  };

  return validationErrorMessage[errors[0]];
};

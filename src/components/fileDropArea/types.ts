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

export const MIME_TYPES = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  webp: 'image/webp',
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  csv: 'text/csv',
  txt: 'text/plain',
  zip: 'application/zip',
  mp4: 'video/mp4',
  mov: 'video/quicktime',
  avi: 'video/x-msvideo',
  xml: 'application/xml',
  html: 'text/html',
  javascript: 'application/javascript',
  json: 'application/json',
  css: 'text/css',
  php: 'application/x-httpd-php',
  har: 'application/json',
  rar: 'application/vnd.rar',
  tgz: 'application/gzip',
  taz: 'application/x-compress',
  tar: 'application/x-tar',
  gzip: 'application/gzip',
  plain: 'text/plain',
  image: 'image/*',
  jar: 'application/java-archive',
  gtar: 'application/x-gtar',
  kml: 'application/vnd.google-earth.kml+xml',
} as const;

export type MimeType = (typeof MIME_TYPES)[keyof typeof MIME_TYPES];

export enum FileValidationError {
  INCORRECT_FILE_SIZE = 'INCORRECT_FILE_SIZE',
  INCORRECT_FILE_FORMAT = 'INCORRECT_FILE_FORMAT',
}

export interface FileValidationMessages {
  incorrectFileSize: string;
  incorrectFileFormat: string;
}

export interface FileValidationOptions {
  acceptFileMimeTypes: MimeType[];
  maxFileSize: number;
}

export interface FileWithValidation {
  file: File;
  validationErrors: FileValidationError[];
}

export interface FileDropAreaBaseConfig extends FileValidationOptions {
  messages: FileValidationMessages;
  isMultipleFiles?: boolean;
  isDisabled?: boolean;
}

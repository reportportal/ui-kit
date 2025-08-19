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

import classNames from 'classnames/bind';

import { useFileDropAreaContext } from '../fileDropAreaProvider/useFileDropAreaContext';
import { getValidationErrorMessage } from '@components/fileDropArea/utils';

import styles from '../fileDropArea.module.scss';

const cx = classNames.bind(styles);

interface ErrorMessageProps {
  className?: string;
}

export const ErrorMessage = ({ className }: ErrorMessageProps) => {
  const { error, messages } = useFileDropAreaContext();

  if (!error) {
    return null;
  }

  return (
    <div
      className={cx('file-drop-area__error-message', className)}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {getValidationErrorMessage([error], messages) || error}
    </div>
  );
};

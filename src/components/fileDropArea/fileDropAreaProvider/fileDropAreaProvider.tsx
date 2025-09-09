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

import { createContext, PropsWithChildren, useCallback, useMemo, useRef } from 'react';

import { VoidFn } from '@common/types';
import { useFileDropArea } from '../hooks/useFileDropArea';
import { useOverlayDropArea } from '../hooks/useOverlayDropArea';
import { FileValidationMessages } from '../types';

export interface FileDropAreaProviderProps extends ReturnType<typeof useFileDropArea> {
  messages: FileValidationMessages;
  isMultipleFiles?: boolean;
  isDisabled?: boolean;
  variant?: 'default' | 'overlay';
  overlayProps?: ReturnType<typeof useOverlayDropArea>;
  registerOpenFunction: (openFunc: VoidFn) => void;
  openFileDialog: VoidFn;
}

export const FileDropAreaContext = createContext<FileDropAreaProviderProps | null>(null);

FileDropAreaContext.displayName = 'FileDropAreaContext';

export const FileDropAreaProvider = ({
  children,
  ...props
}: PropsWithChildren<
  Omit<FileDropAreaProviderProps, 'registerOpenFunction' | 'openFileDialog'>
>) => {
  const openFunctionRef = useRef<VoidFn | null>(null);

  const registerOpenFunction = useCallback((openFunc: VoidFn) => {
    openFunctionRef.current = openFunc;
  }, []);

  const openFileDialog = useCallback(() => {
    if (props.isDisabled || !openFunctionRef.current) {
      return;
    }

    props.clearError();
    openFunctionRef.current();
  }, [props]);

  const contextValue: FileDropAreaProviderProps = useMemo(
    () => ({ ...props, registerOpenFunction, openFileDialog }),
    [props, registerOpenFunction, openFileDialog],
  );

  return (
    <FileDropAreaContext.Provider value={contextValue}>{children}</FileDropAreaContext.Provider>
  );
};

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

import { useCallback, useRef, useState, DragEvent } from 'react';

interface UseOverlayDropAreaOptions {
  isOverlay: boolean;
}

export const useOverlayDropArea = ({ isOverlay = false }: UseOverlayDropAreaOptions) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleDragEnter = useCallback((event: DragEvent) => {
    event.preventDefault();

    if (event.dataTransfer?.types.includes('Files')) {
      setIsDragActive(true);
    }
  }, []);

  const handleDragLeave = useCallback((event: DragEvent) => {
    event.preventDefault();

    if (overlayRef.current && !overlayRef.current.contains(event.relatedTarget as Node)) {
      setIsDragActive(false);
    }
  }, []);

  const handleDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: DragEvent) => {
    event.preventDefault();

    setIsDragActive(false);
  }, []);

  const handlers = isOverlay
    ? {
        ref: overlayRef,
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
      }
    : {};

  return {
    handlers,
    ...(isOverlay && { isDragActive }),
  };
};

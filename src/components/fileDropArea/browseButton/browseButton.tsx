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

import { PropsWithChildren, MouseEvent } from 'react';

import { Button, ButtonProps } from '@components/button';
import { useFileDropAreaContext } from '../fileDropAreaProvider/useFileDropAreaContext';

type BrowseButtonProps = Omit<ButtonProps, 'onClick' | 'disabled' | 'children'> & {
  className?: string;
  variant?: ButtonProps['variant'];
};

export const BrowseButton = ({
  children,
  className,
  variant = 'text',
  ...buttonProps
}: PropsWithChildren<BrowseButtonProps>) => {
  const { openFileDialog, isDisabled } = useFileDropAreaContext();

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();

    openFileDialog();
  };

  return (
    <Button
      {...buttonProps}
      variant={variant}
      adjustWidthOn="content"
      disabled={isDisabled}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

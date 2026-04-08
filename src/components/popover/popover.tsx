/*
 * Copyright 2024 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FC, ReactElement, useRef, useState, ReactNode, useCallback } from 'react';
import {
  offset,
  useFloating,
  FloatingArrow,
  arrow,
  flip,
  autoUpdate,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  FloatingPortal,
  useTransitionStyles,
  Placement,
  Strategy,
  ElementRects,
} from '@floating-ui/react';
import classNames from 'classnames/bind';
import {
  TRIANGLE_WIDTH,
  TRIANGLE_HEIGHT,
  middlePlacements,
  allPlacements,
  ARROW_OFFSET,
} from '@common/constants/floatingUi';
import { getAlignmentAxisOffset } from '@common/utils';
import styles from './popover.module.scss';

const cx = classNames.bind(styles);

export interface PopoverProps {
  content: ReactNode;
  children: ReactNode;
  placement?: Placement;
  fallbackPlacements?: Placement[];
  className?: string;
  title?: string;
  arrowOffset?: number;
  safeZone?: number;
  arrowColor?: string;
  dataAutomationId?: string;
  strategy?: Strategy;
  transitionDuration?:
    | number
    | Partial<{
        open: number;
        close: number;
      }>;
  isCentered?: boolean;
  isFocusDisabled?: boolean;
  isOpened?: boolean;
  shouldUsePortal?: boolean;
  setIsOpened?: (isOpened: boolean) => void;
}

export const Popover: FC<PopoverProps> = ({
  content,
  children,
  placement: initialPlacement = 'bottom',
  fallbackPlacements = allPlacements,
  className,
  title,
  arrowOffset = ARROW_OFFSET,
  safeZone = 4,
  arrowColor = 'white',
  dataAutomationId,
  strategy: positionStrategy = 'absolute',
  transitionDuration = 0,
  isCentered = true,
  isFocusDisabled = false,
  isOpened,
  shouldUsePortal = false,
  setIsOpened,
}): ReactElement => {
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const isPopoverOpen = setIsOpened ? isOpened : isOpen;

  const onOpenChange = (isPopoverOpened: boolean) => {
    if (setIsOpened) {
      setIsOpened(isPopoverOpened);
    } else {
      setIsOpen(isPopoverOpened);
    }
  };

  const getAlignment = useCallback(
    (rects: ElementRects, currentPlacement: Placement) => {
      return getAlignmentAxisOffset(rects, currentPlacement, arrowOffset, isCentered);
    },
    [arrowOffset, isCentered],
  );

  const { placement, refs, floatingStyles, context } = useFloating({
    open: isPopoverOpen,
    onOpenChange,
    placement: initialPlacement,
    strategy: positionStrategy,
    middleware: [
      offset(({ rects, placement: currentPlacement }) => ({
        mainAxis: safeZone + TRIANGLE_HEIGHT,
        alignmentAxis: getAlignment(rects, currentPlacement),
      })),
      flip({
        fallbackAxisSideDirection: 'start',
        fallbackPlacements: fallbackPlacements,
      }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: transitionDuration,
    initial: { opacity: 0 },
  });

  const renderFloatingElement = () => {
    const floatingElement = (
      <FloatingFocusManager context={context} modal={false} disabled={isFocusDisabled}>
        <div
          className={cx('popover', className)}
          data-automation-id={dataAutomationId}
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            ...transitionStyles,
            pointerEvents: isPopoverOpen ? 'auto' : 'none',
          }}
          {...getFloatingProps()}
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={TRIANGLE_WIDTH}
            height={TRIANGLE_HEIGHT}
            fill={arrowColor}
            staticOffset={middlePlacements.includes(placement) ? null : arrowOffset}
          />
          {title && <div className={cx('title')}>{title}</div>}
          {content}
        </div>
      </FloatingFocusManager>
    );

    return shouldUsePortal ? <FloatingPortal>{floatingElement}</FloatingPortal> : floatingElement;
  };

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} className={cx('popover-wrapper')}>
        {children}
      </div>
      {isMounted && renderFloatingElement()}
    </>
  );
};

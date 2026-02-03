/*
 * Copyright 2025 EPAM Systems
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

import { useEffect, useRef, useState, useCallback, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { isEmpty } from 'es-toolkit/compat';
import { Chip } from '../chip';
import { Tooltip } from '../tooltip';
import {
  FONT_LOADING_DELAY,
  GAP,
  MIN_COUNTER_WIDTH,
  MIN_ISSUE_WIDTH,
  TOOLTIP_WIDTH,
} from './constants';
import styles from './issueList.module.scss';

const cx = classNames.bind(styles);

export interface Issue {
  key: string;
  name: string;
  link?: string;
}

export interface IssueListProps {
  issues: Issue[];
  isExpanded?: boolean;
  onIssueClick?: (issue: Issue) => void;
  onIssueRemove?: (issue: Issue) => void;
  onCounterClick?: () => void;
  renderTooltip?: (issue: Issue) => ReactNode;
  tooltipPortalRoot?: Element;
  className?: string;
}

export const IssueList = ({
  issues,
  isExpanded = false,
  onIssueClick,
  onIssueRemove,
  onCounterClick,
  renderTooltip,
  tooltipPortalRoot,
  className,
}: IssueListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const issueRefsMap = useRef<Map<string, HTMLElement>>(new Map());
  const naturalWidthsRef = useRef<Map<string, number>>(new Map());
  const [visibleCount, setVisibleCount] = useState(issues.length);
  const [isExpandedList, setIsExpandedList] = useState(isExpanded);
  const [needsEllipsis, setNeedsEllipsis] = useState(false);

  const setIssueRef = useCallback((key: string, element: HTMLElement | null) => {
    if (element) {
      issueRefsMap.current.set(key, element);
    }
  }, []);

  const calculateLayout = useCallback(() => {
    const container = containerRef.current;

    if (!container || issues.length === 0) {
      return;
    }

    const containerWidth = container.offsetWidth;
    const counterWidth = counterRef.current?.offsetWidth || MIN_COUNTER_WIDTH;

    const issueWidths = issues.map((issue, index) => {
      const issueElement = issueRefsMap.current.get(issue.key);
      if (!issueElement) return 0;

      const width = issueElement.offsetWidth;

      // For first issue when ellipsized, use stored natural width
      if (index === 0 && needsEllipsis) {
        return naturalWidthsRef.current.get(issue.key) || width;
      }

      naturalWidthsRef.current.set(issue.key, width);
      return width;
    });

    // Check if all issues fit
    const totalWidth = issueWidths.reduce((sum, w) => sum + w, 0) + (issues.length - 1) * GAP;

    if (totalWidth <= containerWidth) {
      setNeedsEllipsis(false);
      setVisibleCount(issues.length);
      return;
    }

    // Find how many issues fit with counter
    for (let visible = issues.length - 1; visible >= 1; visible--) {
      const visibleWidth =
        issueWidths.slice(0, visible).reduce((sum, w) => sum + w, 0) + visible * GAP;
      const totalNeeded = visibleWidth + counterWidth;

      if (totalNeeded <= containerWidth) {
        setVisibleCount(visible);
        setNeedsEllipsis(false);
        return;
      }

      if (visible === 1) {
        const availableForIssue = containerWidth - GAP - counterWidth;
        if (availableForIssue <= MIN_ISSUE_WIDTH) {
          setVisibleCount(0);
          setNeedsEllipsis(false);
        } else {
          setVisibleCount(1);
          setNeedsEllipsis(true);
        }
        return;
      }
    }
  }, [issues, needsEllipsis]);

  useEffect(() => {
    setIsExpandedList(isExpanded);
  }, [isExpanded]);

  // Initial calculation
  useEffect(() => {
    if (isExpandedList) {
      return;
    }

    const timeoutId = setTimeout(calculateLayout, FONT_LOADING_DELAY);

    return () => clearTimeout(timeoutId);
  }, [calculateLayout, issues, isExpandedList]);

  // Recalculate on resize
  useEffect(() => {
    if (isExpandedList) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      calculateLayout();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [calculateLayout, isExpandedList]);

  const handleCounterClick = useCallback(() => {
    setIsExpandedList(true);
    setVisibleCount(issues.length);
    setNeedsEllipsis(false);
    onCounterClick?.();
  }, [issues.length, onCounterClick]);

  const handleIssueClick = useCallback(
    (issue: Issue) => {
      onIssueClick?.(issue);
    },
    [onIssueClick],
  );

  if (isEmpty(issues)) {
    return null;
  }

  const hiddenCount = issues.length - visibleCount;
  const showCounter = hiddenCount > 0 && !isExpandedList;

  const renderIssue = (issue: Issue, index: number) => {
    const isHidden = !isExpandedList && index >= visibleCount;
    const shouldApplyEllipsis = !isExpandedList && index === 0 && needsEllipsis;

    const issueLink = (
      <Chip
        variant="link"
        link={issue.link}
        onClick={onIssueClick ? () => handleIssueClick(issue) : undefined}
        onRemove={onIssueRemove ? () => onIssueRemove(issue) : undefined}
      >
        {issue.name}
      </Chip>
    );

    const content = renderTooltip ? (
      <Tooltip
        content={renderTooltip(issue)}
        width={TOOLTIP_WIDTH}
        portalRoot={tooltipPortalRoot}
        wrapperClassName={cx('tooltip-wrapper')}
        placement="top"
      >
        {issueLink}
      </Tooltip>
    ) : (
      issueLink
    );

    return (
      <div
        key={issue.key}
        ref={(el) => setIssueRef(issue.key, el)}
        className={cx('issue', { hidden: isHidden, ellipsis: shouldApplyEllipsis })}
      >
        {content}
      </div>
    );
  };

  return (
    <div ref={containerRef} className={cx('issue-list', className, { expanded: isExpandedList })}>
      {issues.map((issue, index) => renderIssue(issue, index))}
      <div ref={counterRef} className={cx('counter-wrapper', { hidden: !showCounter })}>
        <Chip className={cx('counter')} variant="link" onClick={handleCounterClick}>
          +{hiddenCount}
        </Chip>
      </div>
    </div>
  );
};

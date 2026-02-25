import classNames from 'classnames/bind';
import { drop, take } from 'es-toolkit';
import { isEmpty } from 'es-toolkit/compat';

import { Breadcrumb } from './breadcrumb';
import { HiddenBreadcrumbs } from './hiddenBreadcrumbs';
import { Tree } from './tree';
import { BreadcrumbsProvider } from './breadcrumbsProvider';
import { BreadcrumbsProps } from './types';

import styles from './breadcrumbs.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_MAX_SHOWN_DESCRIPTORS = 5;

export const Breadcrumbs = ({
  descriptors = [],
  dataAutomationId,
  LinkComponent,
  tree,
  isBackButton = false,
  isLastClickable = false,
  maxShownDescriptors = DEFAULT_MAX_SHOWN_DESCRIPTORS,
  className,
}: BreadcrumbsProps) => {
  const [firstDescriptor, ...remainingDescriptors] = descriptors;

  const normalizedMaxShownDescriptors = Math.max(1, Math.floor(maxShownDescriptors));
  const visibleTailCount = normalizedMaxShownDescriptors - 1;
  const hiddenCount = Math.max(0, remainingDescriptors.length - visibleTailCount);

  const titleTailNumChars = ((breadcrumbsCount: number) => {
    const widths: Record<number, number> = {
      1: 55,
      2: 24,
      3: 18,
      4: 13,
    };

    return widths[breadcrumbsCount] ?? 12;
  })(descriptors.length);

  const hiddenDescriptors = take(remainingDescriptors, hiddenCount);
  const shownDescriptors = drop(remainingDescriptors, hiddenCount);

  return (
    <BreadcrumbsProvider LinkComponent={LinkComponent}>
      <div
        className={cx('breadcrumbs-container', className)}
        data-automation-id={dataAutomationId}
        data-testid={dataAutomationId}
      >
        {isBackButton && firstDescriptor ? (
          <div className={cx('breadcrumbs')}>
            <div className={cx('breadcrumb-item', 'back-button')} data-testid="back-breadcrumb">
              <Breadcrumb descriptor={firstDescriptor} titleTailNumChars={titleTailNumChars} />
            </div>
          </div>
        ) : (
          <>
            {tree && (
              <div className={cx('tree')}>
                <Tree tree={tree} />
              </div>
            )}
            <div className={cx('breadcrumbs')}>
              {firstDescriptor && (
                <div className={cx('breadcrumb-item')}>
                  <Breadcrumb
                    descriptor={firstDescriptor}
                    titleTailNumChars={titleTailNumChars}
                    isClickable={!isEmpty(remainingDescriptors)}
                  />
                </div>
              )}
              {!isEmpty(hiddenDescriptors) && (
                <div className={cx('breadcrumb-item', 'hidden-breadcrumbs')}>
                  <HiddenBreadcrumbs descriptors={hiddenDescriptors} />
                </div>
              )}
              {!isEmpty(shownDescriptors) &&
                shownDescriptors.map((descriptor, index) => (
                  <div className={cx('breadcrumb-item')} key={index}>
                    <Breadcrumb
                      descriptor={descriptor}
                      titleTailNumChars={titleTailNumChars}
                      isClickable={isLastClickable || index !== shownDescriptors.length - 1}
                    />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </BreadcrumbsProvider>
  );
};

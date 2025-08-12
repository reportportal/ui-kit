import classNames from 'classnames/bind';
import { Breadcrumb } from './breadcrumb';
import { HiddenBreadcrumbs } from './hiddenBreadcrumbs';
import { Tree } from './tree';
import { BreadcrumbsProvider } from './breadcrumbsProvider';
import { BreadcrumbDescriptor, BreadcrumbsProps } from './types';
import styles from './breadcrumbs.module.scss';

const cx = classNames.bind(styles);
const MAX_SHOWN_DESCRIPTORS = 5;

export const Breadcrumbs = ({
  descriptors = [],
  dataAutomationId,
  LinkComponent,
  tree,
  isBackButton = false,
}: BreadcrumbsProps) => {
  const shownDescriptors = [...descriptors];
  const firstDescriptor = shownDescriptors.shift();

  const getBreadcrumbsCountClass = (count: number): string => {
    const suffix = count > 5 ? '6-plus' : count;
    return `breadcrumbs-${suffix}`;
  };

  const titleTailNumChars = ((breadcrumbsCount: number) => {
    const widths: Record<number, number> = {
      1: 55,
      2: 24,
      3: 18,
      4: 13,
    };
    return widths[breadcrumbsCount] ?? 12;
  })(descriptors.length);

  let hiddenDescriptors: BreadcrumbDescriptor[] = [];
  if (shownDescriptors.length > MAX_SHOWN_DESCRIPTORS - 1) {
    hiddenDescriptors = shownDescriptors.splice(
      0,
      shownDescriptors.length - (MAX_SHOWN_DESCRIPTORS - 1),
    );
  }

  return (
    <BreadcrumbsProvider LinkComponent={LinkComponent}>
      <div
        className={cx('breadcrumbs-container')}
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
            <div className={cx('breadcrumbs', getBreadcrumbsCountClass(descriptors.length))}>
              {firstDescriptor && (
                <div className={cx('breadcrumb-item')}>
                  <Breadcrumb
                    descriptor={firstDescriptor}
                    titleTailNumChars={titleTailNumChars}
                    isClickable={!!shownDescriptors.length}
                  />
                </div>
              )}
              {hiddenDescriptors.length > 0 && (
                <div className={cx('breadcrumb-item', 'hidden-breadcrumbs')}>
                  <HiddenBreadcrumbs descriptors={hiddenDescriptors} />
                </div>
              )}
              {shownDescriptors.length > 0 &&
                shownDescriptors.map((descriptor, index) => (
                  <div className={cx('breadcrumb-item')} key={index}>
                    <Breadcrumb
                      descriptor={descriptor}
                      titleTailNumChars={titleTailNumChars}
                      isClickable={index !== shownDescriptors.length - 1}
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

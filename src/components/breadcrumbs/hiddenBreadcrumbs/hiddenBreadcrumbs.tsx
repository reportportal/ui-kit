import classNames from 'classnames/bind';
import { Popover } from '@components/popover';
import { MeatballMenuIcon } from '@components/icons';
import { Breadcrumb } from '../breadcrumb';
import { BreadcrumbDescriptor } from '../types';
import styles from './hiddenBreadcrumbs.module.scss';

const cx = classNames.bind(styles);

export interface HiddenBreadcrumbsProps {
  descriptors: BreadcrumbDescriptor[];
}

const HiddenBreadcrumbsContent = ({ descriptors }: HiddenBreadcrumbsProps) => (
  <div className={cx('hidden-breadcrumbs-content')} data-testid="hidden-breadcrumbs-content">
    {descriptors.map((descriptor, index) => (
      <div className={cx('hidden-breadcrumb-item', `level-${index + 1}`)} key={index}>
        <Breadcrumb descriptor={descriptor} />
      </div>
    ))}
  </div>
);

export const HiddenBreadcrumbs = ({ descriptors }: HiddenBreadcrumbsProps) => {
  return (
    <Popover
      content={<HiddenBreadcrumbsContent descriptors={descriptors} />}
      placement="bottom-start"
    >
      <div className={cx('hidden-breadcrumbs-trigger')} data-testid="hidden-breadcrumbs-trigger">
        <MeatballMenuIcon />
      </div>
    </Popover>
  );
};

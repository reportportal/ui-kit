import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { BreadcrumbDescriptor, LinkComponentType } from '../types';
import { useBreadcrumbsContext } from '../breadcrumbsProvider/hooks';
import styles from './breadcrumb.module.scss';

const cx = classNames.bind(styles);

interface BreadcrumbProps {
  descriptor: BreadcrumbDescriptor;
  titleTailNumChars?: number;
  isClickable?: boolean;
  variant?: 'default' | 'dark';
}

interface GetCrumbContent {
  ({
    LinkComponent,
    link,
    onClick,
    isClickable,
    breadcrumbContent,
  }: {
    LinkComponent?: LinkComponentType;
    link?: object | string;
    onClick?: () => void;
    isClickable?: boolean;
    breadcrumbContent: React.ReactNode;
  }): React.ReactNode;
}

const getCrumbContent: GetCrumbContent = ({
  LinkComponent,
  link,
  onClick,
  isClickable,
  breadcrumbContent,
}) => {
  if (!isClickable) {
    return breadcrumbContent;
  }

  if (link) {
    if (LinkComponent) {
      return (
        <LinkComponent className={cx('link')} to={link} onClick={onClick}>
          {breadcrumbContent}
        </LinkComponent>
      );
    }

    return (
      <a className={cx('link')} href={typeof link === 'string' ? link : '#'} onClick={onClick}>
        {breadcrumbContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={cx('link')} onClick={onClick}>
        {breadcrumbContent}
      </button>
    );
  }

  return breadcrumbContent;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  titleTailNumChars = 8,
  descriptor: { title, link, onClick },
  isClickable = true,
  variant = 'default',
}) => {
  const { LinkComponent } = useBreadcrumbsContext();
  const ref = useRef<HTMLDivElement>(null);
  const [breadcrumbTitle, setBreadcrumbTitle] = useState<string | null>(null);

  useEffect(() => {
    if (ref.current) {
      const { offsetWidth, scrollWidth, dataset } = ref.current;

      if (offsetWidth < scrollWidth) {
        const titleString = typeof title === 'string' ? title : '';
        dataset.tail = titleString.slice(titleString.length - titleTailNumChars);
        setBreadcrumbTitle(titleString);
      }
    }
  }, [title, titleTailNumChars]);

  const breadcrumbContent = (
    <div ref={ref} className={cx('breadcrumb-text', variant)}>
      {title}
    </div>
  );

  return (
    <div
      className={cx('breadcrumb', variant)}
      title={breadcrumbTitle || undefined}
      data-testid="breadcrumb"
    >
      {getCrumbContent({ LinkComponent, link, onClick, isClickable, breadcrumbContent })}
    </div>
  );
};

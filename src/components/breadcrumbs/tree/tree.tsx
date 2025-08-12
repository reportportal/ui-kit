import classNames from 'classnames/bind';
import { useState } from 'react';
import { Popover } from '@components/popover';
import { TreeIcon } from '@components/icons';
import { Breadcrumb } from '../breadcrumb';
import { TreeDescriptor } from '../types';
import styles from './tree.module.scss';

const cx = classNames.bind(styles);

interface TreeProps {
  tree: TreeDescriptor[];
}

interface TreeItemProps {
  descriptor: TreeDescriptor;
  level: number;
}

const TreeItem = ({ descriptor, level }: TreeItemProps) => {
  return (
    <div className={cx('tree-menu-item', `level-${level}`)}>
      <Breadcrumb descriptor={descriptor} variant="dark" />
    </div>
  );
};

const renderTree = (descriptors: TreeDescriptor[], level: number) => {
  return descriptors.map((descriptor, index) => (
    <div key={index} className={cx('tree-menu-node')}>
      <TreeItem descriptor={descriptor} level={level} />
      {descriptor.children && descriptor.children.length > 0 && (
        <div className={cx('tree-menu-children')}>{renderTree(descriptor.children, level + 1)}</div>
      )}
    </div>
  ));
};

export const Tree = ({ tree }: TreeProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Popover
      content={<div className={cx('tree-menu')}>{renderTree(tree, 1)}</div>}
      placement="bottom-start"
      isOpened={isOpened}
      setIsOpened={setIsOpened}
    >
      <div className={cx('tree-button', { opened: isOpened })}>
        <TreeIcon />
      </div>
    </Popover>
  );
};

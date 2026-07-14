import { CloseIcon } from '@components/icons';
import { ClearSelection } from './types';
import styles from './selection.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@components/button';

export interface SelectionProps {
  selectedCount: number;
  onClearSelection: ClearSelection;
  captions?: {
    selected?: string;
    buttonCaption?: string;
  };
  icon?: React.ReactNode;
}

const cx = classNames.bind(styles);

const DEFAULT_CAPTIONS = { selected: 'selected', buttonCaption: 'Clear Selection' };

export const Selection = ({
  selectedCount,
  onClearSelection,
  captions = DEFAULT_CAPTIONS,
  icon = <CloseIcon />,
}: SelectionProps) => {
  return (
    <div className={cx('selection-wrapper')}>
      <p>
        <span className={cx('selected-count-text')}>{selectedCount}</span>
        <span className={cx('selected-count-caption')}>{captions.selected}</span>
      </p>
      <div className={cx('divider')}></div>
      <Button
        icon={icon}
        className={cx('button')}
        iconPlace="start"
        variant="text"
        onClick={onClearSelection}
        aria-label={`${captions.buttonCaption} - ${selectedCount} ${captions.selected}`}
      >
        {captions.buttonCaption}
      </Button>
    </div>
  );
};

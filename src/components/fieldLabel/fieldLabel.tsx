import { DetailedHTMLProps, FC, LabelHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './fieldLabel.module.scss';

const cx = classNames.bind(styles);

interface FieldLabelProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  isRequired?: boolean;
}

export const FieldLabel: FC<FieldLabelProps> = ({ children, isRequired = false, ...rest }) => (
  <label className={cx('field-label')} {...rest}>
    {children}
    {isRequired && <span className={cx('asterisk')}>*</span>}
  </label>
);

import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './fieldLabel.module.scss';

const cx = classNames.bind(styles);

interface FieldLabelProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  isRequired?: boolean;
}

export const FieldLabel = ({
  children,
  isRequired = false,
  className,
  ...rest
}: FieldLabelProps) => (
  <label className={cx('field-label', className)} {...rest}>
    {children}
    {isRequired && <span className={cx('asterisk')}>*</span>}
  </label>
);

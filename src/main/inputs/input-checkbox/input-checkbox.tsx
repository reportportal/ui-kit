import React, { ReactNode } from 'react';

export type InputCheckboxProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function InputCheckbox({ children }: InputCheckboxProps) {
  return (
    <div>
      {children}
    </div>
  );
}

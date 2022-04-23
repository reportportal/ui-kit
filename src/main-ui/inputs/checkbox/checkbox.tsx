import React, { ReactNode } from 'react';

export type CheckboxProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Checkbox({ children }: CheckboxProps) {
  return (
    <div>
      {children}
    </div>
  );
}

import React, { ReactNode } from 'react';

export type PlainButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function PlainButton({ children }: PlainButtonProps) {
  return (
    <div>
      {children}
    </div>
  );
}

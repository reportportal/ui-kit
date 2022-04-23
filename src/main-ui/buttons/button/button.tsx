import React, { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  console.log('React version', React.version);
  return (
    <div>
      {children}
    </div>
  );
}

import * as React from 'react';
declare module 'react' {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

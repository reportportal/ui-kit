import { createContext, ReactNode } from 'react';
import { LinkComponentType } from '../types';

export interface BreadcrumbsContextValue {
  LinkComponent?: LinkComponentType;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContextValue | undefined>(undefined);

interface BreadcrumbsProviderProps {
  children: ReactNode;
  LinkComponent?: LinkComponentType;
}

export const BreadcrumbsProvider = ({ children, LinkComponent }: BreadcrumbsProviderProps) => {
  return (
    <BreadcrumbsContext.Provider value={{ LinkComponent }}>{children}</BreadcrumbsContext.Provider>
  );
};

import { useContext } from 'react';
import { BreadcrumbsContext, BreadcrumbsContextValue } from './breadcrumbsProvider';

export const useBreadcrumbsContext = (): BreadcrumbsContextValue => {
  const context = useContext(BreadcrumbsContext);
  if (context === undefined) {
    throw new Error('useBreadcrumbsContext must be used within a BreadcrumbsProvider');
  }
  return context;
};

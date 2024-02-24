import { EmptyState, ErrorState } from '@features/common';
import React from 'react';
import { useLogin } from '../hooks';

export const AuthWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const { isLoading, error } = useLogin();

  // If the data is loading, show a loading state.
  if (isLoading) {
    return <EmptyState title={'Loading...'} />;
  }

  // If there was an error fetching the data, show an error state.
  if (error) {
    return <ErrorState error={error} />;
  }

  // Otherwise, render the children.
  return <>{children}</>;
};

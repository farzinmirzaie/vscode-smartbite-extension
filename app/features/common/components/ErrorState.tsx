import React from 'react';
import { EmptyState } from './EmptyState';

type TProps = {
  error: unknown;
};

export const ErrorState: React.FC<TProps> = ({ error }) => (
  <EmptyState
    type="error"
    title={'Something went wrong!'}
    message={'Please try again later. If the problem persists, try closing and reopening VSCode.'}
  >
    <pre>{JSON.stringify(error, undefined, 2)}</pre>
  </EmptyState>
);

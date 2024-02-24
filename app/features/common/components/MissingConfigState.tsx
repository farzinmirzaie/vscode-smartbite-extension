import React from 'react';
import { EmptyState } from './EmptyState';

export const MissingConfigState: React.FC<unknown> = () => (
  <EmptyState
    type="error"
    title={'Settings are missing!'}
    message={
      <>
        Open VSCode settings and search for <code>SmartBite</code> to configure the extension.
      </>
    }
  />
);

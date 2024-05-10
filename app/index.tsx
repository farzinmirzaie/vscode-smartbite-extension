import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthWrapper, MissingConfigState, OrdersList, getConfigs } from './features';
import './index.css';

const queryClient = new QueryClient();

persistQueryClient({
  queryClient,
  persister: createSyncStoragePersister({ storage: window.localStorage }),
  dehydrateOptions: { shouldDehydrateQuery: query => Boolean(query.meta?.persist) },
});

export const App: React.FC<unknown> = () => {
  const config = getConfigs();

  // If any of the config values are missing, show the missing config state.
  if (Object.values(config).some(value => !value)) {
    return <MissingConfigState />;
  }

  // Otherwise, render the app.
  return (
    <QueryClientProvider client={queryClient}>
      <AuthWrapper>
        <OrdersList />
      </AuthWrapper>
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

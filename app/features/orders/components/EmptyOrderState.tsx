import { EmptyState } from '@features/common';
import React from 'react';

export const EmptyOrderState: React.FC<unknown> = () => (
  <EmptyState
    title={'No orders yet!'}
    message={
      <>
        You don't have any orders yet. Login to{' '}
        <a href="https://canteen.trysmartbite.com/">trysmartbite.com</a> via your browser, select a
        canteen and place an order to see it here.
      </>
    }
  />
);

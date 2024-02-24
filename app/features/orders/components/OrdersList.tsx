import { EmptyState, ErrorState } from '@features/common';
import React from 'react';
import { useOrders } from '../hooks';
import { EmptyOrderState } from './EmptyOrderState';
import { OrderCard } from './OrderCard';

export const OrdersList: React.FC<unknown> = () => {
  const { data, isLoading, error } = useOrders();

  // If the data is loading, show a loading state.
  if (isLoading) {
    return <EmptyState title={'Loading...'} />;
  }

  // If there was an error fetching the data, show an error state.
  if (error) {
    return <ErrorState error={error} />;
  }

  // If there is no data, show an empty state.
  if (!data?.length) {
    return <EmptyOrderState />;
  }

  // Otherwise, show the orders list.
  return (
    <div>
      {data?.map(order => <OrderCard key={order.id} order={order} />)}
      <div style={{ opacity: 0.5, fontStyle: 'italic' }}>
        <br />
        To manage your orders, <a href="https://canteen.trysmartbite.com/orders">click here</a>.
        <br />
        <br />
      </div>
    </div>
  );
};

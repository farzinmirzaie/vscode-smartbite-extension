import { call } from '@features/network';
import type { OrdersResponse } from '@features/network/types';
import { useLogin } from '@features/user';
import { useQuery } from '@tanstack/react-query';
import { orderTransformer } from '../transformers';

/**
 * Custom hook for fetching orders data.
 *
 * @returns An object containing the orders data, error, and loading state.
 */
export const useOrders = () => {
  const { data: user } = useLogin();

  return useQuery({
    queryKey: ['/orders', user?.customer._id, user?.token],
    queryFn: () =>
      call<OrdersResponse>(`/order/quick-view?limit=20&userId=${user?.customer._id}`, {
        headers: { 'X-Access-Token': `${user?.token}` },
      }),
    select: data =>
      data.data.orders
        // Transform the orders data.
        .map(orderTransformer)
        // Filter the orders.
        .filter(order => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          // Only include orders for today and the future.
          return order.date >= today;
        })
        // Sort the orders by date.
        .sort((a, b) => a.date.getTime() - b.date.getTime()),
    enabled: !!user,
  });
};

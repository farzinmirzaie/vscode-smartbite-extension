import type { OrdersResponse } from '@features/network/types';

export const orderTransformer = (order: OrdersResponse['orders'][number]) => {
  // Convert the date string to a Date object.
  const date = new Date(order.dailyMenuForDate);

  // Whether the order is for today or not.
  const isToday = date.toDateString() === new Date().toDateString();

  // Whether the order is for tomorrow or not.
  const isTomorrow =
    date.toDateString() === new Date(new Date().setDate(new Date().getDate() + 1)).toDateString();

  // Split the order date into day name and date in the format "Wednesday, Jun 23".
  const [displayDayName, displayDayDate] = date
    .toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
    .split(',');

  // Display the day as "Today" if the order is for today,
  // "Tomorrow" if the order is for tomorrow, or the day name otherwise.
  const displayDay = isToday ? 'Today' : isTomorrow ? 'Tomorrow' : displayDayName;

  // Transform the order items to a more readable format.
  const orderItems = order.orderItemsSuppliers.map(orderItem => ({
    quantity: orderItem.quantity,
    supplierName: orderItem.supplierName,
    name: orderItem.name,
    addons: orderItem.addons.map(addon => ({
      name: addon.name,
      quantity: addon.qty,
    })),
  }));

  // Group the order items by supplier.
  const suppliers = orderItems.reduce(
    (acc, orderItem) => {
      if (!acc[orderItem.supplierName]) {
        acc[orderItem.supplierName] = [];
      }
      acc[orderItem.supplierName].push(orderItem);

      return acc;
    },
    {} as Record<string, typeof orderItems>,
  );

  return {
    id: order._id,
    date,
    displayDay,
    displayDayName,
    displayDayDate,
    isToday,
    isTomorrow,
    suppliers,
  };
};

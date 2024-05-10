import React from 'react';
import type { useOrders } from '../hooks';

type TProps = {
  order: NonNullable<ReturnType<typeof useOrders>['data']>[number];
};

export const OrderCard: React.FC<TProps> = ({ order }) => {
  const renderDate = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{order.displayDay}</h1>
        <h4 style={{ opacity: 0.3, textTransform: 'capitalize' }}>
          {order.isToday && (
            <a href={`https://canteen.trysmartbite.com/order-details/${order.id}`}>
              {order.deliveryStatus}
            </a>
          )}
          {!order.isToday && order.displayDayDate}
        </h4>
      </div>
    );
  };

  const renderSupplier = () => {
    return (
      <>
        {Object.entries(order.suppliers).map(([supplierName, orderItems]) => (
          <>
            <h3 style={{ opacity: 0.7, marginTop: 0 }}>{supplierName}</h3>
            {renderOrderItem(orderItems)}
          </>
        ))}
      </>
    );
  };

  const renderOrderItem = (orderItems: (typeof order.suppliers)[string]) => {
    return (
      <>
        {orderItems.map(orderItem => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="badge">{orderItem.quantity}</div>
              <p style={{ display: 'inline', margin: 4 }}>{` - ${orderItem.name}`}</p>
            </div>
            {orderItem.addons.length > 0 && (
              <ul style={{ opacity: 0.5, paddingLeft: 32, margin: 0 }}>
                {orderItem.addons.map(addon => (
                  <li>{`${addon.name} ${addon.quantity > 1 ? `(x${addon.quantity})` : ''}`}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {renderDate()}
      {renderSupplier()}
      <br />
      <div className="divider" />
    </>
  );
};

import React from 'react';

type TProps = {
  type?: 'error' | 'warning' | 'info';
  title: React.ReactNode;
  message?: React.ReactNode;
};

export const EmptyState: React.FC<React.PropsWithChildren<TProps>> = ({
  type,
  title,
  message,
  children,
}) => (
  <div>
    <h1 className={type}>{title}</h1>
    {message && <h4>{message}</h4>}
    {children && <div className="divider" />}
    {children && <div style={{ opacity: 0.5 }}>{children}</div>}
  </div>
);

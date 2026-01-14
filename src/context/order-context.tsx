"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Cake } from '@/lib/cake-data';

export type Order = {
  id: string;
  cake: Cake;
  pickupDate: string; // Storing as ISO string
  pickupTime: string;
};

type OrderContextType = {
  orders: Order[];
  addOrder: (cake: Cake, pickupDate: Date, pickupTime: string) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const storedOrders = localStorage.getItem('orders');
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
    } catch (error) {
      console.error("Failed to parse orders from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('orders', JSON.stringify(orders));
    } catch (error) {
      console.error("Failed to save orders to localStorage", error);
    }
  }, [orders]);

  const addOrder = (cake: Cake, pickupDate: Date, pickupTime: string) => {
    const newOrder: Order = {
      id: `${cake.id}-${new Date().getTime()}`, // unique id for each order
      cake,
      pickupDate: pickupDate.toISOString(),
      pickupTime,
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}

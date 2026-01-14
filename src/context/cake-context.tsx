"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { cakeData as initialCakeData, Cake } from '@/lib/cake-data';

type CakeDataContextType = {
  cakes: Cake[];
  addCake: (cake: Cake) => void;
};

const CakeDataContext = createContext<CakeDataContextType | undefined>(undefined);

export function CakeDataProvider({ children }: { children: ReactNode }) {
  const [cakes, setCakes] = useState<Cake[]>(initialCakeData);

  const addCake = (cake: Cake) => {
    setCakes((prevCakes) => [...prevCakes, cake]);
  };

  return (
    <CakeDataContext.Provider value={{ cakes, addCake }}>
      {children}
    </CakeDataContext.Provider>
  );
}

export function useCakeData() {
  const context = useContext(CakeDataContext);
  if (context === undefined) {
    throw new Error('useCakeData must be used within a CakeDataProvider');
  }
  return context;
}

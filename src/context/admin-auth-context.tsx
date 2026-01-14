"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import adminData from "@/lib/admin-data.json";

type AdminAuthContextType = {
  isAdmin: boolean;
  login: (bakeryName: string, mobile: string) => Promise<boolean>;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [currentAdminData, setCurrentAdminData] = useState(adminData);

  useEffect(() => {
    try {
      const storedIsAdmin = sessionStorage.getItem('isAdmin');
      if (storedIsAdmin === 'true') {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error("Failed to read from sessionStorage", error);
    }
  }, []);

  const login = async (bakeryName: string, mobile: string): Promise<boolean> => {
    if (bakeryName === currentAdminData.bakeryName && mobile === currentAdminData.mobile) {
      try {
        sessionStorage.setItem('isAdmin', 'true');
        setIsAdmin(true);
        return true;
      } catch (error) {
        console.error("Failed to save to sessionStorage", error);
        return false;
      }
    } else {
      // This is insecure and for prototyping only.
      const newAdminData = { bakeryName, mobile };
      setCurrentAdminData(newAdminData);
      return false; // Indicate failure so user tries again with the new credentials
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem('isAdmin');
      setIsAdmin(false);
    } catch (error) {
      console.error("Failed to remove from sessionStorage", error);
    }
  };

  return (
    <AdminAuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}

"use client";

import React, { createContext, useContext, useState } from "react";
import useProducts from "../hooks/useProducts";
import useSuppliers from "../hooks/useSuppliers";
import useSales from "../hooks/useSales";

interface DashboardContext {
  isAddingEntity: boolean;
  productsData: ReturnType<typeof useProducts>;
  suppliersData: ReturnType<typeof useSuppliers>;
  salesData: ReturnType<typeof useSales>;
}

export const DashboardContext = createContext<DashboardContext | undefined>(
  undefined
);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within an DashboardContextProvider"
    );
  }
  return context;
};

export default function DashboardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAddingEntity, setIsAddingEntity] = useState<boolean>(false);

  const productsData = useProducts();
  const suppliersData = useSuppliers();
  const salesData = useSales();

  return (
    <DashboardContext.Provider
      value={{
        isAddingEntity,
        productsData,
        suppliersData,
        salesData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

"use client";

import { createContext, ReactNode, useContext } from "react";
import { useDashboard } from "../hooks/useDashboard";

interface DashboardData {
  totalProducts: number;
  salesOverview: Array<any>;
  activeSuppliers: number;
  lowStockItems: Array<any>;
  totalNumberOfLowStockItems: number;
}

interface DashBoardContext {
  data: DashboardData;
  isPending: boolean;
  error: any;
}

export const DashBoardContext = createContext<DashBoardContext | undefined>(
  undefined
);

export function useDashboardContext() {
  const context = useContext(DashBoardContext);
  if (!context) {
    throw new Error("useDashboardContext must be used with a DashboardContext");
  }
  return context;
}

export default function DashboardContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const dashboard = useDashboard();

  return (
    <DashBoardContext.Provider value={dashboard}>
      {children}
    </DashBoardContext.Provider>
  );
}

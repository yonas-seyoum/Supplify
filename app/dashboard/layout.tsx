"use client";

import React, { ReactNode, useState } from "react";
import { Sidebar } from "../components/SideBar";
import DashboardContextProvider from "../context/DashboardContext";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <main
        className={`flex-1 overflow-auto transition-all duration-200
      md:${sidebarCollapsed ? "ml-16" : "ml-64"} ml-0`}
      >
        <DashboardContextProvider>
          <div className="md:p-6 py-24 px-6 w-full">{children}</div>
        </DashboardContextProvider>
      </main>
    </div>
  );
}

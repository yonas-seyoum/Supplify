import React from "react";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";
import { menuItems } from "../utils/constants/sideBar";
import { useAuthContext } from "../context/AuthContext";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
}) => {
  const { logout } = useAuthContext();
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-10 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div
          className={`flex items-center justify-between h-16 px-4 border-b border-gray-200 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          {!collapsed && (
            <h1 className="text-lg font-bold text-blue-600">SuppliFy</h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.route} // Use Link to navigate
                  onClick={() => setActiveTab(item.id)} // Keep track of active tab
                  className={`flex items-center w-full px-3 py-2.5 rounded-md transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="inline-flex items-center justify-center">
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <span className="ml-3 text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            className={`flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 ${
              collapsed ? "justify-center" : ""
            }`}
            onClick={logout}
          >
            <LogOut size={20} />
            {!collapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

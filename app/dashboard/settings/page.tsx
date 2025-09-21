"use client";

import React, { useState } from "react";
import { tabs } from "@/app/utils/constants/settings";
import Profile from "@/app/components/Settings/Profile";
import Security from "@/app/components/Settings/Security";
import Appearance from "@/app/components/Settings/Appearance";
import Help from "@/app/components/Settings/Help";
import Language from "@/app/components/Settings/Language";
import Notifications from "@/app/components/Settings/Notifications";
export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "notifications":
        return <Notifications />;
      case "security":
        return <Security />;
      case "appearance":
        return <Appearance />;
      case "language":
        return <Language />;
      case "help":
        return <Help />;
      default:
        return <Profile />;
    }
  };
  return (
    <div className="left-4 right-4 md:block space-y-6 mr-0">
      <div className="sticky top-24 md:flex md:top-0 items-center space-x-8 z-100">
        <h1 className="hidden md:block text-2xl font-bold text-gray-800">
          Settings
        </h1>
        <div className=" bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <nav className="grid grid-cols-6 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className=" gap-6">
        <div className=" bg-white p-6 md:w-2/3 rounded-lg shadow-sm border border-gray-100">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

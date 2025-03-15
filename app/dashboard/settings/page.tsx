"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building,
  Shield,
  Moon,
  Sun,
  Languages,
  MessageCircle,
} from "lucide-react";
import { tabs } from "@/app/utils/constants/settings";
export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    stockAlerts: true,
    orderUpdates: true,
    reports: false,
    news: false,
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Profile Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={32} className="text-gray-400" />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Change Photo
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 flex items-center space-x-2">
                      <Mail size={20} className="text-gray-400" />
                      <input
                        type="email"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1 flex items-center space-x-2">
                      <Phone size={20} className="text-gray-400" />
                      <input
                        type="tel"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <div className="mt-1 flex items-center space-x-2">
                    <Building size={20} className="text-gray-400" />
                    <input
                      type="text"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Acme Inc."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "notifications":
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Notification Preferences
            </h2>
            <div className="space-y-4">
              <div className="space-y-4">
                {Object.entries(emailNotifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Receive notifications about {key.toLowerCase()}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        // onChange={() =>
                        //   setEmailNotifications((prev) => ({
                        //     ...prev,
                        //     [key]: !prev[key],
                        //   }))
                        // }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Security Settings
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-blue-600" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Enable
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">
                  Change Password
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        );
      case "appearance":
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Appearance Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {darkMode ? (
                    <Moon className="text-gray-600" />
                  ) : (
                    <Sun className="text-yellow-500" />
                  )}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Theme</h3>
                    <p className="text-sm text-gray-500">
                      Switch between light and dark mode
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        );
      case "language":
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Language Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Languages className="text-gray-400" />
                <select className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="en">English (US)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>
        );
      case "help":
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Help & Support
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="text-blue-600" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">
                        Contact Support
                      </h3>
                      <p className="text-sm text-gray-500">
                        Get help from our support team
                      </p>
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full">
                    Start Chat
                  </button>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700">
                    Documentation
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Browse our documentation to learn more about using SuppliFy
                  </p>
                  <button className="mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 w-full">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <nav className="space-y-1">
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
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        {/* Content */}
        <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

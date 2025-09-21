import { useState } from "react";

export default function Notifications() {
  const [emailNotifications, setEmailNotifications] = useState({
    stockAlerts: true,
    orderUpdates: true,
    reports: false,
    news: false,
  });

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
}

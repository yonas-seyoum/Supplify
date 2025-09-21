import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Appearance() {
  const [darkMode, setDarkMode] = useState(false);
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
}

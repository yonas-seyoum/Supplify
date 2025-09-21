import { Languages } from "lucide-react";

export default function Language() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">Language Settings</h2>
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
}

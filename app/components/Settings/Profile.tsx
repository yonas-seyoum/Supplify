import { User, Camera, Mail, Phone, Building } from "lucide-react";

export default function Profile() {
  return (
    <div className="rounded-xl space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Profile Settings
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage your personal information and account details
        </p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center ring-2 ring-gray-200">
            <User size={40} className="text-gray-400" />
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full shadow hover:bg-blue-700">
            <Camera size={16} className="text-white" />
          </button>
        </div>
        <div>
          <p className="font-medium text-gray-800">John Doe</p>
          <p className="text-sm text-gray-500">Update your profile picture</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="John Doe"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-1 col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="md:col-span-1 col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Phone size={18} className="text-gray-400" />
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Building size={18} className="text-gray-400" />
            <input
              type="text"
              defaultValue="Acme Inc."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          Cancel
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 shadow">
          Save Changes
        </button>
      </div>
    </div>
  );
}

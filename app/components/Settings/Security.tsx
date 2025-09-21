export default function Security() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">Security Settings</h2>
      <div className="space-y-4">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Change Password</h3>
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
}

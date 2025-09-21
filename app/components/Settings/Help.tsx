import { MessageCircle } from "lucide-react";

export default function Help() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">Help & Support</h2>
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
            <h3 className="text-sm font-medium text-gray-700">Documentation</h3>
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
}

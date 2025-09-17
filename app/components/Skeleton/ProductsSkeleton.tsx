import { Search, Filter, ArrowUpDown } from "lucide-react";

export default function ProductsSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-4 flex flex-col sm:flex-row gap-4 border-b border-gray-200">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Categories</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-4 text-left font-medium">
                <button className="flex items-center gap-1">
                  Product
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="py-3 px-4 text-left font-medium">Description</th>
              <th className="py-3 px-4 text-left font-medium">
                <button className="flex items-center gap-1">
                  Quantity
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="py-3 px-4 text-left font-medium">
                <button className="flex items-center gap-1">
                  Price
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="py-3 px-4 text-left font-medium">
                <button className="flex items-center gap-1">
                  Category
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="py-3 px-4 text-center font-medium">Actions</th>
            </tr>
          </thead>
          {Array.from({ length: 5 }).map((_, index) => (
            <tbody className="divide-y divide-gray-200">
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-800 font-medium">
                  <div className="skeleton h-6 w-full"></div>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  <div className="skeleton h-6 w-full"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="skeleton h-6 w-full"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="skeleton h-6 w-full"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="skeleton h-6 w-full"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="skeleton p-1 w-6 h-6 text-blue-600 hover:text-blue-800" />
                    <div className="skeleton p-1 w-6 h-6 text-red-600 hover:text-red-800" />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm">
        <div className="text-gray-600">Showing 0 of 0 products</div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white disabled:opacity-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

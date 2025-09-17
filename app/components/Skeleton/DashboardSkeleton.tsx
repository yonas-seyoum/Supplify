import { DashboardTypography } from "@/app/utils/constants/dashboard";
import CardSkeleton from "./CardSkeleton";

export default function DashboardSkeleton() {
  const { header, dayFilters, exportLabel, salesOverview, stockAlerts } =
    DashboardTypography;
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{header}</h1>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>{dayFilters[0]}</option>
            <option>{dayFilters[1]}</option>
            <option>{dayFilters[2]}</option>
            <option>{dayFilters[3]}</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {exportLabel}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <div key={index}>
              <CardSkeleton />;
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {salesOverview}
          </h2>
          <div className=" skeleton h-64"></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {stockAlerts}
          </h2>
          <div className=" skeleton h-64"></div>
        </div>
      </div>
    </div>
  );
}

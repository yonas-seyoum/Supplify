import React from "react";

import { SalesCharts } from "../components/SalesCharts";
import { StockAlerts } from "../components/StockAlerts";
import { stats } from "../utils/constants/dashboard";
import { DashboardTypography } from "../utils/constants/dashboard";

export default function Dashboard() {
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
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className="p-2 rounded-md bg-gray-50">{stat.icon}</div>
            </div>
            <div className="mt-4">
              <span
                className={`inline-flex items-center text-xs font-medium ${
                  stat.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
                <span className="ml-1">from previous period</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {salesOverview}
          </h2>
          <SalesCharts compact={true} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {stockAlerts}
          </h2>
          <StockAlerts compact={true} />
        </div>
      </div>
    </div>
  );
}

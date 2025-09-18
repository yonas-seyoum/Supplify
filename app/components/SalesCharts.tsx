"use client";

import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { useDashboardContext } from "../context/DashboardContext";

interface SalesChartsProps {
  compact?: boolean;
}
export const SalesCharts: React.FC<SalesChartsProps> = ({
  compact = false,
}) => {
  const [dateRange, setDateRange] = useState("30days");

  const {
    salesData: { salesData },
  } = useDashboardContext();
  const { sales, totalRevenue, totalOrders, totalSalesByCategory } = salesData;

  return (
    <div className="space-y-6">
      {!compact && (
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Sales Analytics</h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md bg-white cursor-pointer">
                <Calendar size={18} className="text-gray-500" />
                <span className="text-sm text-gray-700">
                  {dateRange === "7days" && "Last 7 days"}
                  {dateRange === "30days" && "Last 30 days"}
                  {dateRange === "90days" && "Last 90 days"}
                  {dateRange === "year" && "This year"}
                </span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
              Export Report
            </button>
          </div>
        </div>
      )}
      <div
        className={`grid ${
          compact ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"
        } gap-6`}
      >
        <div
          className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${
            compact ? "" : "lg:col-span-2"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Monthly Sales
            </h2>
            {!compact && (
              <select
                className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="year">This year</option>
              </select>
            )}
          </div>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end">
              {sales?.map((data, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center justify-end h-full"
                >
                  <div
                    className="w-full max-w-[30px] bg-blue-500 rounded-t-sm mx-auto"
                    style={{
                      height: `${(data.sales * 100) / totalRevenue}%`,
                    }}
                  ></div>
                  <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Total Sales</span>
            </div>
          </div>
        </div>
        {!compact && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Sales by Category
            </h2>
            <div className="space-y-4">
              {totalSalesByCategory?.map((data, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {data.category}
                    </span>
                    <span className="text-sm text-gray-600">
                      ${(data.sales / 1000).toFixed(1)}k
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{
                        width: `${(data.sales * 100) / totalRevenue}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-base font-medium text-gray-800 mb-4">
                Summary
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Total Revenue</div>
                  <div className="text-xl font-semibold text-gray-900 mt-1">
                    ${totalRevenue.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Total Orders</div>
                  <div className="text-xl font-semibold text-gray-900 mt-1">
                    {totalOrders.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

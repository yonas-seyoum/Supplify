"use client";

import React from "react";

import { SalesCharts } from "../components/SalesCharts";
import { StockAlerts } from "../components/StockAlerts";
import { stats } from "../utils/constants/dashboard";
import { DashboardTypography } from "../utils/constants/dashboard";
import { useDashboardContext } from "../context/dashboard.content.provider";
import { AlertTriangle, DollarSign, Package, Truck } from "lucide-react";

export default function Dashboard() {
  const { header, dayFilters, exportLabel, stockAlerts } = DashboardTypography;

  const { data } = useDashboardContext();

  const {
    totalProducts,
    salesOverview,
    activeSuppliers,
    lowStockItems,
    totalNumberOfLowStockItems,
  } = data;

  const month = new Date().toLocaleString("en-US", { month: "long" });

  const currentMonthRevenue = salesOverview
    .filter((overview) => {
      return overview.month === month;
    })
    .map((data) => {
      return data.revenue;
    });

  const revenue = salesOverview.reduce((acc, sale) => {
    acc += sale.revenue;
    return acc;
  }, 0);

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
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Products
              </p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                {totalProducts}
              </p>
            </div>
            <div className="p-2 rounded-md bg-gray-50">
              <Package className="text-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`inline-flex items-center text-xs font-medium ${
                true ? "text-green-600" : "text-red-600"
              }`}
            >
              +4.75%
              <span className="ml-1">from previous period</span>
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Low Stock Items
              </p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                {totalNumberOfLowStockItems}
              </p>
            </div>
            <div className="p-2 rounded-md bg-gray-50">
              <AlertTriangle className="text-orange-500" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`inline-flex items-center text-xs font-medium ${
                false ? "text-green-600" : "text-red-600"
              }`}
            >
              -2
              <span className="ml-1">from previous period</span>
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Monthly Sales</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                {revenue}
              </p>
            </div>
            <div className="p-2 rounded-md bg-gray-50">
              <Package className="text-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`inline-flex items-center text-xs font-medium ${
                true ? "text-green-600" : "text-red-600"
              }`}
            >
              +12.5%
              <span className="ml-1">from previous period</span>
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Active Suppliers
              </p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                {activeSuppliers}
              </p>
            </div>
            <div className="p-2 rounded-md bg-gray-50">
              <Truck className="text-purple-500" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`inline-flex items-center text-xs font-medium ${
                true ? "text-green-600" : "text-red-600"
              }`}
            >
              0<span className="ml-1">from previous period</span>
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                {currentMonthRevenue}
              </p>
            </div>
            <div className="p-2 rounded-md bg-gray-50">
              <DollarSign className="text-green-500" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`inline-flex items-center text-xs font-medium ${
                true ? "text-green-600" : "text-red-600"
              }`}
            >
              +18.2%
              <span className="ml-1">from previous period</span>
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Orders</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">384</p>
            </div>
            <div className="p-2 rounded-md bg-gray-50">
              <Package className="text-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`inline-flex items-center text-xs font-medium ${
                true ? "text-green-600" : "text-red-600"
              }`}
            >
              +7.4%
              <span className="ml-1">from previous period</span>
            </span>
          </div>
        </div>
        {/* {stats.map((stat, index) => (
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
        ))} */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {/* {salesOverview} */}
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

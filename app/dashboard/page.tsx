"use client";

import React from "react";

import { SalesCharts } from "../components/SalesCharts";
import { StockAlerts } from "../components/StockAlerts";
import { stats } from "../utils/constants/dashboard";
import { DashboardTypography } from "../utils/constants/dashboard";
import { useDashboardContext } from "../context/DashboardContext";
import Card from "../components/Card";
import DashboardSkeleton from "../components/Skeleton/DashboardSkeleton";

export default function Dashboard() {
  const { header, dayFilters, exportLabel, salesOverview, stockAlerts } =
    DashboardTypography;

  const {
    productsData: { products, lowStockItems, isProductsLoading },
    suppliersData: { suppliers, isSuppliersLoading },
    salesData: {
      salesData: { sales, totalRevenue, totalOrders },
      salesError,
      salesIsLoading,
    },
  } = useDashboardContext();

  const AverageMonthlySales =
    sales?.map((s) => s.sales).reduce((a, b) => a + b, 0) / sales?.length;

  const numberOfSuppliers = suppliers.length;

  const loading = isProductsLoading || isSuppliersLoading || salesIsLoading;

  if (loading) return <DashboardSkeleton />;

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
        <Card
          title="Total Products"
          value={products.length}
          icon={stats[0].icon}
        />
        <Card
          title="Low Stock Items"
          value={lowStockItems.length}
          icon={stats[1].icon}
        />
        <Card
          title="Average Monthly Sales"
          value={`$${AverageMonthlySales.toLocaleString()}`}
          icon={stats[2].icon}
        />
        <Card
          title="Active Suppliers"
          value={numberOfSuppliers}
          icon={stats[3].icon}
        />
        <Card
          title="Revenue"
          value={`$${totalRevenue?.toLocaleString()}`}
          icon={stats[4].icon}
        />
        <Card
          title="Orders"
          value={totalOrders.toLocaleString()}
          icon={stats[5].icon}
        />
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

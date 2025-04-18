"use client";

import React, { useMemo, useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { categorySalesData } from "../utils/constants/sales";
import { useDashboardContext } from "../context/dashboard.content.provider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartsProps {
  compact?: boolean;
}

export const SalesCharts: React.FC<SalesChartsProps> = ({
  compact = false,
}) => {
  const [dateRange, setDateRange] = useState("30days");

  const { data } = useDashboardContext();
  const { salesOverview } = data;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { sortedLabels, chartDataSet } = useMemo(() => {
    const sorted = [...salesOverview].sort(
      (a, b) => months.indexOf(a.month) - months.indexOf(b.month)
    );

    const labels = months;
    const data = sorted.map((item) => item.revenue);

    return {
      sortedLabels: labels,
      chartDataSet: data,
    };
  }, [salesOverview]);

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  };

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
          className={`bg-white p-6 rounded-lg border border-gray-100 ${
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
          <Line
            options={chartOptions}
            data={{
              labels: sortedLabels,
              datasets: [
                {
                  data: chartDataSet,
                  borderColor: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  tension: 0.4,
                  fill: true,
                },
              ],
            }}
          />

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
              {categorySalesData.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {category.category}
                    </span>
                    <span className="text-sm text-gray-600">
                      ${(category.sales / 1000).toFixed(1)}k
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{
                        width: `${category.percentage}%`,
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
                    $298,800
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Total Orders</div>
                  <div className="text-xl font-semibold text-gray-900 mt-1">
                    2,840
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

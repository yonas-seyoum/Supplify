"use client";

import React, { useState } from "react";
import { ArrowUpDown, Filter } from "lucide-react";
import { useDashboardContext } from "../context/DashboardContext";
interface StockAlertsProps {
  compact?: boolean;
}
export const StockAlerts: React.FC<StockAlertsProps> = ({
  compact = false,
}) => {
  const { products } = useDashboardContext();

  const lowStockItems = products.filter(
    (item) => item.quantity <= item.threshold
  );

  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [alertFilter, setAlertFilter] = useState("all");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  const filteredItems = lowStockItems
    .filter((item) => {
      if (alertFilter === "all") return true;
      if (alertFilter === "critical" && item.quantity <= item.threshold / 2)
        return true;
      if (
        alertFilter === "warning" &&
        item.quantity > item.threshold / 2 &&
        item.quantity <= item.threshold
      )
        return true;
      return false;
    })
    .sort((a, b) => {
      const column = sortColumn as keyof typeof a;
      if (a[column] < b[column]) return sortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const displayItems = compact ? filteredItems.slice(0, 4) : filteredItems;
  return (
    <div className="space-y-4">
      {!compact && (
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Stock Alerts</h1>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-500" />
            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={alertFilter}
              onChange={(e) => setAlertFilter(e.target.value)}
            >
              <option value="all">All Alerts</option>
              <option value="critical">Critical Only</option>
              <option value="warning">Warning Only</option>
            </select>
          </div>
        </div>
      )}
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-100 ${
          compact ? "" : "overflow-hidden"
        }`}
      >
        {!compact && (
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-medium text-gray-700">
              Low Stock Items ({filteredItems.length})
            </h2>
            <button className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
              Restock All
            </button>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="py-3 px-4 text-left font-medium">
                  <button
                    className="flex items-center gap-1"
                    onClick={() => handleSort("name")}
                  >
                    Product
                    {!compact && <ArrowUpDown size={14} />}
                  </button>
                </th>
                <th className="py-3 px-4 text-left font-medium">
                  <button
                    className="flex items-center gap-1"
                    onClick={() => handleSort("quantity")}
                  >
                    Stock Level
                    {!compact && <ArrowUpDown size={14} />}
                  </button>
                </th>
                {!compact && (
                  <th className="py-3 px-4 text-left font-medium">Category</th>
                )}
                {!compact && (
                  <th className="py-3 px-4 text-center font-medium">Actions</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayItems.map((item) => {
                const percentage = 1 * 100; //
                const isCritical = item.quantity <= item.threshold / 2;
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-gray-800">
                          {item.name}
                        </div>
                        {!compact && (
                          <div className="text-xs text-gray-500 mt-1">
                            Threshold: {item.threshold} units
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-medium ${
                              isCritical ? "text-red-600" : "text-orange-500"
                            }`}
                          >
                            {item.quantity / 12} {/*item.maxQuantity*/}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              isCritical
                                ? "bg-red-100 text-red-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {isCritical ? "Critical" : "Warning"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              isCritical ? "bg-red-500" : "bg-orange-400"
                            }`}
                            style={{
                              width: `${percentage}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    {!compact && (
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">
                          {item.category}
                        </span>
                      </td>
                    )}
                    {!compact && (
                      <td className="py-3 px-4 text-center">
                        <button className="px-3 py-1 text-sm text-blue-600 font-medium hover:text-blue-800">
                          Restock
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {compact && filteredItems.length > 4 && (
          <div className="p-3 border-t border-gray-200 text-center">
            <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
              View all {filteredItems.length} alerts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { Search, Filter, ArrowUpDown, Plus, Edit, Trash2 } from "lucide-react";
import { AddProductModal } from "@/app/components/Modal/AddProductModal";
import { products } from "@/app/utils/constants/products";

export default function ProductTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const [isAddProductModalOpen, setIsAddProductModalOpen] =
    useState<boolean>(false);
  const handleAddProductModalState = () => {
    setIsAddProductModalOpen(!isAddProductModalOpen);
  };

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];
  // Handle sorting
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  // Filter and sort products
  const filteredProducts = products
    .filter(
      (product) =>
        (categoryFilter === "all" || product.category === categoryFilter) &&
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      const column = sortColumn as keyof typeof a;
      if (a[column] < b[column]) return sortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button
          onClick={handleAddProductModalState}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-500" />
            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>
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
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="py-3 px-4 text-left font-medium">Description</th>
                <th className="py-3 px-4 text-left font-medium">
                  <button
                    className="flex items-center gap-1"
                    onClick={() => handleSort("quantity")}
                  >
                    Quantity
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="py-3 px-4 text-left font-medium">
                  <button
                    className="flex items-center gap-1"
                    onClick={() => handleSort("price")}
                  >
                    Price
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="py-3 px-4 text-left font-medium">
                  <button
                    className="flex items-center gap-1"
                    onClick={() => handleSort("category")}
                  >
                    Category
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="py-3 px-4 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800 font-medium">
                    {product.name}
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {product.description}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span
                        className={`${
                          product.quantity <= 10
                            ? "text-red-600"
                            : product.quantity <= 20
                            ? "text-orange-500"
                            : "text-green-600"
                        } font-medium`}
                      >
                        {product.quantity}
                      </span>
                      {product.quantity <= 20 && (
                        <span
                          className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                            product.quantity <= 10
                              ? "bg-red-100 text-red-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {product.quantity <= 10 ? "Low" : "Warning"}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Edit size={18} />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-800">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm">
          <div className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </div>
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
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={handleAddProductModalState}
        onSubmit={() => {}}
      />
    </div>
  );
}

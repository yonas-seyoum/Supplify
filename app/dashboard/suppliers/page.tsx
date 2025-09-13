"use client";

import React, { useState } from "react";
import { Search, Plus, Mail, Phone, MapPin, Edit, Trash2 } from "lucide-react";
import { AddSupplierModal } from "@/app/components/Modal/AddSupplierModal";
import { useDashboardContext } from "@/app/context/DashboardContext";
export default function SupplierTable() {
  const { suppliers, deleteSupplier } = useDashboardContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalState = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Suppliers</h1>
        <button
          onClick={handleModalState}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Supplier
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 flex border-b border-gray-200">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search suppliers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Supplier</th>
                <th className="py-3 px-4 text-left font-medium">Contact</th>
                <th className="py-3 px-4 text-left font-medium">Category</th>
                <th className="py-3 px-4 text-left font-medium">Status</th>
                <th className="py-3 px-4 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSuppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-800">
                        {supplier.name}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin size={14} className="mr-1" />
                        {supplier.address}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <div className="text-sm text-gray-800">
                        {supplier.contact}
                      </div>
                      <div className="flex flex-col text-xs text-gray-500 mt-1">
                        <div className="flex items-center">
                          <Mail size={14} className="mr-1" />
                          {supplier.email}
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone size={14} className="mr-1" />
                          {supplier.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">
                      {supplier.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        supplier.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {supplier.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Edit size={18} />
                      </button>
                      <button
                        className="p-1 text-red-600 hover:text-red-800"
                        onClick={() => deleteSupplier(supplier.id)}
                      >
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
            Showing {filteredSuppliers.length} of {suppliers.length} suppliers
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
      <AddSupplierModal
        isOpen={isModalOpen}
        onClose={handleModalState}
        onSubmit={() => {}}
      />
    </div>
  );
}

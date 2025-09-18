"use client";

import React, { useState } from "react";
import { Search, Plus, ArrowRight, ScanLine } from "lucide-react";

import { AddProductModal } from "@/app/components/Modal/AddProductModal";
import { ProcessOrderModal } from "@/app/components/Modal/ProcessOrderModal";

export default function BarcodeScanner() {
  const [barcodeInput, setBarcodeInput] = useState("");
  const [isAddProductModalOpen, setIsAddProductModalOpen] =
    useState<boolean>(false);
  const [isProcessOrderModalOpen, setIsProcessOrderModalOpen] =
    useState<boolean>(false);

  const handleAddProductModalState = () => {
    setIsAddProductModalOpen(!isAddProductModalOpen);
  };
  const handleProcessOrderModalState = () => {
    setIsProcessOrderModalOpen(!isProcessOrderModalOpen);
  };

  const [scanHistory, setScanHistory] = useState([
    {
      id: 1,
      barcode: "7890123456789",
      product: "Wireless Headphones",
      time: "10:23 AM",
      status: "success",
    },
    {
      id: 2,
      barcode: "1234567890123",
      product: "Office Chair",
      time: "09:45 AM",
      status: "success",
    },
    {
      id: 3,
      barcode: "4567890123456",
      product: "Unknown",
      time: "09:12 AM",
      status: "error",
    },
  ]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (barcodeInput.trim()) {
      // In a real app, you would look up the product by barcode
      const newScan = {
        id: scanHistory.length + 1,
        barcode: barcodeInput,
        product: "Product Lookup...",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "pending",
      };
      setScanHistory([newScan, ...scanHistory]);
      setBarcodeInput("");
    }
  };
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Barcode Scanner</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Scan Barcode
          </h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
            <ScanLine size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-4">
              Scan a barcode using your device's camera or enter it manually
              below
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
              Activate Camera
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter barcode manually..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={barcodeInput}
                onChange={(e) => setBarcodeInput(e.target.value)}
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
              >
                Find
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={handleAddProductModalState}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Plus size={20} className="text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-medium">Add Product</div>
                <div className="text-xs text-gray-500 mt-1">
                  Create new inventory item
                </div>
              </div>
            </button>
            <button
              onClick={handleProcessOrderModalState}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <ArrowRight size={20} className="text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-medium">Process Order</div>
                <div className="text-xs text-gray-500 mt-1">
                  Ship or receive items
                </div>
              </div>
            </button>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Recent Scans
            </h3>
            <div className="space-y-3">
              {scanHistory.map((scan) => (
                <div key={scan.id} className="p-3 bg-gray-50 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-800">
                        {scan.product}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Barcode: {scan.barcode}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{scan.time}</div>
                      <div
                        className={`text-xs mt-1 ${
                          scan.status === "success"
                            ? "text-green-600"
                            : scan.status === "error"
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                      >
                        {scan.status === "success"
                          ? "Found"
                          : scan.status === "error"
                          ? "Not found"
                          : "Processing..."}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={handleAddProductModalState}
      />
      <ProcessOrderModal
        isOpen={isProcessOrderModalOpen}
        onClose={handleProcessOrderModalState}
        onSubmit={() => {}}
      />
    </div>
  );
}

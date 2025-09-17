"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { AddProductModal } from "@/app/components/Modal/AddProductModal";
import ProductsTable from "@/app/components/ProductsTable";
import { useDashboardContext } from "@/app/context/DashboardContext";
import ProductsSkeleton from "@/app/components/Skeleton/ProductsSkeleton";

export default function Products() {
  const [isAddProductModalOpen, setIsAddProductModalOpen] =
    useState<boolean>(false);
  const handleAddProductModalState = () => {
    setIsAddProductModalOpen(!isAddProductModalOpen);
  };
  const { products } = useDashboardContext();

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
      {products ? <ProductsTable /> : <ProductsSkeleton />}
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={handleAddProductModalState}
      />
    </div>
  );
}

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../utils/constants/products";
import { Supplier } from "../utils/constants/suppliers";
import { SalesData } from "../utils/constants/sales";

interface DashboardContext {
  isAddingEntity: boolean;
  products: Product[];
  lowStockItems: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  suppliers: Supplier[];
  addSupplier: (supplier: Supplier) => void;
  deleteSupplier: (id: number) => void;
  salesData: SalesData;
}

export const DashboardContext = createContext<DashboardContext | undefined>(
  undefined
);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within an DashboardContextProvider"
    );
  }
  return context;
};

export default function DashboardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAddingEntity, setIsAddingEntity] = useState<boolean>(false);
  const [products, setProducts] = React.useState<Product[]>([]);

  const [suppliers, setSuppliers] = React.useState<Supplier[]>([
    {
      id: 0,
      name: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      website: "",
      paymentTerms: "",
      notes: "",
      category: "Electronics",
      status: "active",
    },
  ]);

  const [salesData, setSalesData] = useState<SalesData>({} as SalesData);
  const [lowStockItems, setLowStockItems] = useState<Product[]>([]);

  const addProduct = async (product: Product) => {
    try {
      setIsAddingEntity(true);
      await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      fetchProducts();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
    setIsAddingEntity(false);
  };

  const deleteProduct = async (id: number) => {
    try {
      await fetch("/api/products", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      fetchProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const fetchProducts = async () => {
    const res = await fetch("/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setProducts(data);

    const lowStockItems = data.filter(
      (item: Product) =>
        item.quantity <= item.threshold ||
        (item.quantity > item.threshold && item.quantity <= item.threshold * 2)
    );
    setLowStockItems(lowStockItems);
  };

  const addSupplier = async (supplier: Supplier) => {
    try {
      await fetch("/api/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supplier),
      });
      fetchSuppliers();
    } catch (error) {
      console.error("Failed to add supplier:", error);
    }
  };
  const deleteSupplier = async (id: number) => {
    try {
      await fetch("/api/suppliers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      fetchSuppliers();
    } catch (error) {
      console.error("Failed to delete supplier:", error);
    }
  };

  const fetchSuppliers = async () => {
    const res = await fetch("/api/suppliers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setSuppliers(data);
  };

  const fetchSales = async () => {
    const res = await fetch("/api/sales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setSalesData(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchSuppliers();
    fetchSales();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        isAddingEntity,
        products,
        addProduct,
        deleteProduct,
        suppliers,
        addSupplier,
        deleteSupplier,
        salesData,
        lowStockItems,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

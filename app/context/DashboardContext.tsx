"use client";

import React, { createContext, useContext, useEffect } from "react";
import { Product } from "../utils/constants/products";
import { Supplier } from "../utils/constants/suppliers";

interface DashboardContext {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  suppliers: Supplier[];
  addSupplier: (supplier: Supplier) => void;
  deleteSupplier: (id: number) => void;
  dashboardData: {
    numerOfProducts: number;
    numberOfSuppliers: number;
    lowStockItems: number;
  };
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
  const [products, setProducts] = React.useState<Product[]>([
    {
      id: 0,
      name: "",
      description: "",
      quantity: 0,
      category: "Electronics",
      threshold: 0,
      price: 0,
      barcode: 0,
    },
  ]);

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

  const dashboardData = {
    numerOfProducts: products.length,
    numberOfSuppliers: suppliers.length,
    lowStockItems: products.filter((p) => p.quantity <= p.threshold).length,
  };

  const addProduct = async (product: Product) => {
    try {
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

  useEffect(() => {
    fetchProducts();
    fetchSuppliers();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        suppliers,
        addSupplier,
        deleteSupplier,
        dashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

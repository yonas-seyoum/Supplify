import { useState, useEffect } from "react";
import { Product } from "../utils/constants/products";
import { useAuthContext } from "../context/AuthContext";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [lowStockItems, setLowStockItems] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();

  useEffect(() => {
    fetchProducts();
  }, [user]);

  const addProduct = async (product: Product) => {
    setIsProductsLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
            const lowStockItems = data.filter(
              (item: Product) =>
                item.quantity <= item.threshold ||
                (item.quantity > item.threshold &&
                  item.quantity <= item.threshold * 2)
            );
      setProducts(data);
      setLowStockItems(lowStockItems)
    } catch (error) {
      console.error("Failed to add product:", error);
    } finally {
      setIsProductsLoading(false);
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
    if (!user) return;
    try {
      const res = await fetch("/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();

      const lowStockItems = data.filter(
        (item: Product) =>
          item.quantity <= item.threshold ||
          (item.quantity > item.threshold &&
            item.quantity <= item.threshold * 2)
      );
      setProducts(data);
      setLowStockItems(lowStockItems);
    } catch (err) {
      setError("Failed to fetch products");
      setIsProductsLoading(false);
    } finally {
      setIsProductsLoading(false);
    }
  };

  return {
    products,
    lowStockItems,
    isProductsLoading,
    error,
    addProduct,
    deleteProduct,
  };
}

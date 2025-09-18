import { useEffect, useState } from "react";
import { Supplier } from "../utils/constants/suppliers";
import { useAuthContext } from "../context/AuthContext";

export default function useSuppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isSuppliersLoading, setIsSuppliersLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();

  useEffect(() => {
    fetchSuppliers();
  }, [user]);

  const addSupplier = async (supplier: Supplier) => {
    try {
      await fetch("/api/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
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
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ id }),
      });

      fetchSuppliers();
    } catch (error) {
      console.error("Failed to delete supplier:", error);
    }
  };

  const fetchSuppliers = async () => {
    if (!user) return;
    try {
      const res = await fetch("/api/suppliers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();
      setSuppliers(data);
    } catch (error) {
      setError("Failed to fetch suppliers");
      setIsSuppliersLoading(false);
    } finally {
      setIsSuppliersLoading(false);
    }
  };

  return { suppliers, addSupplier, deleteSupplier, isSuppliersLoading, error };
}

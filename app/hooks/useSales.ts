import { useEffect, useState } from "react";
import { SalesData } from "../utils/constants/sales";
import { useAuthContext } from "../context/AuthContext";

export default function useSales() {
  const [salesData, setSalesData] = useState<SalesData>({} as SalesData);
  const [salesIsLoading, setSalesIsLoading] = useState<boolean>(true);
  const [salesError, setSalesError] = useState<string | null>(null);
  const { user } = useAuthContext();

  useEffect(() => {
    fetchSales();
  }, [user]);

  const fetchSales = async () => {
    if (!user) return;
    try {
      const res = await fetch("/api/sales", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();

      setSalesData(data);
      setSalesIsLoading(false);
    } catch (error) {
      setSalesError("");
      setSalesIsLoading(false);
    }
  };

  return { salesData, salesIsLoading, salesError };
}

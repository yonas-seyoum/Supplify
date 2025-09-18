import { useEffect, useState } from "react";
import { SalesData } from "../utils/constants/sales";

export default function useSales() {
  const [salesData, setSalesData] = useState<SalesData>({} as SalesData);
  const [salesIsLoading, setSalesIsLoading] = useState<boolean>(true);
  const [salesError, setSalesError] = useState<string | null>(null);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const res = await fetch("/api/sales", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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

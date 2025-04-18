import { useQuery } from "@tanstack/react-query";

export function useDashboard() {
  const url = "https://supplify-api.up.railway.app";
  const { data, isPending, error } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  return { data, isPending, error };
}

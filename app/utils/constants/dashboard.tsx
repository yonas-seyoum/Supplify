import {
  Package,
  AlertTriangle,
  TrendingUp,
  Truck,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

export type Stats = {
  title: string;
  value: string;
  change: string;
  icon: any;
  positive: boolean;
};

export type DashboardTypographyType = {
  header: string;
  dayFilters: Array<string>;
  exportLabel: string;
  salesOverview: string;
  stockAlerts: string;
};

export const DashboardTypography: DashboardTypographyType = {
  header: "Dashboard",
  dayFilters: ["Last 7 days", "Last 30 days", "This month", "This year"],
  exportLabel: "Export",
  salesOverview: "Sales Overview",
  stockAlerts: "Low Stock Items",
};

export const stats: Stats[] = [
  {
    title: "Total Products",
    value: "1,284",
    change: "+4.75%",
    icon: <Package className="text-blue-500" />,
    positive: true,
  },
  {
    title: "Low Stock Items",
    value: "23",
    change: "+2",
    icon: <AlertTriangle className="text-orange-500" />,
    positive: false,
  },
  {
    title: "Monthly Sales",
    value: "$48,294",
    change: "+12.5%",
    icon: <TrendingUp className="text-green-500" />,
    positive: true,
  },
  {
    title: "Active Suppliers",
    value: "34",
    change: "0",
    icon: <Truck className="text-purple-500" />,
    positive: true,
  },
  {
    title: "Revenue",
    value: "$295,482",
    change: "+18.2%",
    icon: <DollarSign className="text-green-500" />,
    positive: true,
  },
  {
    title: "Orders",
    value: "384",
    change: "+7.4%",
    icon: <ShoppingCart className="text-blue-500" />,
    positive: true,
  },
];

import {
  LayoutDashboard,
  Package,
  AlertTriangle,
  BarChart3,
  Truck,
  Settings,
  ScanLine,
} from "lucide-react";

export type MenuItem = {
  id: string;
  label: string;
  icon: any;
  route: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    route: "/dashboard", // Add route for each menu item
  },
  {
    id: "products",
    label: "Products",
    icon: <Package size={20} />,
    route: "/dashboard/products", // Add route
  },
  {
    id: "stock",
    label: "Stock Alerts",
    icon: <AlertTriangle size={20} />,
    route: "/dashboard/stock", // Add route
  },
  {
    id: "sales",
    label: "Sales",
    icon: <BarChart3 size={20} />,
    route: "/dashboard/sales", // Add route
  },
  {
    id: "suppliers",
    label: "Suppliers",
    icon: <Truck size={20} />,
    route: "/dashboard/suppliers", // Add route
  },
  {
    id: "barcode",
    label: "Barcode Scanner",
    icon: <ScanLine size={20} />,
    route: "/dashboard/barcode-scanner", // Add route
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={20} />,
    route: "/dashboard/settings", // Add route
  },
];

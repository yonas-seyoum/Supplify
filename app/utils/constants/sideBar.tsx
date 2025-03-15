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
    route: "/dashboard",
  },
  {
    id: "products",
    label: "Products",
    icon: <Package size={20} />,
    route: "/dashboard/products",
  },
  {
    id: "stock",
    label: "Stock Alerts",
    icon: <AlertTriangle size={20} />,
    route: "/dashboard/stock",
  },
  {
    id: "sales",
    label: "Sales",
    icon: <BarChart3 size={20} />,
    route: "/dashboard/sales",
  },
  {
    id: "suppliers",
    label: "Suppliers",
    icon: <Truck size={20} />,
    route: "/dashboard/suppliers",
  },
  {
    id: "barcode",
    label: "Barcode Scanner",
    icon: <ScanLine size={20} />,
    route: "/dashboard/barcode-scanner",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={20} />,
    route: "/dashboard/settings",
  },
];

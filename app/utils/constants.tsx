import { BarChart3, ScanLine, Store, Truck } from "lucide-react";

export const features = [
  {
    icon: <Store className="h-6 w-6 text-blue-600" />,
    title: "Inventory Management",
    description:
      "Track your stock levels in real-time with advanced inventory management tools",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Sales Analytics",
    description:
      "Get detailed insights into your sales performance with interactive charts",
  },
  {
    icon: <Truck className="h-6 w-6 text-blue-600" />,
    title: "Supplier Management",
    description: "Manage your suppliers and orders all in one place",
  },
  {
    icon: <ScanLine className="h-6 w-6 text-blue-600" />,
    title: "Barcode Scanning",
    description: "Quickly update inventory with built-in barcode scanning",
  },
];
export const benefits = [
  "Real-time stock tracking",
  "Automated low stock alerts",
  "Sales performance analytics",
  "Supplier relationship management",
  "Mobile-friendly interface",
  "Secure cloud storage",
];

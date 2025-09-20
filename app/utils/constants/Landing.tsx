import {
  BarChart3Icon,
  LineChartIcon,
  PackageIcon,
  ScanBarcodeIcon,
  ShieldCheckIcon,
  TruckIcon,
  UsersIcon,
} from "lucide-react";
import { ReactNode } from "react";

export interface Benefits {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Features {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export const benefits: Benefits[] = [
  {
    title: "Easy to Use",
    description:
      "Intuitive interface designed for teams of all technical levels. Get up and running in minutes.",
    icon: <ShieldCheckIcon className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Real-time Analytics",
    description:
      "Make informed decisions with instant access to critical inventory and sales data.",
    icon: <LineChartIcon className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Scalable Solution",
    description:
      "Grow from a small business to enterprise with a platform that scales with your needs.",
    icon: <UsersIcon className="w-6 h-6 text-blue-600" />,
  },
];

export const features: Features[] = [
  {
    title: "Inventory Management",
    description:
      "Track stock levels in real-time across multiple locations with automated alerts and reordering.",
    icon: <PackageIcon className="w-10 h-10 text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Sales Analytics",
    description:
      "Gain insights into sales trends, forecast demand, and optimize inventory levels based on data.",
    icon: <BarChart3Icon className="w-10 h-10 text-indigo-600" />,
    color: "bg-indigo-50",
  },
  {
    title: "Supplier Management",
    description:
      "Streamline vendor relationships, compare prices, and manage purchase orders in one place.",
    icon: <TruckIcon className="w-10 h-10 text-purple-600" />,
    color: "bg-purple-50",
  },
  {
    title: "Barcode Scanning",
    description:
      "Quickly receive, count, and ship inventory with our mobile scanning technology.",
    icon: <ScanBarcodeIcon className="w-10 h-10 text-teal-600" />,
    color: "bg-teal-50",
  },
];

export type MonthlySalesData = {
  month: string;
  sales: number;
  orders: number;
};

export type CategorySalesData = {
  category: "Electronics" | "Furniture" | "Health" | "Beauty" | "Other";
  sales: number;
  percentage: number;
};

export const monthlySalesData: MonthlySalesData[] = [
  {
    month: "Jan",
    sales: 12400,
    orders: 145,
  },
  {
    month: "Feb",
    sales: 15600,
    orders: 182,
  },
  {
    month: "Mar",
    sales: 18200,
    orders: 205,
  },
  {
    month: "Apr",
    sales: 17800,
    orders: 190,
  },
  {
    month: "May",
    sales: 19500,
    orders: 220,
  },
  {
    month: "Jun",
    sales: 22400,
    orders: 252,
  },
  {
    month: "Jul",
    sales: 24100,
    orders: 265,
  },
  {
    month: "Aug",
    sales: 23800,
    orders: 258,
  },
  {
    month: "Sep",
    sales: 25600,
    orders: 290,
  },
  {
    month: "Oct",
    sales: 27200,
    orders: 310,
  },
  {
    month: "Nov",
    sales: 29800,
    orders: 345,
  },
  {
    month: "Dec",
    sales: 32400,
    orders: 378,
  },
];

export const categorySalesData: CategorySalesData[] = [
  {
    category: "Electronics",
    sales: 125400,
    percentage: 42,
  },
  {
    category: "Furniture",
    sales: 74200,
    percentage: 25,
  },
  {
    category: "Beauty",
    sales: 45600,
    percentage: 15,
  },
  {
    category: "Health",
    sales: 35800,
    percentage: 12,
  },
  {
    category: "Other",
    sales: 17800,
    percentage: 6,
  },
];

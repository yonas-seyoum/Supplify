export type SalesData = {
  sales: SalesEntry[];
  totalOrders: number;
  totalRevenue: number;
  totalSalesByCategory: totalSalesByCategory[];
};

export type SalesEntry = {
  month: string;
  category: "Electronics" | "Furniture" | "Health" | "Beauty" | "Other";
  orders: number;
  sales: number;
};

export type totalSalesByCategory = { category: string; sales: number };

// export const monthlySalesData: SalesData[] = [
//   {
//     month: "Jan",
//     sales: 12400,
//     orders: 145,
//     category: "Electronics",
//   },
//   {
//     month: "Feb",
//     sales: 15600,
//     orders: 182,
//     category: "Electronics",
//   },
//   {
//     month: "Mar",
//     sales: 18200,
//     orders: 205,
//     category: "Electronics",
//   },
//   {
//     month: "Apr",
//     sales: 17800,
//     orders: 190,
//     category: "Beauty",
//   },
//   {
//     month: "May",
//     sales: 19500,
//     orders: 220,
//     category: "Beauty",
//   },
//   {
//     month: "Jun",
//     sales: 22400,
//     orders: 252,
//     category: "Beauty",
//   },
//   {
//     month: "Jul",
//     sales: 24100,
//     orders: 265,
//     category: "Furniture",
//   },
//   {
//     month: "Aug",
//     sales: 23800,
//     orders: 258,
//     category: "Electronics",
//   },
//   {
//     month: "Sep",
//     sales: 25600,
//     orders: 290,
//     category: "Health",
//   },
//   {
//     month: "Oct",
//     sales: 27200,
//     orders: 310,
//     category: "Electronics",
//   },
//   {
//     month: "Nov",
//     sales: 29800,
//     orders: 345,
//     category: "Furniture",
//   },
//   {
//     month: "Dec",
//     sales: 32400,
//     orders: 378,
//     category: "Furniture",
//   },
// ];

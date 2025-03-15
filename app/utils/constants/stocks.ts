export type LowStockItem = {
  id: number;
  name: string;
  quantity: number;
  maxQuantity: number;
  threshold: number;
  category: "Electronics" | "Furniture" | "Health" | "Beauty";
};

export const lowStockItems: LowStockItem[] = [
  {
    id: 1,
    name: "Moisturizing Cream",
    quantity: 8,
    maxQuantity: 50,
    threshold: 15,
    category: "Beauty",
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    quantity: 5,
    maxQuantity: 40,
    threshold: 10,
    category: "Beauty",
  },
  {
    id: 3,
    name: "Office Chair",
    quantity: 12,
    maxQuantity: 30,
    threshold: 15,
    category: "Furniture",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    quantity: 3,
    maxQuantity: 50,
    threshold: 10,
    category: "Electronics",
  },
  {
    id: 5,
    name: "Protein Bars",
    quantity: 7,
    maxQuantity: 100,
    threshold: 20,
    category: "Health",
  },
  {
    id: 6,
    name: "HDMI Cables",
    quantity: 4,
    maxQuantity: 50,
    threshold: 10,
    category: "Electronics",
  },
];

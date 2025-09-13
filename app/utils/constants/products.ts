export type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  threshold: number;
  barcode: number;
  category: "Electronics" | "Furniture" | "Health" | "Beauty";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling Bluetooth headphones",
    quantity: 45,
    price: 89.99,
    threshold: 4,
    barcode: 777,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Office Chair",
    description: "Ergonomic mesh office chair",
    quantity: 12,
    price: 199.99,
    threshold: 4,
    barcode: 777,
    category: "Furniture",
  },
  {
    id: 3,
    name: "Protein Powder",
    description: "Whey protein isolate, chocolate flavor",
    quantity: 50,
    price: 29.99,
    threshold: 4,
    barcode: 777,
    category: "Health",
  },
  {
    id: 4,
    name: "Moisturizing Cream",
    description: "Daily facial moisturizer with SPF",
    quantity: 8,
    price: 24.99,
    threshold: 4,
    barcode: 777,
    category: "Beauty",
  },
  {
    id: 5,
    name: "Smartphone",
    description: '6.7" display, 128GB storage',
    quantity: 23,
    price: 799.99,
    threshold: 4,
    barcode: 777,
    category: "Electronics",
  },
  {
    id: 6,
    name: "Desk Lamp",
    description: "Adjustable LED desk lamp",
    quantity: 34,
    price: 39.99,
    threshold: 4,
    barcode: 777,
    category: "Furniture",
  },
  {
    id: 7,
    name: "Vitamin C Serum",
    description: "Anti-aging facial serum",
    quantity: 5,
    price: 19.99,
    threshold: 4,
    barcode: 777,
    category: "Beauty",
  },
  {
    id: 8,
    name: "Wireless Keyboard",
    description: "Bluetooth mechanical keyboard",
    quantity: 18,
    price: 69.99,
    threshold: 4,
    barcode: 777,
    category: "Electronics",
  },
];

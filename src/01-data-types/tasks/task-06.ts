/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  weight: number;
  averageRating: number;
  isDiscounted: boolean;
};

const products: Product[] = [
  {
    productCode: "PRD001",
    productName: "Wireless Mouse",
    sellingPrice: 150000,
    stockQuantity: 120,
    weight: 0.15,
    averageRating: 4.5,
    isDiscounted: true,
  },
  {
    productCode: "PRD002",
    productName: "Mini Pc",
    sellingPrice: 750000,
    stockQuantity: 45,
    weight: 1.5,
    averageRating: 4.9,
    isDiscounted: false,
  },
  {
    productCode: "PRD003",
    productName: "Wireless Keyboard",
    sellingPrice: 275000,
    stockQuantity: 200,
    weight: 0.6,
    averageRating: 4.2,
    isDiscounted: true,
  },
];

console.log(products);
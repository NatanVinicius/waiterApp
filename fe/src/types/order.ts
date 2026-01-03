import type { Product } from "./product";

export type OrderProduct = {
  product: Product;
  quantity: number;
};

export type Order = {
  _id: string;
  table: number;
  status: "WAITING" | "PREPARING" | "DONE";
  products: OrderProduct[];
  createdAt: string;
};

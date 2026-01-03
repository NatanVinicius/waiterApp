import { api } from "../api";

export async function getOrders() {
  const response = await api.get("/orders");
  return response.data;
}

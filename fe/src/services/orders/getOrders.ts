import { api } from "../api";

export async function getOrders() {
  const response = await api.get("/orders");
  console.log(response);
  return response.data;
}

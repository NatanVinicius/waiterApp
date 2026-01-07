import { api } from "../api";

export const deleteManyOrders = async () => {
  const response = await api.delete("/orders");
  return response.data;
};

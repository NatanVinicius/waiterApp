import { api } from "../api";

interface DeleteOrderParams {
  orderId: string;
}

export const deleteOrder = async ({ orderId }: DeleteOrderParams) => {
  const response = await api.delete(`/orders/${orderId}`);
  return response.data;
};

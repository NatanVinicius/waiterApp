import { api } from "../api";

interface UpdateOrderStatusParams {
  orderId: string;
  status: "PREPARING" | "DONE" | "WAITING";
}

export const updateOrderStatus = async ({
  orderId,
  status,
}: UpdateOrderStatusParams) => {
  const data = await api.patch(`/orders/${orderId}`, {
    status,
  });
  return data;
};

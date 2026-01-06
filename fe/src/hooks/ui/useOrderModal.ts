import type { Order } from "../../types/order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useDeleteOrder } from "../useDeleteOrder";
import { useUpdateOrderStatus } from "../useUpdateOrderStatus";

type StatusType = "WAITING" | "PREPARING" | "DONE";

export const useOrderModal = (order: Order) => {
  const { mutate, isPending } = useUpdateOrderStatus();
  const { mutate: deleteOrder, isPending: isDeleting } = useDeleteOrder();

  const calculateTotalOrder = () => {
    const totalOrder = order.products.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    return formatCurrency(totalOrder);
  };

  const checkNextOrderStatus = (currentStatus: StatusType) => {
    const NEXT_STATUS_LABEL = {
      WAITING: "Iniciar pedido",
      PREPARING: "Finalizar pedido",
      DONE: "",
    } as const;

    return NEXT_STATUS_LABEL[currentStatus];
  };

  const handleChangeStatus = () => {
    const CHECK_STATUS = {
      WAITING: "PREPARING",
      PREPARING: "DONE",
      DONE: "DONE",
    } as const;

    mutate({
      orderId: order._id,
      status: CHECK_STATUS[order.status],
    });

    return null;
  };

  const handleDeleteOrder = () => {
    deleteOrder({
      orderId: order._id,
    });
  };

  const totalOrder = calculateTotalOrder();
  const nextStatus = checkNextOrderStatus(order.status);

  return {
    totalOrder,
    nextStatus,
    isPending,
    handleChangeStatus,
    handleDeleteOrder,
    isDeleting,
  };
};

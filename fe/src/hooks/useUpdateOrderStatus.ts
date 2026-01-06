import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderStatus } from "../services/orders/updateOrderStatus";

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

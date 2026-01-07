import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteManyOrders } from "../services/orders/deleteManyOrders";

export const useDeleteManyOrders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteManyOrders,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteManyOrders } from "../services/orders/deleteManyOrders";
import { getAxiosErrorMessage } from "../utils/getAxiosErrorMessage";
import toast from "react-hot-toast";

export const useDeleteManyOrders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteManyOrders,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      const message = getAxiosErrorMessage(error);
      toast.error(message);
    },
  });
};

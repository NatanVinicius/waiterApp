import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategoryById } from "../services/categories/deleteCategoryById";
import { getAxiosErrorMessage } from "../utils/getAxiosErrorMessage";
import toast from "react-hot-toast";

export const useDeleteCategoryById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (categoryId: string) => deleteCategoryById(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      const message = getAxiosErrorMessage(error);
      toast.error(message);
    },
  });
};

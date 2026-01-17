import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../services/products/getProductsByCategory";
import { useEffect } from "react";
import { getAxiosErrorMessage } from "../utils/getAxiosErrorMessage";
import toast from "react-hot-toast";

export const useProductsByCategorie = (categoryId: string | null) => {
  const query = useQuery({
    queryKey: ["productsByCategory", categoryId],
    queryFn: () => getProductByCategory(categoryId as string),
    enabled: !!categoryId,
  });

  const { isError, error } = query;

  useEffect(() => {
    if (!isError) {
      return;
    }

    if (getAxiosErrorMessage(error)) {
      toast.error(error.message);
      return;
    }

    toast.error("Unexpected error while loading products by category.");
  }, [isError, error]);

  return query;
};

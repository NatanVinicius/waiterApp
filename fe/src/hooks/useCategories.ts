import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/products/categories/getCategories";
import { getAxiosErrorMessage } from "../utils/getAxiosErrorMessage";
import toast from "react-hot-toast";
import { useEffect } from "react";

export const useCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
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
    toast.error("Unexpected error while loading categories");
  }, [isError, error]);

  return query;
};

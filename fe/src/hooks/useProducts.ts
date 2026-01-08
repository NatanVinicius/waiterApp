import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products/getProducts";
import { useEffect } from "react";
import { getAxiosErrorMessage } from "../utils/getAxiosErrorMessage";
import toast from "react-hot-toast";

export const useProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
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

    toast.error("Unexpected error while loading products.");
  }, [isError, error]);

  return query;
};

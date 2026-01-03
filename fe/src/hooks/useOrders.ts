import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/orders/getOrders";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
}

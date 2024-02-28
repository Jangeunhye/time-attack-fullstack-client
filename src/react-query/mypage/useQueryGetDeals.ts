import API from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetDeals() {
  return useQuery({
    queryKey: ["myDeal"],
    queryFn: API.deal.getDeals,
  });
}

import API from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetDeals(enabled: boolean = true) {
  return useQuery({
    queryKey: ["myDeal"],
    queryFn: API.deal.getMyDeals,
    enabled,
  });
}

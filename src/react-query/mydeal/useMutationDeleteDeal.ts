import API from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteDeal() {
  const queryClient = useQueryClient();
  const mutationFn = API.deal.deleteDeal;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["deleteDeal"] }),
  });
}

import API from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationAddLike() {
  const queryClient = useQueryClient();
  const mutationFn = API.deal.addLike;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["addLike"] }),
  });
}

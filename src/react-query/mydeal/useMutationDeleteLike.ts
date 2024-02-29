import API from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteLike() {
  const queryClient = useQueryClient();
  const mutationFn = API.deal.deleteLike;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["deleteLike"] }),
  });
}

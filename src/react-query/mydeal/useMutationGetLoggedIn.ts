import API from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationGetLoggedIn() {
  const queryClient = useQueryClient();
  const mutationFn = API.auth.checkLoggedIn;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["getLoggedIn"] }),
  });
}

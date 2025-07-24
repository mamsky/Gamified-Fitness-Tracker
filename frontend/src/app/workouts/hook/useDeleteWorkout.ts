import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

type DeleteWorkout = {
  message: string;
};

export const useDeleteWorkout = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<
    DeleteWorkout,
    Error,
    { id: number }
  >({
    mutationKey: ["workout"],
    mutationFn: async ({ id }) => {
      const response = await api.delete(`/workouts/${id}`);
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["workout"] });
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message || "An error occurred");
      }
    },
  });

  return { isPending, mutateAsync };
};

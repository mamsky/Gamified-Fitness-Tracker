import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WorkoutDTO, WorkoutDTOSchema } from "../DTO/workoutDTO";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type createWorkout = {
  message: string;
};

export const useCreateWorkout = () => {
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<WorkoutDTO>({
    mode: "onChange",
    resolver: zodResolver(WorkoutDTOSchema),
  });

  const { mutateAsync, isPending } = useMutation<
    createWorkout,
    Error,
    WorkoutDTO
  >({
    mutationKey: ["workout"],
    mutationFn: async (data: WorkoutDTO) => {
      const response = await api.post("/workouts", data);
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["workout"] });
      redirect("/dashboard");
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    },
  });
  const onSubmit = async (data: WorkoutDTO) => {
    await mutateAsync(data);
  };

  return { isPending, handleSubmit, onSubmit, register, errors };
};

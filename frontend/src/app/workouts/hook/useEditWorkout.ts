import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  EditWorkoutDTO,
  EditWorkoutDTOSchema,
  WorkoutDTOS,
} from "../DTO/workoutDTO";

type EditWorkoutResponse = {
  message: string;
};

export const useEditWorkout = (data: WorkoutDTOS) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditWorkoutDTO>({
    defaultValues: {
      exercise_name: data.exercise_name,
      duration: data.duration,
      calories_burned: data.calories_burned,
      date: data.date.split("T")[0],
    },
    mode: "onChange",
    resolver: zodResolver(EditWorkoutDTOSchema),
  });

  const { mutateAsync, isPending } = useMutation<
    EditWorkoutResponse,
    Error,
    EditWorkoutDTO
  >({
    mutationKey: ["workout"],
    mutationFn: async (datas: EditWorkoutDTO) => {
      const response = await api.put(`/workouts/${data.id}`, datas);
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["workout"] });
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    },
  });

  return { register, handleSubmit, mutateAsync, isPending, errors };
};

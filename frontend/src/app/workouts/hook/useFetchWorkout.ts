import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { WorkoutDTOS } from "../DTO/workoutDTO";

export const useFetchWorkout = () => {
  const { data, isPending } = useQuery<WorkoutDTOS[]>({
    queryKey: ["workout"],
    queryFn: async () => {
      const response = await api.get("/workouts");
      return response.data.response;
    },
  });
  const date = new Date();
  const dateNow =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0");

  const workoutLog = data?.filter((d) => d.date.includes(dateNow));

  return { data, isPending, workoutLog };
};

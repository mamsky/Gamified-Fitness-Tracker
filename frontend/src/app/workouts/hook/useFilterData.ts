import { useForm } from "react-hook-form";
import { useFetchWorkout } from "./useFetchWorkout";
import { useEffect, useState } from "react";
import { WorkoutDTOS } from "../DTO/workoutDTO";

export const useFilterData = () => {
  const { data, isPending } = useFetchWorkout();
  const [filteredWorkouts, setFilteredWorkouts] = useState<WorkoutDTOS[]>(
    data!
  );
  const { register, watch, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  const onSubmit = () => {
    let filtered = data;

    if (watch("startDate")) {
      filtered = filtered?.filter(
        (workout) => new Date(workout.date) >= new Date(watch("startDate"))
      );
    }

    if (watch("endDate")) {
      filtered = filtered?.filter(
        (workout) => new Date(workout.date) <= new Date(watch("endDate"))
      );
    }
    setFilteredWorkouts(filtered!);
  };

  useEffect(() => {
    if (!watch("startDate") || !watch("endDate")) {
      setFilteredWorkouts(data!);
    }
  }, [data, watch]);

  return { filteredWorkouts, isPending, register, handleSubmit, onSubmit };
};

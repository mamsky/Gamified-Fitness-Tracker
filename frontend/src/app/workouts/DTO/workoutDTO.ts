import z from "zod";

export type WorkoutDTOS = {
  id: number;
  exercise_name: string;
  duration: number;
  calories_burned: number;
  date: string;
};

export const WorkoutDTOSchema = z.object({
  exercise_name: z.string().min(1, "Exercise name is required"),
  duration: z.number().positive("Duration must be a positive number"),
  calories_burned: z
    .number()
    .positive("Calories burned must be a positive number"),
  date: z.date().max(new Date(), "Date cannot be in the future"),
});

export type WorkoutDTO = z.infer<typeof WorkoutDTOSchema>;

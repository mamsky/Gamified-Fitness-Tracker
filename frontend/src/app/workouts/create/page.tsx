"use client";

import Link from "next/link";
import { useCreateWorkout } from "../hook/useCreateWorkout";

const CreateWorkout = () => {
  const { errors, handleSubmit, isPending, onSubmit, register } =
    useCreateWorkout();
  return (
    <div
      className="bg-cover bg-center min-h-screen flex p-2 justify-center items-center text-black"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="max-w-4xl w-full p-6 bg-white/30 bg-opacity-10 backdrop-blur-3xl rounded-lg shadow-xl">
        <div className="flex justify-between ">
          <Link href={"/dashboard"} className="h-8 w-8">
            <img src="../arrow.svg" alt="arrow left" />
          </Link>
          <div className="flex-1 text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
            Add New Workout
          </div>
        </div>

        <div>
          <label htmlFor="exerciseName" className=" font-semibold">
            Exercise Name
          </label>
          <input
            type="text"
            id="exerciseName"
            {...register("exercise_name")}
            placeholder="Exercise name (eg: Deadlift, Plank, Push-up)"
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.exercise_name && (
            <p className="text-red-500">{errors.exercise_name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="duration" className=" font-semibold">
            Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            {...register("duration", { valueAsNumber: true })}
            placeholder="Duration (eg: 20)"
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.duration && (
            <p className="text-red-500">{errors.duration.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="caloriesBurned" className=" font-semibold">
            Calories Burned (kal)
          </label>
          <input
            type="number"
            id="caloriesBurned"
            {...register("calories_burned", { valueAsNumber: true })}
            placeholder="Calories burned (eg: 250)"
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.calories_burned && (
            <p className="text-red-500">{errors.calories_burned.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className=" font-semibold">
            Date
          </label>
          <input
            type="date"
            id="date"
            {...register("date", { valueAsDate: true })}
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        <div className="flex justify-center my-2">
          <button
            type="submit"
            disabled={isPending}
            onClick={handleSubmit(onSubmit)}
            className="px-6 py-3 bg-blue-500 text-white w-full cursor-pointer font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            {isPending ? "In Progress..." : "Tambah Latihan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;

"use client";
import Link from "next/link";
import React from "react";
import { useFetchWorkout } from "../workouts/hook/useFetchWorkout";
import SkeletonWorkout from "./skeleton";

const WorkoutLogs = () => {
  const { workoutLog, isPending } = useFetchWorkout();
  return (
    <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl mb-6">
      <div className="flex justify-between items-center my-2">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black mb-4">
          Recent Workout Logs
        </h3>
        <Link
          href="/workouts/create"
          className="py-1 px-2.5 text-lg sm:text-xl md:text-2xl cursor-pointer border-r-3 border border-b-4 bg-white/30 font-semibold rounded-xl shadow-lg hover:bg-white/80 transition duration-300"
        >
          +
        </Link>
      </div>
      {isPending ? (
        <SkeletonWorkout />
      ) : (
        <ul className="space-y-4">
          {workoutLog && workoutLog?.length > 0 ? (
            workoutLog.map((log, index) => (
              <li
                key={index}
                className="flex justify-between text-black text-sm sm:text-base"
              >
                <span>{log.exercise_name}</span>
                <span>{log.duration} Minutes</span>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500 text-sm sm:text-base">
              No training records found for today.
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default WorkoutLogs;

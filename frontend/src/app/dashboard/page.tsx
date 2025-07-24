"use client";
import { useState } from "react";
import LevelTracker from "./level-tracker";
import LogoutButton from "./logout-button";
import WorkoutLogs from "./workout-logs";
import Link from "next/link";

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const date = new Date();
  return (
    <div
      className="bg-cover bg-center min-h-screen p-2 flex justify-center items-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="max-w-4xl w-full p-6 bg-white/30 bg-opacity-10 backdrop-blur-3xl rounded-lg shadow-xl">
        <div className="flex justify-between">
          <div className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
            <h1>Dashboard</h1>
            <p className="text-xs text-left text-black">
              {date.toISOString().slice(0, 10)}
            </p>
          </div>
          <div className="font-bold mb-6 text-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-white/50 backdrop-blur-md rounded-lg hover:bg-gray-400 focus:outline-none cursor-pointer"
            >
              Menu
            </button>

            {isOpen && (
              <div className="absolute z-10 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/workouts"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                    >
                      Workout
                    </Link>
                  </li>
                  <li>
                    <LogoutButton />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <LevelTracker />

        <WorkoutLogs />
      </div>
    </div>
  );
};

export default DashboardPage;

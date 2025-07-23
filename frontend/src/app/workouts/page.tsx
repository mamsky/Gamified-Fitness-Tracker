"use client";
import { useState } from "react";

const WorkoutsPage = () => {
  const workoutHistory = [
    { name: "Running", date: "2025-07-20", duration: "45 mins" },
    { name: "Push-ups", date: "2025-07-19", duration: "30 reps" },
    { name: "Yoga", date: "2025-07-18", duration: "30 mins" },
    { name: "Cycling", date: "2025-07-15", duration: "60 mins" },
    { name: "Swimming", date: "2025-07-10", duration: "40 mins" },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredWorkouts, setFilteredWorkouts] = useState(workoutHistory);

  const handleFilterChange = () => {
    let filtered = workoutHistory;

    if (startDate) {
      filtered = filtered.filter(
        (workout) => new Date(workout.date) >= new Date(startDate)
      );
    }
    if (endDate) {
      filtered = filtered.filter(
        (workout) => new Date(workout.date) <= new Date(endDate)
      );
    }

    setFilteredWorkouts(filtered);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center p-2 text-black items-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="max-w-4xl w-full p-6 bg-white/30 bg-opacity-10 backdrop-blur-3xl rounded-lg shadow-xl">
        <div className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
          Workout History
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between mb-6">
          <div className="w-full sm:w-1/2 sm:pr-2 mb-4 sm:mb-0">
            <label htmlFor="startDate" className=" font-semibold">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <label htmlFor="endDate" className=" font-semibold">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleFilterChange}
            className="px-6 py-3 bg-blue-500  font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Filter
          </button>
        </div>

        <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold  mb-4">
            Recent Workout Logs
          </h3>
          <ul className="space-y-4">
            {filteredWorkouts.length > 0 ? (
              filteredWorkouts.map((log, index) => (
                <li
                  key={index}
                  className="flex justify-between  text-sm sm:text-base"
                >
                  <span>{log.name}</span>
                  <span>
                    {log.date} - {log.duration}
                  </span>
                </li>
              ))
            ) : (
              <li className="">
                No workouts found for the selected date range.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;

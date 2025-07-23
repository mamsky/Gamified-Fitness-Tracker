"use client";
import Link from "next/link";
import LogoutButton from "./logout-button";

const DashboardPage = () => {
  const xp = 1200;
  const level = 3;
  const progress = 46;

  const workoutLogs = [
    { name: "Running", duration: "45 mins" },
    { name: "Push-ups", duration: "30 reps" },
    { name: "Yoga", duration: "30 mins" },
  ];

  return (
    <div
      className="bg-cover bg-center min-h-screen p-2 flex justify-center items-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="max-w-4xl w-full p-6 bg-white/30 bg-opacity-10 backdrop-blur-3xl rounded-lg shadow-xl">
        <div className="flex justify-between">
          <div className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
            Dashboard
          </div>
          <div className="font-bold mb-6 text-center">
            <LogoutButton />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-xl font-semibold">XP</h3>
            <p className="text-2xl sm:text-3xl font-bold">{xp}</p>
          </div>

          <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-xl font-semibold">Level</h3>
            <p className="text-2xl sm:text-3xl font-bold">{level}</p>
          </div>

          <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-xl font-semibold">Progress</h3>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-cyan-500 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-lg sm:text-xl font-bold mt-2">{progress}%</p>
          </div>
        </div>

        <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl mb-6">
          <div className="flex justify-between items-center my-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black mb-4">
              Recent Workout Logs
            </h3>
            <Link
              href={"/workouts/create"}
              className="py-1.5 px-3.5 text-2xl sm:text-3xl md:text-4xl cursor-pointer bg-white/30 font-semibold rounded-xl shadow-2xl hover:bg-white/80 transition duration-300"
            >
              +
            </Link>
          </div>

          <ul className="space-y-4">
            {workoutLogs.map((log, index) => (
              <li
                key={index}
                className="flex justify-between text-black text-sm sm:text-base"
              >
                <span>{log.name}</span>
                <span>{log.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

"use client";

const CreateWorkout = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex p-2 justify-center items-center text-black"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="max-w-4xl w-full p-6 bg-white/30 bg-opacity-10 backdrop-blur-3xl rounded-lg shadow-xl">
        <div className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
          Add New Workout
        </div>

        <div>
          <label htmlFor="exerciseName" className=" font-semibold">
            Exercise Name
          </label>
          <input
            type="text"
            id="exerciseName"
            placeholder="Exercise name (eg: Deadlift, Plank, Push-up)"
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="duration" className=" font-semibold">
            Duration (e.g., 30 mins)
          </label>
          <input
            type="number"
            id="duration"
            placeholder="30 minutes"
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="caloriesBurned" className=" font-semibold">
            Calories Burned
          </label>
          <input
            type="number"
            id="caloriesBurned"
            placeholder="Calories burned (eg: 250)"
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="date" className=" font-semibold">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full mt-2 p-3 rounded-lg bg-white/30 bg-opacity-20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500  font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Add Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;

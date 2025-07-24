import React, { useState } from "react";
import { useDeleteWorkout } from "./hook/useDeleteWorkout";
import { EditWorkoutDTO, WorkoutDTOS } from "./DTO/workoutDTO";
import { useEditWorkout } from "./hook/useEditWorkout";

interface PropsState {
  id?: number;
  setIsOpen?: (isOpen: boolean) => void;
  data?: WorkoutDTOS;
}

const DropdownWorkout = ({ id, data }: PropsState) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-2 bg-white/30 rounded-md"
        >
          :
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-32 rounded-md bg-white shadow-lg ">
          <div className="py-1">
            <EditWorkout data={data} setIsOpen={setIsOpen} />
            <DeleteWorkout id={id} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWorkout;

const DeleteWorkout = ({ id, setIsOpen }: PropsState) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isPending, mutateAsync } = useDeleteWorkout();
  const onSubmit = async (id: number) => {
    await mutateAsync({ id });
    setIsModalOpen(!isModalOpen);
    setIsOpen!(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-left text-sm w-full cursor-pointer"
      >
        Delete
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-white-30 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Are you sure delete this workout?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition duration-300 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={() => onSubmit(id!)}
                disabled={isPending}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 cursor-pointer"
              >
                {isPending ? "Deleted..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EditWorkout = ({ data, setIsOpen }: PropsState) => {
  const { register, handleSubmit, errors, mutateAsync, isPending } =
    useEditWorkout(data!);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onSubmit = async (data: EditWorkoutDTO) => {
    await mutateAsync(data);
    setIsModalOpen(false);
    setIsOpen!(false);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-left text-sm w-full cursor-pointer"
        >
          Edit
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 w-full bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white fixed bottom-14 p-6 rounded-lg shadow-xl max-w-lg w-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Edit Workout
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="exercise_name"
                    >
                      Exercise Name
                    </label>
                    <input
                      type="text"
                      id="exercise_name"
                      {...register("exercise_name")}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Exercise name (eg: Deadlift, Plank, Push-up)"
                    />
                    {errors.exercise_name && (
                      <p className="text-red-500">
                        {errors.exercise_name.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="duration"
                    >
                      Duration (in minutes)
                    </label>
                    <input
                      type="number"
                      id="duration"
                      {...register("duration", { valueAsNumber: true })}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Duration (eg: 20)"
                    />
                    {errors.duration && (
                      <p className="text-red-500">{errors.duration.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="calories"
                    >
                      Calories Burned (kal)
                    </label>
                    <input
                      type="number"
                      id="calories"
                      {...register("calories_burned", { valueAsNumber: true })}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Calories burned (eg: 250)"
                    />
                    {errors.calories_burned && (
                      <p className="text-red-500">
                        {errors.calories_burned.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      {...register("date")}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.date && (
                      <p className="text-red-500">{errors.date.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition duration-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  disabled={isPending}
                  onClick={handleSubmit(onSubmit)}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 cursor-pointer"
                >
                  {isPending ? "Changes..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

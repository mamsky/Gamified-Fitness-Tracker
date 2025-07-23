import { useFetchProfile } from "./hook/useFetchProfile";

const LevelTracker = () => {
  const { data, isPending } = useFetchProfile();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl text-center">
        <h3 className="text-xl font-semibold">XP</h3>
        {isPending ? (
          <div className="h-6 animate-pulse bg-gray-400 rounded-xl"></div>
        ) : (
          <p className="text-2xl sm:text-3xl font-bold">
            {data?.xp ? data?.xp : 0}
          </p>
        )}
      </div>

      <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl text-center">
        <h3 className="text-xl font-semibold">Level</h3>
        {isPending ? (
          <div className="h-6 animate-pulse bg-gray-400 rounded-xl"></div>
        ) : (
          <p className="text-2xl sm:text-3xl font-bold">
            {data?.level ? data?.level : 0}
          </p>
        )}
      </div>

      <div className="bg-white/30 bg-opacity-20 backdrop-blur-xl p-6 rounded-lg shadow-xl text-center">
        <h3 className="text-xl font-semibold">Progress</h3>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div
            className="h-full bg-cyan-500 rounded-full"
            style={{ width: `${data?.progress ? data?.progress : 0}%` }}
          ></div>
        </div>
        {isPending ? (
          <div className="h-6 animate-pulse bg-gray-400 rounded-xl"></div>
        ) : (
          <p className="text-lg sm:text-xl font-bold mt-2">
            {data?.progress ? data?.progress : 0}%
          </p>
        )}
      </div>
    </div>
  );
};

export default LevelTracker;

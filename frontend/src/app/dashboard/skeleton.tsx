import React from "react";

const SkeletonWorkout = () => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex justify-between mb-4">
            <div className="w-42 h-6 rounded-full bg-gray-400 animate-pulse"></div>
            <div className="w-24 h-6 rounded-full bg-gray-400 animate-pulse"></div>
          </div>
        ))}
    </>
  );
};

export default SkeletonWorkout;

"use client";
import Link from "next/link";
import { RegisterForm } from "./hook/registerForm";

const RegisterPage = () => {
  const { handleSubmit, register, errors, onSubmit, isPending } =
    RegisterForm();
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-black w-full md:w-[400px]">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">
          Register <span className="text-indigo-600">GFT</span>
        </h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Name:
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Enter your Full-Name"
            className="p-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/20 backdrop-blur-md transition ease-in-out"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name?.message}</p>
          )}
        </div>

        <div className="flex flex-col my-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="p-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/20 backdrop-blur-md transition ease-in-out"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>

        <div className="flex flex-col my-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-white/80"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="p-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/20 backdrop-blur-md transition ease-in-out"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </div>

        <button
          disabled={isPending}
          onClick={handleSubmit(onSubmit)}
          className={`p-2 w-full cursor-pointer my-2 ${
            isPending ? "bg-gray-600" : "bg-indigo-600 hover:bg-indigo-700"
          } rounded-lg text-xl text-white font-semibold transition-all  active:bg-indigo-800`}
        >
          {isPending ? "Loading..." : "Register"}
        </button>

        <p className="text-sm text-center text-white/70">
          {"have an account?"}
          <Link
            href="/login"
            className="text-indigo-600 hover:underline font-medium ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

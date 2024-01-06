import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-Fetcher/api-client";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <h2 className="text-3xl text-zinc-800 font-bold">
          Create your account
        </h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <label
            htmlFor="firstName"
            className="flex-1 font-bold text-sm text-gray-600"
          >
            First Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <span className="text-red-600 font-semibold">
                {errors.firstName.message}
              </span>
            )}
          </label>
          <label
            htmlFor="lastName"
            className="flex-1 font-bold text-sm text-gray-600"
          >
            Last Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <span className="text-red-600 font-semibold">
                {errors.lastName.message}
              </span>
            )}
          </label>
        </div>
        <label
          htmlFor="email"
          className="flex-1 font-bold text-sm text-gray-600"
        >
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-600 font-semibold">
              {errors.email.message}
            </span>
          )}
        </label>
        <label
          htmlFor="password"
          className="flex-1 font-bold text-sm text-gray-600"
        >
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "the password must contain 6 or more charecters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-600 font-semibold">
              {errors.password.message}
            </span>
          )}
        </label>
        <label
          htmlFor="confirmPassword"
          className="flex-1 font-bold text-sm text-gray-600"
        >
          Confirm Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("confirmPassword", {
              validate: (value) => {
                if (!value) {
                  return "This field is required";
                }
                if (value !== watch("password")) {
                  return "The passwords do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-600 font-semibold">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        <span className="flex justify-between sm:justify-center">
          <p>
            Already have an account?{" "}
            <Link
              to={"/signin"}
              className=" underline hover:underline-offset-2"
            >
              Sign in
            </Link>
          </p>

          <button
            type="submit"
            className="font-bold p-2 text-white bg-sky-600 rounded-md"
          >
            Create Account
          </button>
        </span>
      </form>
    </>
  );
};

export default Register;

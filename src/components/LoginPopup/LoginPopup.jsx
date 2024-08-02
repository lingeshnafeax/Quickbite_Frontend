import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";

import toast from "react-hot-toast";
import { StoreContext } from "../../Context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { setToken, fetchCartOnLoad } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmit = async (data) => {
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
          data,
        );
        if (!response.data.success) {
          return toast.error(response.data.message || "Registration failed");
        }
        //Setting the token as app-wide state using Context

        setShowLogin(false); // Closing the popup
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success("User successfully registered");
      } else if (currentState === "Login") {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
          data,
        );
        if (!response.data.success) {
          return toast.error(response.data.message || "Login failed");
        }
        //Setting the token as in app-wide state using Context

        setShowLogin(false); // Closing the popup
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success("User successfully logged in");
        fetchCartOnLoad(); // To refetch the cart items on login
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      toast.error("Incorrect credentials.");
      console.error("Error during submission:", error);
    }
  };

  // Custom password validation
  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (value.length > 50) {
      return "Password must be less than 50 characters";
    }
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(value)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"; // Pattern error
    }
    return true; // If validation passes, return true
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition duration-700 ease-in-out">
      <div className="w-11/12 max-w-md rounded-lg bg-white p-8 shadow-lg lg:w-full">
        <div className="mb-6 flex justify-between lg:mb-8">
          <h2 className="text-xl font-bold text-primary lg:text-2xl">
            {currentState}
          </h2>
          <svg
            onClick={() => setShowLogin(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-primary lg:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-3">
            {currentState !== "Login" && (
              <>
                <input
                  className="rounded-lg border border-primary/75 p-2"
                  {...register("name", {
                    minLength: 8,
                    maxLength: 50,
                    required: true,
                  })}
                  type="text"
                  placeholder="Your name"
                />
                {errors.name && errors.name.type === "minLength" && (
                  <p>Name must be at least 8 characters</p>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <p>Name must be at less than 50 characters</p>
                )}
              </>
            )}
            <input
              className="rounded-lg border border-primary/75 p-2"
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
            />
            <input
              id="password"
              className="rounded-lg border border-primary/75 p-2"
              {...register("password", {
                validate: validatePassword,
              })}
              type="password"
              placeholder="Your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {currentState !== "Login" && (
            <div className="my-3 flex items-center gap-x-2 text-sm lg:my-4 lg:gap-x-3">
              <input type="checkbox" required></input>
              <p>
                By continiung, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          )}
          {currentState === "Login" ? (
            <p className="my-2 text-sm">
              Create a new account?{" "}
              <span
                className="cursor-pointer border-b border-primary text-primary"
                onClick={() => setCurrentState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="my-2 text-sm">
              Already have an account?{" "}
              <span
                className="cursor-pointer border-b border-primary text-primary"
                onClick={() => {
                  setCurrentState("Login");
                }}
              >
                Login
              </span>
            </p>
          )}
          <button className="rounded-lg bg-primary p-2 text-background">
            {currentState == "Sign Up" ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func,
};

export default LoginPopup;

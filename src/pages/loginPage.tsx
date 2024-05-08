import React from "react";
import FormLogin from "../components/formLogin";

const LoginPage = (): React.JSX.Element => {
  return (
    <div className="bg-gray-600 h-screen flex justify-center">
      <div className="bg-white w-80 my-auto rounded flex flex-col items-center px-6 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-600 h-12 w-12 rounded-full flex justify-center items-center">
            <i className="fa-solid fa-user text-white"></i>
          </div>
          <p className="font-semibold text-gray-400 mt-2 text-lg">
            Dashboard Kit
          </p>
        </div>

        <div className="mt-6">
          <p className="text-center text-xl font-semibold">
            Log In to Dashboard Kit
          </p>
          <p className="text-center text-gray-400 text-sm mt-1">
            Enter your email and password below
          </p>
        </div>

        <div className="w-full mt-10">
          <FormLogin />
        </div>

        <div className="mt-10">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <span className="text-blue-400 font-semibold">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useLogin } from "../hooks/useAuth";

const FormLogin = (): React.JSX.Element => {
  const { handleChanges, handleSubmit } = useLogin()

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label className="text-gray-400 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border border-gray-300 py-1 px-2 rounded mt-1 placeholder:text-sm"
          placeholder="Email address"
          name="email"
          type="email"
          id="email"
          onChange={handleChanges}
        />
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <label className="text-gray-400 font-semibold" htmlFor="password">
            Password
          </label>
          <label className="text-gray-400 font-semibold text-xs" htmlFor="password">
            Forgot Password ?
          </label>
        </div>
        <input
          className="w-full border border-gray-300 py-1 px-2 rounded mt-1 placeholder:text-sm"
          placeholder="Password"
          name="password"
          type="password"
          id="password"
          onChange={handleChanges}
        />
      </div>

      <div className="mt-6">
        <button type="submit" className="bg-blue-600 w-full py-2 rounded text-white">Log In</button>
      </div>
    </form>
  );
};

export default FormLogin;

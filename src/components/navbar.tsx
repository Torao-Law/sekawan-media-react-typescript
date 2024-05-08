import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = (): React.JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pathLocation = (path: string): string => {
    return pathname === path ? "text-gray-200  bg-gray-800" : "text-gray-500";
  };

  return (
    <div className="bg-black h-full py-8 w-full">
      <div className="flex items-center justify-center">
        <div className="h-10 w-10 bg-blue-600 flex justify-center items-center rounded-full me-2">
          <div className="w-4 h-4 bg-white rounded-r-full"></div>
        </div>
        <p className="font-semibold text-gray-400">Dashboard Kit</p>
      </div>

      <div className="mt-10">
      <div
        className={`grid grid-cols-6 content-center text-sm gap-2 cursor-pointer p-4 hover:bg-gray-800 ${pathLocation(
          "/"
        )}`}
        onClick={() => navigate("/")}
      >
        <div>
          <i className="fa-solid fa-chart-pie"></i>
        </div>
        <p>Overview</p>
      </div>

      <div
        className={`grid grid-cols-6 content-center text-sm gap-2 cursor-pointer p-4 hover:bg-gray-800 ${pathLocation(
          "/ticket"
        )}`}
        onClick={() => navigate("/ticket")}
      >
        <div>
          <i className="fa-solid fa-ticket"></i>
        </div>
        <p>Tickets</p>
      </div>

      <div
        className={`grid grid-cols-6 content-center text-sm gap-2 cursor-pointer p-4 hover:bg-gray-800 ${pathLocation(
          "/home"
        )}`}
      >
        <div>
          <i className="fa-solid fa-lightbulb"></i>
        </div>
        <p>Ideas</p>
      </div>

      <div
        className={`grid grid-cols-6 content-center text-sm gap-2 cursor-pointer p-4 hover:bg-gray-800 ${pathLocation(
          "/home"
        )}`}
      >
        <div>
          <i className="fa-solid fa-user-group"></i>
        </div>
        <p>Contacts</p>
      </div>

      <div
        className={`grid grid-cols-6 content-center text-sm gap-2 cursor-pointer p-4 hover:bg-gray-800 ${pathLocation(
          "/home"
        )}`}
      >
        <div>
          <i className="fa-solid fa-book"></i>
        </div>
        <p>Articles</p>
      </div>
      </div>

      <hr className="border-gray-600 my-6" />

      <div
        className={`grid grid-cols-6 content-center text-sm gap-2 cursor-pointer p-4 hover:bg-gray-800 ${pathLocation(
          "/home"
        )}`}
      >
        <div>
          <i className="fa-solid fa-gear"></i>
        </div>
        <p>Settings</p>
      </div>

      <div
        className={`grid grid-cols-6 content-center text-sm gap-2 cursor-pointer p-4 hover:bg-gray-800 ${pathLocation(
          "/home"
        )}`}
      >
        <div>
          <i className="fa-solid fa-award"></i>
        </div>
        <p>Subcribtion</p>
      </div>
    </div>
  );
};

export default Navbar;

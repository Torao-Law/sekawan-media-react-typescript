import React from "react";
import { TPath } from "../types/typeChildrenPage";

const Headers = ({ path }: TPath): React.JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold">{path}</p>
      </div>

      <div className="flex items-center">
        <button className="me-6 text-gray-400">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className="me-8 text-gray-400">
          <i className="fa-solid fa-bell"></i>
        </button>

        <hr className="border-l border-gray-400 h-6 me-8" />

        <p className="me-4">Jhon Doe</p>

        <div className="h-12 w-12 rounded-full p-1 border border-gray-600">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://www.daya.id/01%20Tips%20-%20Info%20Terkini/Kesehatan/2022/2022-03/10%20Penyebab%20Seseorang%20Mudah%20Marah%20dan%20Tersinggung/shutterstock_746397118.jpg"
            alt="img-user"
          />
        </div>
      </div>
    </div>
  );
};

export default Headers;

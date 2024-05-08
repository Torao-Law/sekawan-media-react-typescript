import React from "react";
import { TResultUnresolved } from "../types/typeResultUnresolved";


const ResultUnresolvedTickeds = ({ title, count }: TResultUnresolved) : React.JSX.Element => {
  return (
    <div
      className="flex justify-between items-center h-full border-b px-6 py-4 text-md"
    >
      <p className=" text-gray-600">{title}</p>
      <p className=" text-gray-400">{count}</p>
    </div>
  );
};

export default ResultUnresolvedTickeds;

import React from "react";
import { TResultUnresolved } from "../types/typeResultUnresolved";


const ResultUnresolvedTickeds = ({ title, count }: TResultUnresolved) : React.JSX.Element => {
  return (
    <div
      className="flex justify-between items-center h-full border-b px-6 py-4 text-md dark:border-b-orange-300"
    >
      <p className=" text-gray-600 dark:text-orange-600">{title}</p>
      <p className=" text-gray-400 dark:text-orange-400">{count}</p>
    </div>
  );
};

export default ResultUnresolvedTickeds;

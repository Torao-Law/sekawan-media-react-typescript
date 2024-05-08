import React from "react";
import { TResultTrends } from "../types/typeResultTrends";


const ResultTrends = ({ title, desc }: TResultTrends) : React.JSX.Element => {
  return (
    <div
      className="flex flex-col justify-center items-center h-full border-b "
    >
      <p className="font-semibold text-gray-400">{title}</p>
      <p className="text-2xl font-bold text-gray-600">{desc}</p>
    </div>
  );
};

export default ResultTrends;

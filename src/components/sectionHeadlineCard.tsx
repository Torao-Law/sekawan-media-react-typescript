import React from "react";
import { THeadlineCard } from "../types/typeHeadlineCard";

const SectionHeadlineCard = ({
  title,
  count,
}: THeadlineCard): React.JSX.Element => {
  return (
    <div className="bg-white h-32 w-full flex flex-col items-center justify-center rounded cursor-pointer border border-gray-300 hover:border hover:border-blue-600 dark:bg-gray-950 dark:border-orange-300 dark:hover:border-orange-800">
      <p className="font-semibold text-gray-400 text-lg dark:text-orange-400">{title}</p>
      <p className="font-bold text-4xl text-gray-700 mt-2 dark:text-orange-700">{count}</p>
    </div>
  );
};

export default SectionHeadlineCard;

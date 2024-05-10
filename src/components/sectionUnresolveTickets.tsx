import React from "react";
import ResultUnresolvedTickeds from "../elements/resultUnresolveTickets";
import { TResultUnresolved } from "../types/typeResultUnresolved";

const SectionUnresolveTickets = ({ unresolve }: any): React.JSX.Element => {
  return (
    <div className=" bg-white rounded border border-gray-300 dark:bg-gray-950 dark:border-orange-300">
      <div className="flex justify-between items-center p-6">
        <div>
          <p className="font-bold text-gray-600 dark:text-orange-600">
            Unresolve Tickets
          </p>
          <p className="text-sm text-gray-400 dark:text-orange-400">
            Group :{" "}
            <span className="font-bold text-gray-600 dark:text-orange-600">
              Support
            </span>
          </p>
        </div>

        <div>
          <p className="text-sm text-blue-600 cursor-pointer dark:text-gray-600">
            View details
          </p>
        </div>
      </div>

      <div>
        {unresolve?.map((data: TResultUnresolved, index: number) => (
          <ResultUnresolvedTickeds
            title={data.title}
            count={data.count}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionUnresolveTickets;

import React from "react";
import ResultUnresolvedTickeds from "../elements/resultUnresolveTickets";
import { TResultUnresolved } from "../types/typeResultUnresolved";

const SectionUnresolveTickets = (): React.JSX.Element => {
  const data = [
    {
      title: "Waiting on Feature Request",
      count: 5432,
    },
    {
      title: "Awaiting Customer Response",
      count: 1005,
    },
    {
      title: "Awaiting Developer Fix",
      count: 992,
    },
    {
      title: "Pending",
      count: 32,
    },
  ];

  return (
    <div className=" bg-white rounded border border-gray-300">
      <div className="flex justify-between items-center p-6">
        <div>
          <p className="font-bold text-gray-600">Unresolve Tickets</p>
          <p className="text-sm text-gray-400">
            Group : <span className="font-bold text-gray-41600">Support</span>
          </p>
        </div>

        <div>
          <p className="text-sm text-blue-600">View details</p>
        </div>
      </div>

      <div>
        {data.map((data: TResultUnresolved, index: number) => (
          <ResultUnresolvedTickeds title={data.title} count={data.count} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionUnresolveTickets;

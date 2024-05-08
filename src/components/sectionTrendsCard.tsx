import React from "react";
import ChartTrends from "../elements/chartTrends";
import ResultTrends from "../elements/resultTrends";

const SectionTrendsCard = (): React.JSX.Element => {
  const data = [
    {
      title: "Resolved",
      desc: "36",
    },
    {
      title: "Received",
      desc: "400",
    },
    {
      title: "Average first response time",
      desc: "33m",
    },
    {
      title: "Average response time",
      desc: "3h 8m",
    },
    {
      title: "Resolution within SLA",
      desc: "94%",
    },
  ];

  return (
    <div className="grid grid-cols-12 bg-white rounded border border-gray-300">
      <div className="col-span-9 p-6">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-gray-600">Today's trends</p>
            <p className="text-xs text-gray-400">as of 25 May 2024, 09:40 PM</p>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <hr className="border-blue-600 w-8 border-2 rounded-lg" />
              <p className="text-gray-400 ms-2 text-sm">Today</p>
            </div>
            <div className="flex items-center ms-4">
              <hr className="border-gray-400 w-8 border-2 rounded-lg" />
              <p className="text-gray-400 ms-2 text-sm">Yesterday</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ChartTrends />
        </div>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col h-full border-s">
          {data.map((item: any, index: number) => (
              <ResultTrends title={item.title} desc={item.desc} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTrendsCard;

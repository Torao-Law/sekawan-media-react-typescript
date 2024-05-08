import React from "react";
import SectionHeadlineCard from "../components/sectionHeadlineCard";
import { THeadlineCard } from "../types/typeHeadlineCard";
import SectionTrendsCard from "../components/sectionTrendsCard";
import SectionUnresolveTickets from "../components/sectionUnresolveTickets";
import SectionTask from "../components/sectionTask";
import Headers from "../components/headers";

const HomeOverviewPage = (): React.JSX.Element => {
  const dummy = [
    {
      title: "Unresolved",
      count: 60,
    },
    {
      title: "Overdue",
      count: 16,
    },
    {
      title: "Open",
      count: 43,
    },
    {
      title: "On hold",
      count: 64,
    },
  ];

  return (
    <div>
      <div>
        <Headers path={"Overview"} />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-8">
        {dummy.map((data: THeadlineCard, index: number) => {
          return (
            <div key={index} className="col-span-3">
              <SectionHeadlineCard title={data.title} count={data.count} />
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <SectionTrendsCard />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="h-96">
          <SectionUnresolveTickets />
        </div>

        <div className="h-96">
          <SectionTask />
        </div>
      </div>
    </div>
  );
};

export default HomeOverviewPage;

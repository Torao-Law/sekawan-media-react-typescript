import React from "react";
import SectionHeadlineCard from "../components/sectionHeadlineCard";
import { THeadlineCard } from "../types/typeHeadlineCard";
import SectionTrendsCard from "../components/sectionTrendsCard";
import SectionUnresolveTickets from "../components/sectionUnresolveTickets";
import SectionTask from "../components/sectionTask";
import Headers from "../components/headers";
import useOverview from "../hooks/useOverview";

const HomeOverviewPage = (): React.JSX.Element => {
  const { findOverview } = useOverview()
  const [data, setData] = React.useState<any>()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const fetch = await findOverview();
        setData(fetch);
      } catch (error) {
        throw error
      }
    };
  
    fetchData();
  }, []);
  
  console.log(data);
  
  return (
    <div>
      <div>
        <Headers path={"Overview"} />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-8">
        {data?.headline?.map((data: THeadlineCard, index: number) => {
          return (
            <div key={index} className="col-span-3">
              <SectionHeadlineCard title={data.title} count={data.count} />
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <SectionTrendsCard trend={data?.trends} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="h-96">
          <SectionUnresolveTickets unresolve={data?.unresolved} />
        </div>

        <div className="h-96">
          <SectionTask task={data?.task} />
        </div>
      </div>
    </div>
  );
};

export default HomeOverviewPage;

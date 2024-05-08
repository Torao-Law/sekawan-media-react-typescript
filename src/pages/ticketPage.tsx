import React from "react";
import Headers from "../components/headers";
import TableTickets from "../components/tableTickets";

const TicketPage = (): React.JSX.Element => {
  return (
    <div>
      <div>
        <Headers path={"Tickets"} />
      </div>

      <div className="w-full rounded bg-white mt-8 border border-gray-300">
        <div className="flex justify-between p-6">
          <p className="font-semibold text-gray-600">All Tickets</p>
          <div className="flex items-center">
            <p className="text-sm cursor-pointer text-gray-400 hover:text-blue-600">
              <i className="fa-solid fa-arrow-up-wide-short me-1"></i> Short
            </p>
            <p className="text-sm cursor-pointer text-gray-400 hover:text-blue-600 ms-6">
              <i className="fa-solid fa-filter me-1"></i> Filter
            </p>
          </div>
        </div>

        <div>
          <TableTickets />
        </div>
      </div>
    </div>
  );
};

export default TicketPage;

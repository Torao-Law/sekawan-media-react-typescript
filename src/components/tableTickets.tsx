import React from "react";
import LabelPriority from "../elements/labelPriority";
import dummyData from "../mocks/listTickets.json";
import { TTickets } from "../types/typeTickets";

const TableTickets = (): React.JSX.Element => {
  return (
    <table className="w-full">
      <tr className="grid grid-cols-12 justify-items-start border-b pb-2 px-6">
        <th className="col-span-5 text-gray-400">Ticket Details</th>
        <th className="col-span-3 text-gray-400">Customer Name</th>
        <th className="col-span-2 text-gray-400">Date</th>
        <th className="col-span-2 text-gray-400">Priority</th>
      </tr>

      {dummyData.map((item: TTickets) => {
        return (
          <tr
            key={item.id}
            className="grid grid-cols-12 h-16 px-6 content-center border-t py-1"
          >
            <td className="col-span-5">
              <div className="flex items-center">
                <div className="h-10 w-10">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={item.customer.image}
                    alt="img-user"
                  />
                </div>
                <div className="ms-4">
                  <p className="font-bold text-gray-600 text-sm">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    "item.ticketDetails.lastUpdate"
                  </p>
                </div>
              </div>
            </td>

            <td className="col-span-3">
              <p className="font-bold text-gray-600 text-sm">
                {item.customer.name}
              </p>
              <p className="text-xs text-gray-400">"item.customerLastUpdate"</p>
            </td>

            <td className="col-span-2">
              <p className="font-bold text-gray-600 text-sm">{item.date}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </td>

            <td className="col-span-2">
              <div className="flex justify-between">
                <LabelPriority name={item.priority} />
                <div className="cursor-pointer hover:text-blue-600">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default TableTickets;

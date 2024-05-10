import React from "react";
import Headers from "../components/headers";
import TableTickets from "../components/tableTickets";
import FormAddTicket from "../components/formAddTicket";

const TicketPage = (): React.JSX.Element => {
  const [sortBy, setSortBy] = React.useState<string>();
  const [isUptoDown, setIsUptoDown] = React.useState<boolean>(true);
  const [modalCreate, setModalCreate] = React.useState<boolean>(false);

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>): void =>
    setSortBy(e.target.value);
  const isOpenModalCreate = (): void => setModalCreate(!modalCreate);

  return (
    <div className="h-screen">
      <div>
        <Headers path={"Tickets"} />
      </div>

      <div className="w-full rounded bg-white mt-8 mb-12 border border-gray-300 dark:bg-gray-950 dark:border-orange-300">
        <div className="flex justify-between p-6">
          <p className="font-semibold text-gray-600 dark:text-orange-600">
            All Tickets{" "}
            <span className="cursor-pointer" onClick={isOpenModalCreate}>
              +
            </span>
          </p>
          <div className="flex items-center">
            <div className="text-sm cursor-pointer text-gray-400 dark:text-orange-400">
              <label onClick={() => setIsUptoDown(!isUptoDown)}>
                <i
                  className={`fa-solid fa-arrow-${
                    isUptoDown ? "up" : "down"
                  }-wide-short me-1 cursor-pointer`}
                ></i>
              </label>

              <select id="sort" onChange={handleChangeSort} className="dark:bg-gray-950">
                <option hidden>Sort</option>
                <option value="ticket">Ticket</option>
                <option value="customer">Customer</option>
                <option value="priority">Priority</option>
                <option value="date">Date</option>
              </select>
            </div>
            <p className="text-sm cursor-pointer text-gray-400 hover:text-blue-600 ms-6 dark:text-orange-600">
              <i className="fa-solid fa-filter me-1"></i> Filter
            </p>
          </div>
        </div>

        <div>
          <TableTickets type={sortBy} isUptoDown={isUptoDown} />
        </div>
      </div>

      <FormAddTicket isOpen={modalCreate} modalClose={isOpenModalCreate} />
    </div>
  );
};

export default TicketPage;

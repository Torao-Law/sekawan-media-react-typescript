import React from "react";
import LabelPriority from "../elements/labelPriority";
import { TTicketShort, TTickets } from "../types/typeTickets";
import useTicket from "../hooks/useTicket";
import sortTicket from "../utils/sortTicket";
import DetailTicket from "./detailTicket";
import { TicketContext, TicketContextType } from "../store/ticketContext";

const TableTickets = ({
  type,
  isUptoDown,
}: TTicketShort): React.JSX.Element => {
  const { findTickets } = useTicket();
  const { tickets } = React.useContext(TicketContext) as TicketContextType;

  const [currentItems, setCurrentItems] = React.useState<TTickets[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState<number>(5);
  const [modalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [idForModal, setIdForModal] = React.useState<number>();
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
  const [idForDropdown, setIdForDropdown] = React.useState<number | null>(null);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

  React.useEffect(() => {
    findTickets();
  }, []);

  React.useEffect(() => {
    if (tickets) {
      const sortedTickets = sortTicket(type as string, isUptoDown, tickets);
      setCurrentItems(sortedTickets.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [
    tickets,
    type,
    isUptoDown,
    currentPage,
    itemsPerPage,
    indexOfFirstItem,
    indexOfLastItem,
  ]);

  const handleClose = (): void => setIsModalOpen(!modalOpen);
  const handleOpen = (id: number): void => {
    setIsModalOpen(!modalOpen);
    setIdForModal(id);
  };

  const showItemSet = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const prevPaginate = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPaginate = (): void => {
    const totalPages = Math.ceil((tickets?.length as number) / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const location = (): string =>
    `${currentPage}-${Math.ceil(
      (tickets?.length as number) / itemsPerPage
    )} of ${tickets?.length}`;

    const toggleDropdown = (id: number | null): void => {
      setDropdownOpen(!dropdownOpen);
      setIdForDropdown(id);
    };
    
    const handleDropdownClick = (id: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); 
      toggleDropdown(id);
    };
    

  const handleReject = (): void => {
    setDropdownOpen(false);
  };

  const handleAccept = (): void => {
    setDropdownOpen(false);
  };

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-12 justify-items-start border-b pb-2 px-6 dark:border-b-orange-300">
            <th className="col-span-5 text-gray-400 dark:text-orange-400">Ticket Details</th>
            <th className="col-span-3 text-gray-400 dark:text-orange-400">Customer Name</th>
            <th className="col-span-2 text-gray-400 dark:text-orange-400">Date</th>
            <th className="col-span-2 text-gray-400 dark:text-orange-400">Priority</th>
          </tr>
        </thead>

        <tbody>
          {currentItems?.map((item: TTickets) => {
            return (
              <tr
                key={item.id}
                className="grid grid-cols-12 h-16 px-6 content-center border-t py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-orange-100 dark:border-t-orange-300"
                onClick={() => handleOpen(item.id)}
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
                      <p className="font-bold text-gray-600 text-sm dark:text-orange-600">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-orange-400">
                        "item.ticketDetails.lastUpdate"
                      </p>
                    </div>
                  </div>
                </td>

                <td className="col-span-3">
                  <p className="font-bold text-gray-600 text-sm dark:text-orange-600">
                    {item.customer.name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-orange-400">
                    "item.customerLastUpdate"
                  </p>
                </td>

                <td className="col-span-2">
                  <p className="font-bold text-gray-600 text-sm dark:text-orange-600">{item.date}</p>
                  <p className="text-xs text-gray-400 dark:text-orange-400">{item.time}</p>
                </td>

                <td className="col-span-2">
                  <div className="flex justify-between">
                    <LabelPriority name={item.priority} />
                    <div className="relative">
                      <i
                        className="fa-solid fa-ellipsis-vertical cursor-pointer hover:text-blue-600 dark:text-orange-600"
                        onClick={(e) => handleDropdownClick(item.id)(e)}
                      ></i>
                      {dropdownOpen && idForDropdown === item.id && (
                        <div className="absolute top-8 right-0 bg-white shadow-md rounded-md p-2">
                          <button
                            className="block w-full text-left py-1 px-4 hover:bg-gray-100 dark:hover:bg-orange-100"
                            onClick={handleReject}
                          >
                            Reject
                          </button>
                          <button
                            className="block w-full text-left py-1 px-4 hover:bg-gray-100 dark:hover:bg-orange-100"
                            onClick={handleAccept}
                          >
                            Accept
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}

          <tr className="flex justify-end border-t py-2 px-6">
            <td className="grid grid-cols-2 justify-items-end gap-10 text-gray-400 content-center dark:text-orange-400">
              <div>
                <label htmlFor="listOfTickets">Rows per page : </label>
                <select
                  className="text-gray-600 font-semibold p-1 dark:text-orange-600 dark:bg-gray-950"
                  name="listOfTickets"
                  id="listOfTickets"
                  onChange={showItemSet}
                  defaultValue={itemsPerPage}
                >
                  {[1, 2, 3, 4, 5].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <div className="me-8">
                  <p>{location()}</p>
                </div>
                <div className="">
                  <button
                    className="me-4 hover:text-blue-600 dark:hover:text-orange-600"
                    onClick={prevPaginate}
                    disabled={currentPage === 1}
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>

                  <button
                    className="hover:text-blue-600 dark:hover:text-orange-600"
                    onClick={nextPaginate}
                    disabled={
                      currentPage ===
                      Math.ceil((tickets?.length as number) / itemsPerPage)
                    }
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <DetailTicket
        isOpen={modalOpen}
        modalClose={handleClose}
        idTicket={idForModal}
      />
    </>
  );
};

export default TableTickets;

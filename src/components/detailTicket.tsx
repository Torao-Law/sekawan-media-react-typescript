import React from "react";
import Modal from "react-modal";
import { TicketContext, TicketContextType } from "../store/ticketContext";
import { TTickets } from "../types/typeTickets";
import LabelPriority from "../elements/labelPriority";
import { modalProps } from "../types/typeModal";

const DetailTicket = ({ isOpen, modalClose, idTicket }: modalProps) => {
  const { tickets } = React.useContext(TicketContext) as TicketContextType;
  const [ticket, setTicket] = React.useState<TTickets[]>();

  React.useEffect(() => {
    const data = tickets?.filter((item) => item.id == idTicket);
    setTicket(data);
  }, [idTicket]);

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      transition: "transform 0.3s ease-in-out",
      width: "600px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={modalClose} style={modalStyle}>
      {ticket?.map((data: TTickets) => (
        <div className="flex" key={data.id}>
          <div className="me-4" style={{ width: "40%" }}>
            <img
              className="w-full h-full rounded object-cover"
              src={data.customer.image}
              alt=""
            />
          </div>

          <div style={{ width: "60%" }}>
            <div>
              <LabelPriority name={data.priority} />
            </div>

            <div>
              <p
                className="text-2xl font-semibold"
                style={{ marginTop: "10px" }}
              >
                {data.customer.name}
              </p>
              <p className="text-gray-600">{`${data.date} - ${data.time}`}</p>

              <p className="mt-2">{data.description}</p>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-red-600 px-6 rounded text-white me-2">
                Reject
              </button>
              <button className="bg-green-600 px-6 rounded text-white">
                Accept
              </button>
            </div>
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default DetailTicket;

import React from "react";
import ReactModal from "react-modal";
import { modalProps } from "../types/typeModal";
import useTicket from "../hooks/useTicket";

const FormAddTicket = ({
  isOpen,
  modalClose,
}: modalProps): React.JSX.Element => {
  const { handleChange, handleSubmit } = useTicket();
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
    <ReactModal isOpen={isOpen} onRequestClose={modalClose} style={modalStyle}>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="customer" className="block font-medium text-gray-700">
            Customer Name
          </label>
          <input
            type="text"
            name="customer"
            id="customer"
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ticketDetail"
            className="block font-medium text-gray-700"
          >
            description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 resize-none"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 cursor-pointer"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block font-medium text-gray-700">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2"
            onChange={handleChange}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </ReactModal>
  );
};

export default FormAddTicket;

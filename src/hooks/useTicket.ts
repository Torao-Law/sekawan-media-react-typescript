import axios from "axios";
import { TicketContext, TicketContextType } from "../store/ticketContext";
import React from "react";
import { TCreateTicket } from "../types/typeTickets";

const useTicket = () => {
  const { getTickets } = React.useContext(TicketContext) as TicketContextType;
  const [form, setForm] = React.useState<TCreateTicket>({
    customer: "",
    description: "",
    date: "",
    priority: "",
  });

  const findTickets = async () => {
    try {
      const { data } = await axios.get(
        "https://api.npoint.io/0461815a416d1a0de956"
      );

      getTickets(data);
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return {
    findTickets,
    handleChange,
    handleSubmit
  };
};

export default useTicket;

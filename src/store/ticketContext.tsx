import React from "react";
import { TTickets } from "../types/typeTickets";

export type TicketContextType = {
  tickets: TTickets[] | null;
  getTickets: (data: TTickets[]) => void;
};

export const TicketContext = React.createContext<TicketContextType | null>(null);

const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = React.useState<TTickets[] | null>(null);

  const getTickets = (data: TTickets[]) => {
    setTickets(data)
  }

  return (
    <TicketContext.Provider value={{ tickets, getTickets }}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;

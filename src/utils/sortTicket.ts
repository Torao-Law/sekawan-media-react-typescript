import { TTickets } from "../types/typeTickets";

const sortTicket = (
  type: string,
  isUptoDown: boolean,
  currentItems: TTickets[]
): TTickets[] => {

  const sortedItems = [...currentItems]; 

  if (type === "priority") {
    sortedItems.sort((a, b) => {
      let result = 0;

      if (a.priority === "HIGH" && b.priority !== "HIGH") {
        result = -1;
      } else if (a.priority !== "HIGH" && b.priority === "HIGH") {
        result = 1;
      } else if (a.priority === "NORMAL" && b.priority === "LOW") {
        result = -1;
      } else if (a.priority === "LOW" && b.priority === "NORMAL") {
        result = 1;
      }

      return isUptoDown ? result : -result;
    });
  }

  if (type === "ticket") {
    sortedItems.sort((a, b) => {
      let result = a.description.localeCompare(b.description);

      return isUptoDown ? result : -result;
    });
  }

  if (type === "date") {
    sortedItems.sort((a, b) => {
      const dateA: any = new Date(a.date);
      const dateB: any = new Date(b.date);
      let result = dateA - dateB;

      return isUptoDown ? result : -result;
    });
  }

  if (type === "customer") {
    sortedItems.sort((a, b) => {
      const nameA = a.customer.name.toUpperCase();
      const nameB = b.customer.name.toUpperCase();
      let result = nameA.localeCompare(nameB);

      return isUptoDown ? result : -result;
    });
  }

  return sortedItems;
};

export default sortTicket;

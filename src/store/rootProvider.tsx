import { TChildrenPages } from "../types/typeChildrenPage";
import TicketProvider from "./ticketContext";
import AuthProvider from "./userContext";

const RootProvider = ({ children }: TChildrenPages): React.JSX.Element => {
  return (
    <AuthProvider>
      <TicketProvider>{children}</TicketProvider>
    </AuthProvider>
  );
};

export default RootProvider;

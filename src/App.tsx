import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeOverviewPage from "./pages/homeOverviewPage";
import Main from "./layout/main";
import LoginPage from "./pages/loginPage";
import TicketPage from "./pages/ticketPage";
import { AuthContext, AuthContextType } from "./store/userContext";

const App = (): React.JSX.Element => {
  const { user } = React.useContext(AuthContext) as AuthContextType

  console.log(user);
  

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main>
            <HomeOverviewPage />
          </Main>
        }
      />
      <Route
        path="/ticket"
        element={
          <Main>
            <TicketPage />
          </Main>
        }
      />

      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;

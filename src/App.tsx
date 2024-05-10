import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeOverviewPage from "./pages/homeOverviewPage";
import Main from "./layout/main";
import LoginPage from "./pages/loginPage";
import TicketPage from "./pages/ticketPage";
import { PrivateRoute, PrivateRouteAdmin } from "./utils/privateRoutes";
import { AuthContext, AuthContextType } from "./store/userContext";

const App = (): React.JSX.Element => {
  const navigate = useNavigate();
  const { user, login } = React.useContext(AuthContext) as AuthContextType;
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const checkAuth = () => {
    const data = localStorage.getItem("user");
    const obj = JSON.parse(data);

    login([obj]);
  };

  React.useEffect(() => {
    checkAuth();
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      if (user?.isAuthenticated === false) {
        navigate("/auth/login");
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<PrivateRouteAdmin />}>
              <Route
                path="/"
                element={
                  <Main>
                    <HomeOverviewPage />
                  </Main>
                }
              />
            </Route>

            <Route
              path="/ticket"
              element={
                <Main>
                  <TicketPage />
                </Main>
              }
            />
          </Route>

          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;

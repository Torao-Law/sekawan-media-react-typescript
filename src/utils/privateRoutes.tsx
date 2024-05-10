import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext, AuthContextType } from "../store/userContext";

export const PrivateRoute = () => {
  const { user } = useContext(AuthContext) as AuthContextType;

  if (!user?.isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export function PrivateRouteUser() {
  const { user } = useContext(AuthContext) as AuthContextType;

  if (user?.role === "admin") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export function PrivateRouteAdmin() {
  const { user } = useContext(AuthContext) as AuthContextType;

  if (user?.role !== "admin") {
    return <Navigate to="/ticket" />;
  }
  return <Outlet />;
}

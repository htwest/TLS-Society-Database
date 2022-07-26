import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Context
import UserContext from "./UserContext";

const PrivateRoutes = () => {
  // Context
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;

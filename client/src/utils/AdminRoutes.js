import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Context
import UserContext from "./UserContext";

const AdminRoutes = () => {
  const { user } = useContext(UserContext);
  return user.mod === true ? <Outlet /> : <Navigate to="/profile" />;
};

export default AdminRoutes;

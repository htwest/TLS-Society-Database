import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

// Page Components
import Header from "./header/Header";
import Login from "./login/Login";
// import SignUp from "./signup/Signup";
import SignUp from "./signupTwo/Signup";
import Dashboard from "./dashboard/Dashboard";
import Pending from "./pending/Pending";

// Utils
import PrivateRoutes from "../utils/PrivateRoutes";
import AdminRoutes from "../utils/AdminRoutes";

// Hooks
import fetchUser from "../hooks/fetchUser";

// Context
import UserContext from "../utils/UserContext";

const Views = () => {
  // Check if there is already a logged in user
  const currentUser = fetchUser();

  // States and Memo
  const [user, setUser] = useState(currentUser);
  const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={userProvider}>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route elment={<AdminRoutes />}>
            <Route path="/pending" element={<Pending />} />
          </Route>
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default Views;

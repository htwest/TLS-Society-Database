import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

// Page Components
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import Profile from "./profile/Profile";
import Pending from "./mod/pending/Pending";

// Testing
import Test from "./testing/Test";

// Utils
import PrivateRoutes from "../utils/PrivateRoutes";
import AdminRoutes from "../utils/AdminRoutes";

// Hooks
import fetchUser from "../hooks/fetchUser";

// Context
import UserContext from "../utils/UserContext";

const Views = () => {
  const currentUser = fetchUser();
  // States and Memo
  const [user, setUser] = useState(currentUser);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route elment={<AdminRoutes />}>
            <Route path="/pending" element={<Pending />} />
          </Route>
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default Views;

import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

// Page Components
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import Profile from "./profile/Profile";
import Applicants from "./applicants/Applicants";

// Utils
import PrivateRoutes from "../utils/PrivateRoutes";

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
          <Route path="/applicants" element={<Applicants exact />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default Views;

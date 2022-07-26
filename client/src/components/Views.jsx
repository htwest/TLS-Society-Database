import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

// Page Components
import Landing from "./landing/Landing";
import Profile from "./profile/Profile";
import Applicants from "./applicants/Applicants";

// Utils
import PrivateRoutes from "../utils/PrivateRoutes";

// Context
import UserContext from "../utils/UserContext";

const Views = () => {
  const [user, setUser] = useState();
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/applicants" element={<Applicants exact />} />
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default Views;

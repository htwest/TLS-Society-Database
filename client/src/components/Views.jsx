import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

// Page Components
import Landing from "./landing/Landing";
import Profile from "./profile/Profile";
import Applicants from "./applicants/Applicants";

// Context
import UserContext from "../UserContext";

const Views = () => {
  const [user, setUser] = useState();
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default Views;

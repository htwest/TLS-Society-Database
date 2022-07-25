import { Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Profile from "./profile/Profile";
import Applicants from "./applicants/Applicants";

import UserContext from "../UserContext";

const Views = () => {
  return (
    <UserContext.Provider value={"hello from context"}>
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

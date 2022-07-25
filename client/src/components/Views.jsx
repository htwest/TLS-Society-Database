import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./login/Signup";
import Profile from "./profile/Profile";
import Applicants from "./applicants/Applicants";

import UserContext from "../UserContext";

const Views = () => {
  return (
    <UserContext.Provider value={"hello from context"}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default Views;

import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./login/Signup";
import Profile from "./profile/Profile";
import Unapproved from "./unapproved/Unapproved";

const Views = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/unapproved" element={<Unapproved />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default Views;

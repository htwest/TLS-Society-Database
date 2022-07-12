import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./login/Signup";

const Views = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default Views;

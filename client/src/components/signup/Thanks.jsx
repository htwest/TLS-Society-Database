import React from "react";
import { useNavigate } from "react-router";

const Thanks = ({ userData }) => {
  const navigate = useNavigate();
  return (
    <div className="thanks-container">
      <h1>Thank You!</h1>
      <h3>{userData.f_name}</h3>
      <hr />
      <p>Your information has been submitted and is awaiting approval.</p>
      <p>A TLSS Admin will soon verify your account</p>
      <div className="button-group">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back To Login
        </button>
      </div>
    </div>
  );
};

export default Thanks;

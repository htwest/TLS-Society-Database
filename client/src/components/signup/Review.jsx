import React, { useState } from "react";
import postApplicant from "../../api/postApplicant";
import validatePassword from "../../hooks/validatePassword";
import "../../css/signup/Review.css";

const Review = ({ userData, institute, step, setStep, prevStep, nextStep }) => {
  // States
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState(false);

  // Methods
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validatePassword(userData.password, pass, setPassErr);
    if (validate) {
      const data = {
        userData,
        institute,
      };
      await postApplicant(data).then((res) => {
        nextStep();
      });
    }
  };

  console.log(userData.l_name);
  return (
    <div id="review-box">
      <h1>Almost There!</h1>
      <h3>Please Make sure All Infomration is Correct Before Submitting</h3>

      <hr />

      <div className="signup-info-box">
        <div className="signup-data">
          <h4>User Information</h4>
          <button onClick={() => setStep(0)}>Edit</button>
        </div>

        <div className="signup-info-element">
          <label htmlFor="username">Username</label>
          <p name="username">{userData.username}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="name">Name</label>
          <p name="name">
            {userData.f_name} {userData.l_name}
          </p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="email">Email</label>
          <p name="email">{userData.email}</p>
        </div>
      </div>

      <hr />

      <div className="signup-info-box">
        <div className="signup-data">
          <h4>Institute Information</h4>
          <button className="edit-info-button" onClick={() => setStep(1)}>
            Edit
          </button>
        </div>

        <div className="signup-info-element">
          <label htmlFor="institute">Institute</label>
          <p name="institute">{institute.name}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="semester">Semester</label>
          <p name="semseter">{institute.semester}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="position">Position</label>
          <p name="position">{institute.position}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="type">Position</label>
          <p name="type">{institute.type}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="poc_name">Point of Contact</label>
          <p name="poc_name">{institute.poc_name}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="poc_email">Email</label>
          <p name="poc_email">{institute.poc_email}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="app_open">Application Start Date</label>
          <p name="app_open">{institute.app_open}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="app_deadline">Application Deadline</label>
          <p name="app_deadline">{institute.app_deadline}</p>
        </div>
        <div className="signup-info-element">
          <label htmlFor="description">Description</label>
          <p name="description">{institute.description}</p>
        </div>
      </div>

      <hr />

      <form className="password-confirm">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassErr(false);
            setPass(e.target.value);
          }}
        />
        {passErr ? (
          <span id="password-error">Your Passwords Do Not Match</span>
        ) : null}
      </form>
      <div className="button-group">
        <button onClick={() => prevStep()}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Review;

import React, { useState } from "react";
import postApplicant from "../../api/postApplicant";
import validatePassword from "../../hooks/validatePassword";

const Review = ({ userData, institute, step, setStep, nextStep }) => {
  // States
  const [pass, setPass] = useState();
  const [err, setErr] = useState();

  // Methods
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validatePassword(userData.password, pass, setErr);
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

  return (
    <div className="review-box">
      <h3>Please Make sure All Infomration is Correct Before Submitting</h3>

      <div className="signup-info-box">
        <h4>User Information</h4>
        <div className="signup-info-element">
          <label for="username">Username</label>
          <p name="username">{userData.username}</p>
        </div>
        <div className="signup-info-element">
          <label for="name">Name</label>
          <p name="name">
            {userData.f_name} {userData.l_name}
          </p>
        </div>
        <div className="signup-info-element">
          <label for="email">Email</label>
          <p name="email">{userData.email}</p>
        </div>
        <button className="edit-info-button" onClick={() => setStep(0)}>
          Edit
        </button>
      </div>

      <div className="signup-info-box">
        <h4>Institute Information</h4>
        <div className="signup-info-element">
          <label for="institute">Institute</label>
          <p name="institute">{institute.name}</p>
        </div>
        <div className="signup-info-element">
          <label for="semester">Semester</label>
          <p name="semseter">{institute.semester}</p>
        </div>
        <div className="signup-info-element">
          <label for="position">Position</label>
          <p name="position">{institute.position}</p>
        </div>
        <div className="signup-info-element">
          <label for="type">Position</label>
          <p name="type">{institute.type}</p>
        </div>
        <div className="signup-info-element">
          <label for="poc_name">Point of Contact</label>
          <p name="poc_name">{institute.poc_name}</p>
        </div>
        <div className="signup-info-element">
          <label for="poc_email">Email</label>
          <p name="poc_email">{institute.poc_email}</p>
        </div>
        <div className="signup-info-element">
          <label for="app_open">Application Start Date</label>
          <p name="app_open">{institute.app_open}</p>
        </div>
        <div className="signup-info-element">
          <label for="app_deadline">Application Deadline</label>
          <p name="app_deadline">{institute.app_deadline}</p>
        </div>
        <div className="signup-info-element">
          <label for="description">Description</label>
          <p name="description">{institute.description}</p>
        </div>
        <button className="edit-info-button" onClick={() => setStep(1)}>
          Edit
        </button>
      </div>

      <div className="signup-password-box">
        <form>
          <label>Enter Your Password</label>
          <input type="text" placeholder="Enter Password" />
        </form>
      </div>
      <div className="signup-button-group">
        <button>Back to Log In</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Review;

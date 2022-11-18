import LoginFormItem from "./LoginFormItem";

const LoginForm = ({
  state,
  setState,
  errorState,
  clearError,
  handleSubmit,
  navigate,
}) => {
  const handleChange = (e) => {
    if (errorState) {
      clearError();
    }
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <LoginFormItem
        type="text"
        label="Username"
        name="username"
        errorState={errorState}
        placeholder="Enter Username"
        handleChange={handleChange}
      />
      <LoginFormItem
        type="password"
        label="Password"
        name="password"
        errorState={errorState}
        placeholder="Enter Username"
        handleChange={handleChange}
      />
      <span className={errorState ? "invalid" : "valid"}>
        Invalid Username and/or Password
      </span>
      <div className="button-group">
        <button type="button" onClick={() => navigate("/register")}>
          Create Account
        </button>
        <input className="btn" type="submit" value="Log In" />
      </div>
    </form>
  );
};

export default LoginForm;

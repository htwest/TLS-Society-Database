const LoginFormItem = ({
  type,
  label,
  placeholder,
  value,
  name,
  errorState,
  handleChange,
}) => {
  return (
    <div className="login-form-item">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
        className={errorState ? "error" : null}
      />
    </div>
  );
};

export default LoginFormItem;

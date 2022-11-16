import "../../css/forms/Form.css";
import FormItem from "./FormItem";

const Form = ({
  title,
  inputs,
  state,
  setState,
  onSubmit,
  buttonText,
  secondaryTitle,
  secondaryAction,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const secondary = (e) => {
    secondaryAction();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {inputs.map((input) => (
        <FormItem
          key={input.id}
          {...input}
          value={state[input.name]}
          onChange={handleChange}
        />
      ))}
      <div className="form-buttons">
        {secondaryTitle ? (
          <button onClick={secondary}>{secondaryTitle}</button>
        ) : null}
        <button>{buttonText}</button>
      </div>
    </form>
  );
};

export default Form;

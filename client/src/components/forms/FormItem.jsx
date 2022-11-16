import { useState } from "react";
import "../../css/forms/FormItem.css";

const FormItem = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const inputDisplay = () => {
    switch (props.type) {
      case "text" || "date":
        return (
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => inputProps.lastitem === "true" && setFocused(true)}
            focused={focused.toString()}
          />
        );
      case "select":
        return (
          <select
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => inputProps.lastitem === "true" && setFocused(true)}
            focused={focused.toString()}
          >
            {props.options.map((option) => (
              <option key={option.id} {...option}>
                {option.name}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => inputProps.lastitem === "true" && setFocused(true)}
            focused={focused.toString()}
          />
        );
      default:
        return (
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => inputProps.lastitem === "true" && setFocused(true)}
            focused={focused.toString()}
          />
        );
    }
  };

  return (
    <div className="form-item">
      <label>{label}</label>
      {inputDisplay()}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormItem;

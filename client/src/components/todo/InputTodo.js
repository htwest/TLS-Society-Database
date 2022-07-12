import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [descripiton, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { descripiton };
      // console.log("button presssed");
      const response = await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={descripiton}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="input-group-append">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default InputTodo;

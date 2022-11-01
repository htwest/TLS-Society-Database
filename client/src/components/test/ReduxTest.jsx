import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions/counterActions";
import { decrement } from "../../actions/counterActions";

const ReduxTest = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const divStyle = {
    color: "white",
    width: "200px",
    margin: "auto",
  };

  return (
    <div style={divStyle}>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <h1>Is Logged</h1>
      {isLogged ? <h3>Valuable Info</h3> : null}
    </div>
  );
};

export default ReduxTest;

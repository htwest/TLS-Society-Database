import { Fragment } from "react";
import "./App.css";

// Components (OLD)
// import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

// Components (NEW)
import Home from "./components/Home";

// Boostrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Fragment>
      <Container>
        <Home />
        <ListTodos />
      </Container>
    </Fragment>
  );
}

export default App;

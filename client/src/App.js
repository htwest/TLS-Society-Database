import { Fragment } from "react";
import "./App.css";

// Components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

// Boostrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Fragment>
      <Container>
        <InputTodo />
        <ListTodos />
      </Container>
    </Fragment>
  );
}

export default App;

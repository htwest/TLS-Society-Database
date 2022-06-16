import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import "./App.css";

// Components (OLD)
// import InputTodo from "./components/InputTodo";
// import ListTodos from "./components/ListTodos";

// Components (NEW)
import { LandingPage } from "./components/Landing.page";
// import Home from "./components/Home";

// Boostrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

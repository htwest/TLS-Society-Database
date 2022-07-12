import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components (OLD)
// import InputTodo from "./components/todo/InputTodo";
// import ListTodos from "./components/todo/ListTodos";

// Pages
import { LandingPage } from "./components/Landing.page";
import { ProfilePage } from "./components/Profile.page";
import { ErrorPage } from "./components/Error.page";

// Boostrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

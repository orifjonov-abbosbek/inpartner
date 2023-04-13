import React from "react";
import Login from "./components/Login/login";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./Pages/Registration/Register";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/register" && <Login />}
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

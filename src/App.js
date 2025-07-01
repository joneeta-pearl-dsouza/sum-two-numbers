import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const handleLoginSuccess = (userName) => {
    setName(userName);
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <Home name={name} />
  ) : (
    <Login onLoginSuccess={handleLoginSuccess} />
  );
};

export default App;

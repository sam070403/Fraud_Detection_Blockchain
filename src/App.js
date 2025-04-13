// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  const [userAccount, setUserAccount] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={(account) => setUserAccount(account)} />}
        />
        <Route
          path="/register"
          element={<Registration account={userAccount} />}
        />
      </Routes>
    </Router>
    
  );
}

export default App;

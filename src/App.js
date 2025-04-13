// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Transaction from "./components/Transaction";
import TransactionHistory from "./components/TransactionHistory";
import Layout from "./components/Layout";


function App() {
  const [userAccount, setUserAccount] = useState("");
  const [account, setAccount] = useState("");

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout account={account}><Login onLogin={setAccount} /></Layout>} />
      <Route path="/register" element={<Layout account={account}><Registration account={account} /></Layout>} />
      <Route path="/transaction" element={<Layout account={account}><Transaction account={account} /></Layout>} />
      <Route path="/history" element={<Layout account={account}><TransactionHistory /></Layout>} />
      </Routes>
    </Router>
    
  );
}

export default App;

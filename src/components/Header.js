// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import "./Header.css";

const Header = ({ account }) => {
  return (
    <header className="header">
      <div className="header-left">
        <FaShieldAlt className="logo-icon" />
        <span className="logo-text">FraudBlocker</span>
      </div>

      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/transaction">Transaction</Link>
        <Link to="/history">History</Link>
      </nav>

      <div className="header-right">
        <span className="wallet-text">
          {account ? `Wallet: ${account.slice(0, 6)}...${account.slice(-4)}` : "Not connected"}
        </span>
      </div>
    </header>
  );
};

export default Header;

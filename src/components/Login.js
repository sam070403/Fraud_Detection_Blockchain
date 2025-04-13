// src/components/Login.js
import React, { useState } from "react";
import getWeb3 from "../web3";
import { FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [account, setAccount] = useState("");
  const navigate = useNavigate(); // 👈 use navigate

  const connectWallet = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const user = accounts[0];
      setAccount(user);
      onLogin(user);

      // ✅ Navigate to /register after connection
      navigate("/register");
    } catch (err) {
      console.error("MetaMask connection error:", err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="left-panel">
        <div className="branding">
          <FaShieldAlt className="shield-icon" />
          <h1 className="brand-name">FraudBlocker</h1>
        </div>

        <p className="tagline">
          Welcome to the future of secure financial transactions. Connect your MetaMask wallet to get started and protect your assets from fraud using blockchain technology.
        </p>

        {!account ? (
          <button onClick={connectWallet} className="connect-btn">
            Connect MetaMask
          </button>
        ) : (
          <p className="connected">Connected: {account}</p>
        )}
      </div>

      <div className="right-panel">
        <h2 className="right-heading">Why Choose FraudBlocker?</h2>
        <ul className="features">
          <li>⚡ Real-time fraud detection powered by smart contracts</li>
          <li>🛡️ KYC & AML verification for complete compliance</li>
          <li>🔐 Escrow & Multi-signature authentication for big transactions</li>
          <li>📈 Transparent audit trail with blockchain immutability</li>
        </ul>
        <p className="quote">“We don't just detect fraud – we block it.”</p>
      </div>
    </div>
  );
};

export default Login;

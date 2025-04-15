// src/components/Login.js
import React, { useState, useEffect } from "react";
import getWeb3 from "../web3";
import { FaShieldAlt } from "react-icons/fa";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        onLogin(accounts[0]);
      }
    } catch (err) {
      console.error("MetaMask connection error:", err);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then(accounts => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          onLogin(accounts[0]);
        }
      });
    }
  }, [onLogin]);

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="logo-title">
          <FaShieldAlt className="shield-icon" />
          <h1 className="title">FraudBlocker</h1>
        </div>

        <p className="welcome-text">
          Welcome to the future of secure financial transactions. Connect your MetaMask wallet to get started and protect your assets from fraud using blockchain technology.
        </p>

        {!account ? (
          <button onClick={connectWallet} className="connect-button">
            Connect MetaMask
          </button>
        ) : (
          <div className="connected-box">
            <h3>Wallet Connected ✅</h3>
            <p className="connected-address">{account}</p>
          </div>
        )}
      </div>

      <div className="login-right">
        <h2 className="subtitle">Why FraudBlocker?</h2>
        <ul className="features-list">
          <li>Real-time fraud detection using blockchain transparency</li>
          <li>KYC/AML integrated verification for secure user onboarding</li>
          <li>Escrow and multi-signature authentication for high-value transactions</li>
          <li>Fully decentralized & auditable system built on Ethereum</li>
        </ul>

        <p className="quote-text">
          "We don't just detect fraud – we block it."
        </p>
      </div>
    </div>
  );
};

export default Login;

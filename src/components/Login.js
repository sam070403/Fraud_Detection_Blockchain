// src/components/Login.js
import React, { useState } from "react";
import getWeb3 from "../web3";
//import "./Login.css";

const Login = ({ onLogin }) => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      onLogin(accounts[0]);
    } catch (err) {
      console.error("MetaMask connection error:", err);
    }
  };

  return (
    <div className="login-container">
      <h2>Blockchain Fraud Detection</h2>
      {!account ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <p>Connected as: {account}</p>
      )}
    </div>
  );
};

export default Login;

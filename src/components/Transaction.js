// src/components/TransactionPage.js
import React, { useState } from "react";
import { FaPaperPlane, FaShieldAlt } from "react-icons/fa";
import "./Transaction.css";

const Transaction = ({ account }) => {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    if (!receiver || !amount) {
      alert("Please fill in both receiver address and amount.");
      return;
    }

    // Placeholder action
    alert(`🚀 Transaction Initiated!\nFrom: ${account}\nTo: ${receiver}\nAmount: ${amount} ETH`);

    // TODO: Integrate with smart contract function here
  };

  return (
    <div className="txn-container">
      <div className="txn-header">
        <FaShieldAlt className="shield-icon" />
        <h1>FraudBlocker</h1>
      </div>

      <div className="txn-card">
        <h2><FaPaperPlane /> Initiate Transaction</h2>

        <div className="txn-group">
          <label>Sender Wallet:</label>
          <input type="text" value={account} disabled />
        </div>

        <div className="txn-group">
          <label>Receiver Wallet Address:</label>
          <input
            type="text"
            placeholder="0x123...abc"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
        </div>

        <div className="txn-group">
          <label>Amount (ETH):</label>
          <input
            type="number"
            placeholder="e.g. 0.5"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button onClick={handleSend} className="txn-button">
          Send Transaction
        </button>
      </div>
    </div>
  );
};

export default Transaction;

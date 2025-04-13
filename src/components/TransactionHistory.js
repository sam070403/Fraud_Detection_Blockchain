// src/components/TransactionHistory.js
import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import "./TransactionHistory.css";

const sampleTransactions = [
  {
    id: 1,
    sender: "0xAb84...5cb2",
    receiver: "0x4B20...02db",
    amount: "2.5 ETH",
    status: "Success",
    flagged: false,
  },
  {
    id: 2,
    sender: "0x5B38...ddC4",
    receiver: "0xAb84...5cb2",
    amount: "0.8 ETH",
    status: "Flagged",
    flagged: true,
  },
  {
    id: 3,
    sender: "0x8B2f...2CbA",
    receiver: "0x2233...AAbb",
    amount: "1.0 ETH",
    status: "Success",
    flagged: false,
  },
];

const TransactionHistory = () => {
  return (
    <div className="history-container">
      <div className="history-header">
        <FaShieldAlt className="logo-icon" />
        <h1>FraudBlocker</h1>
      </div>

      <h2 className="history-title">Transaction History</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>Txn ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleTransactions.map((tx) => (
            <tr key={tx.id} className={tx.flagged ? "flagged-row" : ""}>
              <td>{tx.id}</td>
              <td>{tx.sender}</td>
              <td>{tx.receiver}</td>
              <td>{tx.amount}</td>
              <td className={tx.flagged ? "status-flagged" : "status-success"}>
                {tx.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

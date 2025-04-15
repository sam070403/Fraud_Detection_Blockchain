// src/components/UserDashboard.js
import React from "react";
import { FaCheckCircle, FaTimesCircle, FaWallet, FaExclamationTriangle, FaExchangeAlt } from "react-icons/fa";
import "./UserDashboard.css";

const UserDashboard = ({ account }) => {
  const kycStatus = true; // mock status
  const walletBalance = "3.85 ETH"; // mock balance
  const fraudAlerts = 1;

  const recentTransactions = [
    {
      id: 101,
      to: "0x4B20...02db",
      amount: "1.2 ETH",
      status: "Success",
      isFlagged: false,
    },
    {
      id: 102,
      to: "0x2233...AAbb",
      amount: "0.5 ETH",
      status: "Flagged",
      isFlagged: true,
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <FaWallet className="card-icon" />
          <h3>Wallet Balance</h3>
          <p>{walletBalance}</p>
        </div>

        <div className={`card ${kycStatus ? "kyc-verified" : "kyc-unverified"}`}>
          {kycStatus ? <FaCheckCircle className="card-icon" /> : <FaTimesCircle className="card-icon" />}
          <h3>KYC Status</h3>
          <p>{kycStatus ? "Verified" : "Not Verified"}</p>
        </div>

        <div className="card">
          <FaExclamationTriangle className="card-icon alert-icon" />
          <h3>Fraud Alerts</h3>
          <p>{fraudAlerts} Alert{fraudAlerts !== 1 && 's'}</p>
        </div>
      </div>

      <div className="transactions-section">
        <h2>Recent Transactions</h2>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Txn ID</th>
              <th>To</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className={tx.isFlagged ? "flagged" : ""}>
                <td>{tx.id}</td>
                <td>{tx.to}</td>
                <td>{tx.amount}</td>
                <td className={tx.isFlagged ? "status-flagged" : "status-success"}>
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;

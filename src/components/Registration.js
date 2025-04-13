// src/components/Registration.js
import React, { useState } from "react";

const Registration = ({ account }) => {
  const [kycInput, setKycInput] = useState("");

  const handleSubmit = () => {
    alert(`Submitted KYC hash for ${account}: ${kycInput}`);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>KYC Submission</h2>
      <p>Your Wallet: {account}</p>
      <input
        type="text"
        placeholder="Enter Aadhar/PAN Hash"
        value={kycInput}
        onChange={(e) => setKycInput(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        Submit KYC
      </button>
    </div>
  );
};

export default Registration;

// src/components/Registration.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaIdCard,FaShieldAlt } from "react-icons/fa";
import SHA256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import "./Registration.css";

const Registration = ({ account }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    aadharNumber: "",
    aadharFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aadharHash = SHA256(form.aadharNumber).toString();

    const reader = new FileReader();
    reader.onload = function () {
      const wordArray = CryptoJS.lib.WordArray.create(reader.result);
      const fileHash = SHA256(wordArray).toString();

      console.log("🚀 Submitted KYC Details:");
      console.log("Name:", form.name);
      console.log("Age:", form.age);
      console.log("Wallet:", account);
      console.log("Hashed Aadhar Number:", aadharHash);
      console.log("Hashed Aadhar PDF:", fileHash);

      alert("✅ KYC Submitted Successfully!");

      // TODO: Send aadharHash and fileHash to smart contract
    };

    reader.readAsArrayBuffer(form.aadharFile);
  };

  return (
    <div className="kyc-container">
      <div className="kyc-form-wrapper">
        <div className="kyc-header">
          <FaIdCard className="kyc-icon" />
          <h1>KYC Verification</h1>
        </div>
        <form onSubmit={handleSubmit} className="kyc-form">
          <label>
            Full Name:
            <input type="text" name="name" required onChange={handleChange} />
          </label>

          <label>
            Age:
            <input type="number" name="age" required onChange={handleChange} />
          </label>

          <label>
            Aadhar Number:
            <input type="text" name="aadharNumber" required onChange={handleChange} />
          </label>

          <label>
            Upload Aadhar PDF:
            <input type="file" name="aadharFile" accept=".pdf" required onChange={handleChange} />
          </label>

          <button type="submit" className="kyc-submit-btn">
            Submit KYC
          </button>
        </form>

        <p className="kyc-note">🔐 Your Aadhar details and document are securely hashed before sending to the blockchain.</p>
        <p className="wallet">Connected Wallet: {account}</p>
      </div>
    </div>
  );
};

export default Registration;

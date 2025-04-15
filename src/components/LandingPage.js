// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaCheckCircle, FaLock, FaFingerprint } from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <header className="landing-header">
        <FaShieldAlt className="landing-logo-icon" />
        <h1 className="landing-logo-text">FraudBlocker</h1>
      </header>

      <main className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">Secure Your Financial World</h1>
          <p className="hero-subtitle">
            Powered by Blockchain. Enhanced with AI. Designed to Detect and Block Financial Fraud in Real-Time.
          </p>
          <button className="cta-button" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>

        <div className="hero-cards">
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Immutable Security</h3>
            <p>All transactions are stored on the Ethereum blockchain ensuring transparency & trust.</p>
          </div>
          <div className="feature-card">
            <FaFingerprint className="feature-icon" />
            <h3>KYC & Identity Verification</h3>
            <p>Ensure every user is verified with robust KYC and AML checks.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h3>Real-Time Fraud Detection</h3>
            <p>AI-powered risk scoring and alerting system to detect fraud as it happens.</p>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        &copy; {new Date().getFullYear()} FraudBlocker Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

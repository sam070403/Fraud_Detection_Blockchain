// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="footer-socials">
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} FraudBlocker Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Layout.js
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, account }) => {
  return (
    <div className="layout-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header account={account} />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

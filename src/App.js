// src/App.js
import React, { useState } from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  const [userAccount, setUserAccount] = useState("");

  return (
    <div>
      {!userAccount ? (
        <Login onLogin={setUserAccount} />
      ) : (
        <Registration account={userAccount} />
      )}
     
    </div>
    
  );
}

export default App;

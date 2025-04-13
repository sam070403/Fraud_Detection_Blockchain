// src/web3.js
import Web3 from "web3";

const getWeb3 = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    return web3;
  } else {
    alert("Please install MetaMask to use this app.");
    throw new Error("MetaMask not detected");
  }
};

export default getWeb3;

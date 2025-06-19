// de-paym-website/js/web3.js

// Placeholder for future blockchain interactions
// E.g., connecting to MetaMask, reading token balances, etc.

async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Wallet connected");
    } catch (error) {
      console.error("User rejected the request", error);
    }
  } else {
    alert("No Ethereum provider found. Install MetaMask or another wallet extension.");
  }
}

export { connectWallet };

# 💸 DSJ Token – Web3 Fungible Token on Internet Computer

A decentralized token system built using **Motoko** on the **Internet Computer (DFINITY)**. Each user (identified by their **Principal ID**) can:
- Claim **10,000 DSJ tokens** (one-time only)
- View their current DSJ token balance
- Transfer tokens to another Principal ID

This project showcases core Web3 concepts like identity-based token claiming, inter-canister communication, and on-chain balance tracking — all without any centralized infrastructure.

---

## 🚀 Features

- 🎁 One-time airdrop of **10,000 DSJ Tokens** per Principal ID  
- 👛 Real-time **balance check** functionality  
- 🔁 **Token transfer** to other Principal IDs  
- 🌐 Lightweight frontend for user interaction  
- 🧠 Fully decentralized smart contract logic with persistent state

---

## 🛠 Tech Stack

| Layer       | Technology                     |
|-------------|---------------------------------|
| Language    | [Motoko](https://internetcomputer.org/motoko) |
| Blockchain  | [Internet Computer Protocol (ICP)](https://dfinity.org) |
| Tools       | DFX SDK, VS Code               |
| Frontend    | HTML, CSS, JavaScript (Basic UI) |
| Hosting     | Local canister deployment via DFX |

---

## 📦 Installation & Local Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Shubhamjha31/DSJ-Token.git
   cd DSJ-Token
Start the local Internet Computer replica

dfx start --background
Deploy the canister

dfx deploy
Open the frontend

dfx canister call token_backend <method_name>
# Or use the frontend UI in the browser
⚠️ Make sure you have DFX installed. If not, install from sdk.dfinity.org

📚 Concepts Demonstrated
🔐 Principal-based identity mapping

💰 Fungible token logic and state management

🗂️ Canister data persistence

🔄 Basic frontend-backend interaction in Web3

📡 Token economy simulation without external auth

🤝 Contributing
Contributions, suggestions, and improvements are welcome!
Feel free to fork this repo, raise issues, or create pull requests.

📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Shubham Jha
LinkedIn • GitHub

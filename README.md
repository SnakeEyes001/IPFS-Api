# 🧬 ipfs-storage-api

**ipfs-storage-api** is a RESTful backend built with **Node.js**, **IPFS HTTP Client**, and **MongoDB**. It allows you to upload files to the IPFS decentralized network, retrieve IPFS hashes (CIDs), and manage metadata using a MongoDB database.

---

## 🚀 Features

- 🌐 Upload any file to IPFS (local node or Infura)
- 🧾 Store file metadata (name, type, CID, size, user, etc.)
- 🗂 Retrieve file info by hash or database ID
- 🔄 Pin files on IPFS (optional)
- 🧩 Easy to integrate with Web3 DApps

---

## 🛠 Tech Stack

- Node.js + Express.js
- IPFS HTTP Client (`ipfs-http-client`)
- MongoDB (with Mongoose)
- Multer (for file uploads)
- dotenv, cors, helmet

---

## 📦 Installation

```bash
git clone https://github.com/your-org/ipfs-storage-api.git
cd ipfs-storage-api
npm install
npm run start

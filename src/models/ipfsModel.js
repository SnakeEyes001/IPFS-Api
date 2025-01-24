const mongoose = require('mongoose')

const ipfsSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('IPFS', ipfsSchema)

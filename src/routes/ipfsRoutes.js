/* const express = require('express')
const {
  storeDataOnIPFS,
  getDataFromIPFS,
} = require('../controllers/ipfsController')

const router = express.Router()

// Route pour stocker les données sur IPFS
router.post('/store', storeDataOnIPFS)

// Route pour récupérer les données depuis IPFS
router.get('/retrieve/:cid', getDataFromIPFS)

module.exports = router
 */
const express = require('express')
const {
  storeDataOnIPFS,
  getDataFromIPFS,
} = require('../controllers/ipfsController')
const rateLimit = require('express-rate-limit')

const router = express.Router()

// Limitation pour les routes IPFS
const ipfsLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 50, // 50 requêtes maximum
  message: {
    message: 'Too many requests to the IPFS API, please try again later.',
  },
})

// Routes avec limitation
router.post('/store', ipfsLimiter, storeDataOnIPFS)
router.get('/retrieve/:cid', ipfsLimiter, getDataFromIPFS)

module.exports = router

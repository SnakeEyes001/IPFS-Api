const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const ipfsRoutes = require('./routes/ipfsRoutes')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const app = express()

// Limitation des requêtes : 100 requêtes maximum par 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite de 100 requêtes
  message: {
    message: 'Too many requests, please try again later.',
  },
  standardHeaders: true, // Retourne les informations de limite dans les headers `RateLimit-*`
  legacyHeaders: false, // Désactive les headers obsolètes `X-RateLimit-*`
})

// Appliquer globalement
app.use(limiter)
app.use(helmet())
// Middlewares globaux
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/users', userRoutes)
// Autres routes...
app.use('/api/ipfs', ipfsRoutes)

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal Server Error' })
})

module.exports = app

const IPFSModel = require('../models/ipfsModel')
const { uploadToIPFS, getFromIPFS } = require('../services/ipfsService')

// Endpoint pour stocker des données sur IPFS
const storeDataOnIPFS = async (req, res) => {
  try {
    const { data } = req.body

    if (!data) {
      return res.status(400).json({ message: 'Data is required' })
    }

    // Charger les données sur IPFS
    const cid = await uploadToIPFS(data)

    // Sauvegarder dans MongoDB
    const ipfsRecord = new IPFSModel({ data, cid })
    await ipfsRecord.save()

    res.status(201).json({
      message: 'Data stored on IPFS successfully',
      cid,
    })
  } catch (error) {
    console.error('Error storing data on IPFS:', error)
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message })
  }
}

// Endpoint pour récupérer des données via CID
const getDataFromIPFS = async (req, res) => {
  try {
    const { cid } = req.params

    if (!cid) {
      return res.status(400).json({ message: 'CID is required' })
    }

    // Rechercher dans MongoDB
    const record = await IPFSModel.findOne({ cid })
    if (!record) {
      return res
        .status(404)
        .json({ message: 'No data found for the given CID' })
    }

    // Récupérer les données depuis IPFS
    const data = await getFromIPFS(cid)

    res.status(200).json({
      message: 'Data retrieved successfully',
      data,
    })
  } catch (error) {
    console.error('Error retrieving data from IPFS:', error)
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message })
  }
}

module.exports = { storeDataOnIPFS, getDataFromIPFS }

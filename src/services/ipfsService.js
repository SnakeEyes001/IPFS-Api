const { create } = require('ipfs-http-client')

// Configuration IPFS avec un nœud public (exemple avec Infura)
const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
})

const uploadToIPFS = async (data) => {
  try {
    const { cid } = await ipfs.add(data)
    return cid.toString() // Renvoie le hash (CID)
  } catch (error) {
    console.error('Error uploading to IPFS:', error)
    throw new Error('Failed to upload data to IPFS')
  }
}

const getFromIPFS = async (cid) => {
  try {
    const chunks = []
    for await (const chunk of ipfs.cat(cid)) {
      chunks.push(chunk)
    }
    return Buffer.concat(chunks).toString() // Retourne les données en texte
  } catch (error) {
    console.error('Error retrieving from IPFS:', error)
    throw new Error('Failed to retrieve data from IPFS')
  }
}

module.exports = { uploadToIPFS, getFromIPFS }

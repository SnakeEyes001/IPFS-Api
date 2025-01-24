const Joi = require('joi')

// Schéma pour valider les données stockées sur IPFS
const storeDataSchema = Joi.object({
  data: Joi.string().min(1).required().messages({
    'string.empty': 'Data is required and cannot be empty',
    'any.required': 'Data is required',
  }),
})

// Exporter les schémas
module.exports = {
  storeDataSchema,
}

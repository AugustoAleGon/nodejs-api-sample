const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String },
  starts: { type: Integer },
  price: { type: Integer },
  images: { type: String },
  amenities: { type: Array}
})

module.exports = hotelSchema

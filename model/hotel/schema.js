const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String },
  stars: { type: Integer },
  price: { type: Integer },
  image: { type: String },
  amenities: { type: Array}
})

module.exports = hotelSchema

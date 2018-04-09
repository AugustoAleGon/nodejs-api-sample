const Facade = require('../../lib/facade')
const hotelSchema = require('./schema')

class HotelFacade extends Facade {}

module.exports = new HotelFacade('Hotel', hotelSchema)

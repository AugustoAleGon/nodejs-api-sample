const Controller = require('../../lib/controller')
const hotelFacade = require('./facade')

class HotelController extends Controller {}

module.exports = new HotelController(hotelFacade)

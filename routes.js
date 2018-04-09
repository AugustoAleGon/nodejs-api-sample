const Router = require('express').Router
const router = new Router()

const hotel = require('./model/hotel/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to almundo-core API!' })
})

router.use('/hotel', hotel)

module.exports = router

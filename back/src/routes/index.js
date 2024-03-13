const { Router } = require('express')
const ejControlador = require('../controllers/controllers')
const movies = require('../controllers/movieControllers')

const router = Router()

router.get('/', ejControlador)

router.use('/movies', movies)

module.exports = router
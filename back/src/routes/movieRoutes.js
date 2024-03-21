const { Router } = require('express')
const {getMovie, postMovie} = require('../controllers/movieControllers')
const validateMovie = require('../middlewares/validarPelicula')

const movies = Router()

movies.get('/', getMovie)
movies.post('/', validateMovie,postMovie)

module.exports = movies
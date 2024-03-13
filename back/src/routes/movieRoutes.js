const { Router } = require('express')
const getMovies = require('../controllers/movieControllers')

const movies = Router()

movies.get('/', getMovies)

module.exports = movies
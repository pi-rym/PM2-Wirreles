const { Router } = require('express')
const getMovies = require('../controllers/movieControllers')

const movies = Router()

movies.get('/movies', getMovies)

module.exports = movies
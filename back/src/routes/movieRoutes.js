const { Router } = require('express')
const {getMovie, postMovie} = require('../controllers/movieControllers')

const movies = Router()

movies.get('/', getMovie)
movies.post('/', postMovie)

module.exports = movies
const Movie = require('../models/Movie')

const getMovies = async () =>{
    const movies = await Movie.find()

    return movies
}

module.exports = getMovies;



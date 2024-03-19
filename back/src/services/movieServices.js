const Movie = require('../models/Movie')

const getMovies = async () =>{
    const movies = await Movie.find()

    return movies
}

const postMovies = async (movie) => {
    try {
        const newMovie = await Movie.create(movie)
        return newMovie
    } catch (error) {
        throw new Error(error.message)
    }
    
}

module.exports = {
    getMovies,
    postMovies
};



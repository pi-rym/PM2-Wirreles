const {getMovies,postMovies} = require('../services/movieServices')

const getMovie = async (req, res)=>{
    try {
        const movie = await getMovies();
        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error:"Error interno del servidor"
        });
    }
}

const postMovie = async (req, res)=>{
    try {
        const {title, year, poster, director, duration, rate, genre} = req.body
        const newMovie = {title, year, poster, director, duration, rate, genre}
        await postMovies(newMovie)
        res.status(200).json(
            {message: "Pelicula creada con exito"}
        )
    } catch (error) {
        res.status(400).json({message:"Error al crear la pelicula"})
    }
}

module.exports = {
    getMovie,
    postMovie
}
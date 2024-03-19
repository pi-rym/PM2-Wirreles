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
        await postMovies(req.body)
        res.status(200).json(
            {message: "Pelicula creada con exito"}
        )
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getMovie,
    postMovie
}
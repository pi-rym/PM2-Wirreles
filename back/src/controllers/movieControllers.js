const movies = require('../services/movieServices')

const getMovie = async (req, res)=>{
    try {
        const movie = await movies();
        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error:"Error interno del servidor"
        });
    }
}

module.exports =  getMovie;
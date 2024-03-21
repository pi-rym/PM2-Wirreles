const validateMovie = (req, res, next) => {
    const { title, poster, director, year, duration, genre, rate} = req.body
    const yearString = year.toString();

    if(
        !title || !poster || !director ||
        !year || !duration || !genre || !rate
    )
    {
        return res.status(400).json({
            error:"Faltan Datos"
        });
    } else if (yearString.length===4){
        next();
    } else {
        return res.status(400).json({
            error: "El año no es valido"
        });
    }
};

module.exports=validateMovie;
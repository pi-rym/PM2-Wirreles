const {Repository} = require('./models.js')
const {elementoHtml}= require('./elementoHtml.js')

const repository = new Repository();

function actualizarVista(){

    const container = document.getElementById("ultimas-peliculas")
    container.innerHTML="";

    const peliculas = repository.pelis;

    const mapeo = peliculas.map(actividad => elementoHtml(actividad));

    mapeo.forEach(element => {
        container.appendChild(element)
    });
}

const addMovie = () => {
    $.get('https://students-api.up.railway.app/movies', (data)=>{
        data.forEach((movieData) =>{
            repository.createMovie(movieData)
        });
        actualizarVista();
    })
}

module.exports = {
    actualizarVista,
    addMovie
}
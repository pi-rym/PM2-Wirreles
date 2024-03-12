const {Repository} = require('./models.js')
const {elementoHtml}= require('./elementoHtml.js')
const axios = require('axios');

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
    axios.get('https://students-api.up.railway.app/movies')
        .then(response => {
            response.data.forEach(movieData => {
                repository.createMovie(movieData);
            });
            actualizarVista();
        })
        .catch(error => {
            console.error('Error al obtener los datos de las películas:', error);
        });
}


module.exports = {
    actualizarVista,
    addMovie
}
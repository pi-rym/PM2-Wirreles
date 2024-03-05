function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

class Pelicula {
    constructor(year, title, director, poster, duration, genre, rate){
        this.year = year;
        this.title = title;
        this.director = director;
        this.poster = poster;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
    }
}

class Repository {
    constructor(){
        this.pelis = [];
    }

    createMovie({year, title, director, poster, duration, genre, rate}) {
        const newPeli = new Pelicula(year, title, director, poster, duration, genre, rate);
        this.pelis.push(newPeli);
    }

}

const repository = new Repository();

const addMovie = () => {
    fetch('https://students-api.2.us-1.fl0.io/movies')
        .then(response => response.json())
        .then(data => {
            data.forEach(movieData => {
                repository.createMovie(movieData);
            });
            actualizarVista();
        })
        .catch(error => console.error('Error al obtener las películas:', error));
}

function elementoHtml(Data) {
    const {year, title, director, poster, duration, genre, rate} = Data;

    const card = document.createElement('div');
    card.classList.add('card');

    // const cardLink = document.createElement('a');
    // cardLink.href = link;
    // cardLink.classList.add('card-link');

    const card1 = document.createElement('div');
    card1.classList.add('mini-card');

    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add('title');

    const rateElement = document.createElement('p');
    rateElement.textContent = "Rate: " + rate;
    rateElement.classList.add('p-card');

    const yearElement = document.createElement('p');
    yearElement.textContent = "Año: " + year;
    yearElement.classList.add('p-card');

    const directorElement = document.createElement('p');
    directorElement.textContent = "Director: " + director;
    directorElement.classList.add('p-card');    

    const durationElement = document.createElement('p');
    durationElement.textContent = "Duracion: " + duration;
    durationElement.classList.add('p-card');
    
    const genreElement = document.createElement('p');
    genreElement.textContent = "Genero: " + genre.join(', ');
    genreElement.classList.add('p-card');    

    const imageElement = document.createElement('img');
    imageElement.src = poster;
    imageElement.alt = title;
    imageElement.classList.add('logo');


    card1.appendChild(titleElement);
    card1.appendChild(rateElement);
    card1.appendChild(yearElement);
    card1.appendChild(directorElement);
    card1.appendChild(genreElement);
    card1.appendChild(durationElement);

    card.appendChild(imageElement);
    card.appendChild(card1);

    // cardLink.appendChild(card)
    return card;
}

function actualizarVista(){

    const container = document.getElementById("ultimas-peliculas")
    container.innerHTML="";

    const peliculas = repository.pelis;

    const mapeo = peliculas.map(actividad => elementoHtml(actividad));

    mapeo.forEach(element => {
        container.appendChild(element)
    });
}
addMovie();
actualizarVista();


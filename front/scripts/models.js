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

module.exports = {
    Repository
}
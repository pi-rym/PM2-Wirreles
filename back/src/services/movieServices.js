class Movies {
    constructor(movieData) {
        if (!movieData.title || !movieData.director || !movieData.poster) {
            throw new Error("La película debe tener un título, director y poster.");
        }

        this.title = movieData.title;
        this.year = movieData.year;
        this.director = movieData.director;
        this.duration = movieData.duration;
        this.genre = movieData.genre;
        this.rate = movieData.rate;
        this.poster = movieData.poster;
    }
}

const getMovies = async () => {
    const movies = [
        {
            "title": "Guardians of the Galaxy Vol. 2",
            "year": 2017,
            "director": "James Gunn",
            "duration": "2h 16min",
            "genre": ["Action", "Adventure", "Comedy"],
            "rate": 7.7,
            "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        },
        {
            "title": "Star Wars: Episode IV - A New Hope",
            "year": 1977,
            "director": "George Lucas",
            "duration": "2h 1min",
            "genre": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
            "rate": 8.7,
            "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
        },
        {
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "year": 2001,
            "director": "Peter Jackson",
            "duration": "2h 58min",
            "genre": ["Action", "Adventure", "Drama", "Fantasy"],
            "rate": 8.8,
            "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
        }
    ];
    return movies.map(movieData => new Movies(movieData));
};

module.exports = getMovies;



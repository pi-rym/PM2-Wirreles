
function elementoHtml(Data) {
    const {year, title, director, poster, duration, genre, rate} = Data;

    const card = document.createElement('div');
    card.classList.add('card1');

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


module.exports = {
    elementoHtml
};
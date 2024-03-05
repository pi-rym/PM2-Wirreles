function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


function elementoHtml(tempData) {
    const {year, title, director, poster, duration, genre, rate } = tempData;

    const card = document.createElement('div');
    card.classList.add('card');


    const card1 = document.createElement('div');
    card1.classList.add('mini-card');

    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add('title');

   
    const rateElement = document.createElement('p');
    rateElement.textContent = rate;
    rateElement.classList.add('rate');

    const imageElement = document.createElement('img');
    imageElement.src = poster;
    imageElement.alt = title;
    imageElement.classList.add('logo');


    card1.appendChild(titleElement);
    card1.appendChild(rateElement);
    card.appendChild(imageElement);
    card.appendChild(card1);

    return card;
}

function actualizarVista(){

    const container = document.getElementById("ultimas-peliculas")
    container.innerHTML="";

    const peliculas = tempData;

    const mapeo = peliculas.map(actividad => elementoHtml(actividad));

    mapeo.forEach(element => {
        container.appendChild(element)
    });
}

actualizarVista();
console.log(tempData);

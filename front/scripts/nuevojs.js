
document.getElementById('btnNavigate').addEventListener('click', function() {
    window.location.href = "../pages/info_proyecto.html";
});

document.getElementById('Inicio').addEventListener('click', function() {
    window.location.href = "../";
});

function clear() {
  const form = document.querySelector('#form');
  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  const limpiar = document.getElementById("clear");
  limpiar.addEventListener("click", clear);
});


function tomarValores (e){
    e.preventDefault()
    let obj;
    const primerGen =  document.getElementById("Action");
    const segundoGen = document.getElementById("Adventure");
    const tercerGen = document.getElementById("Fantasy");
    const cuartoGen = document.getElementById("Sci-Fi");
    const quintoGen = document.getElementById("Comedy");
    const sextoGen = document.getElementById("Drama");

    const arrGeneros = [primerGen, segundoGen,tercerGen,cuartoGen,quintoGen,sextoGen];
    let genre = [];

    for(let i = 0; i < arrGeneros.length;i++){
        if(arrGeneros[i].checked === true){
            genre.push(arrGeneros[i].value);
        }
    }

    const markInput=(e)=> {
        e.target.checked;
    }
    
    primerGen.addEventListener("click", markInput)
    segundoGen.addEventListener("click", markInput)
    tercerGen.addEventListener("click", markInput)
    cuartoGen.addEventListener("click", markInput)
    quintoGen.addEventListener("click", markInput)
    sextoGen.addEventListener("click", markInput)

    const title = document.getElementById("title").value;

    const year = document.getElementById("year").value;

    const director = document.getElementById("director").value;

    const duration = document.getElementById("duration").value;

    const rate = document.getElementById("rate").value;
    
    const poster = document.getElementById("img").value;

    if (title === '' || year === '' || director === '' || duration === '' || genre.length<1 || rate === '' || poster === '') {
        return alert('Por favor completa todos los campos.');
    }

    obj = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    }
    postData(obj)
}

const button = document.getElementById('boton')
// button.addEventListener("click", tomarValores)


const postData = async (obj) => {

    const url = "http://localhost:3000/movies"; 

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj), // Agrega los datos que deseas enviar
    };

    try {
        await fetch(url, requestOptions);
        
        // const data = await response.json();
        // Aquí puedes manejar la respuesta exitosa (data)
        
    } catch (error) {
        // Manejo de errores
        console.error('Error al realizar la solicitud POST:', error);
    }
};

const form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    tomarValores(e)
    alert("Pelicula creada con exito")
    clear()
});


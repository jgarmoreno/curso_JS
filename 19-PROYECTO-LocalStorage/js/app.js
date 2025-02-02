// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde se escribe
    const tweet = document.querySelector('#tweet').value;
    
    // Validación
    if(tweet === '') {
        mostrarError('No puede ir vacío');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }

    // Añadir al arreglo de Tweets
    tweets = [...tweets, tweetObj];

    // Crear HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Eliminar la alerta tras 3 seg
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra listado de tweets
function crearHTML() {
    limpiarHTML();
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // Agregar botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.texto;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // Insertarlo en su elemento
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Agregar los tweets al localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Eliminar tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => {
        return tweet.id !== id;
    });
    crearHTML();
}
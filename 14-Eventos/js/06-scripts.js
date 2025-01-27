// Event Bubbling, cuando ejecutas un evento pero se propaga por otros lugares, no cumpliendo su propósito.
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', () => {
    console.log('Click en card.')
});

infoDiv.addEventListener('click', () => {
    console.log('Click en info.')
});

tituloDiv.addEventListener('click', () => {
    console.log('Click en titulo.')
});

// Como titulo esta anidado en info en el HTML, e info dentro de card, cuando clicas en el titulo, te tira los 3 console logs.

// Para detener:
cardDiv.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitando el Event Bubbling.
    console.log('Click en card.')
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitando el Event Bubbling.
    console.log('Click en info.')
});

tituloDiv.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitando el Event Bubbling.
    console.log('Click en titulo.')
});

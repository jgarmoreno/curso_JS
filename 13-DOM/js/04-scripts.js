// querySelector // Retorna máximo un elemento, pero puedes seleccionar clases, ids...
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Un elemento tiene anidado 3 clases iguales. Quiero acceder a la segunda.
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar IDs
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);
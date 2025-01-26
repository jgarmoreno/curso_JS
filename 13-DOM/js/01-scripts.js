// Document.
let elemento;
elemento = document; // Siempre que se seleccione un elemento, acudir a document. Por la def. de DOM.
elemento = document.all; // Da todas las etiquetas usadas.
elemento = document.head;
elemento = document.body;
elemento = document.domain;

elemento = document.forms; // Todos los forms de la web
elemento = document.forms[0]; // Acceder al formulario en concreto.
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;


elemento = document.links[4].href;
elemento = document.links[4].classList; // Te lo da en DOMTokenList
elemento = document.links[4].className; // Te lo da en string

elemento = document.images;

elemento = document.scripts;

elemento = document.styleSheets;
elemento = document.styleSheets[3].cssRules; // Acceder a la hoja de estilos

// Si quiero ver si existe una clase en una hoja de estilos, primero tengo que crearlo como array:
const reglas = Array.from(document.styleSheets[3].cssRules);
const existeClase = reglas.some(function(regla){
    return regla.selectorText && regla.selectorText.includes('.footer');
});


console.log(elemento);
console.log(existeClase);
// Eliminar elementos del DOM
const primerEnlace = document.querySelector('a');

// 1º. Eliminarlo por sí mismo
primerEnlace.remove();

// 2º. Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children); // Para pillar la referencia (posición)
navegacion.removeChild(navegacion.children[2]);
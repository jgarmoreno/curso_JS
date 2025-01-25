// OBJECT METHODS // Object.freeze() - Congela un objeto, no se puede modificar, añadir o eliminar propiedades.
"use strict"; // Para poder usar el método freeze()

const producto = {
    nombre: 'Monitor 35 pulgadas',
    precio: 250,
    disponible: false
}

Object.freeze(producto); // No se puede modificar el objeto, ni añadir, ni eliminar propiedades.

// producto.imagen = 'imagen.jpg';
// producto.disponible = true;
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto)); // true 
// OBJECT METHODS //  Object.seal() -> No permite añadir ni eliminar propiedades, pero sí modificar las existentes.
"use strict"; // Para poder usar el método seal()

const producto = {
    nombre: 'Monitor 35 pulgadas',
    precio: 250,
    disponible: false
}

Object.seal(producto); // No se puede añadir ni eliminar propiedades, pero sí se pueden modificar las existentes.

// producto.imagen = 'imagen.jpg'; // No se puede.
// delete producto.disponible; // No se puede.
producto.precio = 300; // Sí se puede.

console.log(producto);
console.log(Object.isSealed(producto)); // true
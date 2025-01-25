// Problema con los objetos
const producto = {
    nombre: 'Monitor 35 pulgadas',
    precio: 250,
    disponible: false
}

// Aunque la variable sea const, si es un objeto, se pueden modificar sus valores y propiedades
producto.disponible = true;
delete producto.nombre;

console.log(producto) // producto.disponible = true y eliminado el nombre.

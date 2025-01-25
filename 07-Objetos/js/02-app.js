// Acceder a los valores de un objeto
const producto = {
    nombre: 'Monitor 35 pulgadas',
    precio: 250,
    disponible: false
}
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Esta manera es más común en PHP pero se puede usar también en JS
console.log(producto['nombre']);
console.log(producto['precio']);
console.log(producto['disponible']);
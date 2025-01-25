// Agregar los valores de un objeto a una nueva variable
const producto = {
    nombre: 'Monitor 23 pulgadas',
    precio: 120,
    disponible: true
}
// Una manera
const nombreProducto = producto.nombre; // Crea una variable, accede al producto obtiene su valor y lo iguala.
console.log(nombreProducto);

// OBJECT DESTRUCTURING. Crea la variable al mismo tiempo que obtiene el valor. Abajo se crean 3 variables.
const { nombre,precio,disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
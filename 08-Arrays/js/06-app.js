// Spread operator para AGREGAR varios elementos en un array.
// FORMA DECLARATIVA. Declara una nueva variable y no modifica el array de carrito, crea uno nuevo.
const carrito = [];

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 120
};

const producto2 = {
    nombre: 'Tablet',
    precio: 140
};

const producto3 = {
    nombre: 'Móvil',
    precio: 250
};

const producto4 = {
    nombre: 'Ratón',
    precio: 24
};

// Forma declarativa, crea una nueva variable. Con Push y Unshift es Imperativa.
let carritoFinal;
carritoFinal = [...carrito, producto];
console.table(carritoFinal); // Se añade al array de carrito el producto nuevo, en una nueva variable carritoFinal

carritoFinal = [...carritoFinal, producto2, producto3];
console.table(carritoFinal); // Ya se añaden los otros productos restantes a carritoFinal.

console.table(carrito); // Sale vacío


// Si quiero que se añada al comienzo y no al final:
carritoFinal = [producto4, ...carritoFinal];
console.table(carritoFinal);
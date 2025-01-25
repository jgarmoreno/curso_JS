// Concatenación
const producto = 'Monitor 20 pulgadas';
const precio = '30 USD';

console.log(producto.concat(precio));
console.log(producto.concat(' en descuento'));
console.log(producto + ' con un precio de ' + precio); // Requiere añadir espacios
console.log(producto, 'con un precio de',precio); // No reuuiere añadir espacios

// Concatenación mediante Template Strings
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);
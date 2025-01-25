// Cuando las variables se inicializan como let, se pueden volver a reasignar
let producto = 'Tablet';

// Reasignar el valor
producto = 'Monitor';
producto = 20;
producto = null;
producto = true;

console.log(producto);

let precio;
console.log(precio); // undefined
precio = 300;
console.log(precio);
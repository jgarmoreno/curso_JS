// Replace, Slice, Substring y CharAt
const producto = 'Monitor de 20 pulgadas';

console.log(producto);

// Reemplazar un texto en un string
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// Slice para cortar una cadena de texto
console.log(producto.slice(0,12)); // Monitor de 20
console.log(producto.slice(8)); // de 20 pulgadas
console.log(producto.slice(2,1)); // No hace nada

// Alternativa a Slice, .substring
console.log(producto.substring(0,12));
console.log(producto.substring(2,1)); // En este caso sí hace, invierte los valores.


const usuario = 'Marina';
console.log(usuario.slice(0,1)); // M
console.log(usuario.substring(0,1)); // M
console.log(usuario.charAt(0)); // M

// Trim para quitar espacios
const producto = '    Monitor 20 pulgadas    ';

console.log(producto);
console.log(producto.length);

// Eliminar del inicio
console.log(producto.trimStart());

// Eliminar del final
console.log(producto.trimEnd());

// También se puede
console.log(producto.trimStart().trimEnd());

// Eliminar todo
console.log(producto.trim());

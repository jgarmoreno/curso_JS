// Length, indexOf y includes

const producto = 'Monitor 20 pulgadas';

console.log(producto);
console.log(producto.length);

// Si quieres encontrar si una palabra se encuentra en una cadena de texto, dándote la posición en la que se encuentra
console.log(producto.indexOf('Monitor'));

console.log(producto.includes('Monitor')); //true
console.log(producto.includes('monitor')); //false


// Arrow function en map y foreach.
const carrito = [
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Tablet', precio: 120},
    {nombre: 'Teléfono', precio: 80},
    {nombre: 'Audífonos', precio: 50},
    {nombre: 'Ratón', precio: 20},
    {nombre: 'Teclado', precio: 22}
]

// Escribo para recordar sintaxis. forEach recorre sin array y el map recorre pero crea un array y usa return
carrito.forEach(function(producto) {
    console.log(`El Producto ${producto.nombre} tiene un Precio de ${producto.precio}`);
})

const arregloMap = carrito.map(function(producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
})
console.log(arregloMap);

// Arrow function. Recordar que sí es línea, no hace falta () ni {}. Tampoco el return en map.

// forEach
carrito.forEach( producto => console.log(`A.F. forEach El producto ${producto.nombre} tiene un precio de ${producto.precio}`));

// map
const arrowFunctionMap = carrito.map( producto => `A.F. map El producto ${producto.nombre} tiene un precio de ${producto.precio}`);

console.log(arrowFunctionMap);

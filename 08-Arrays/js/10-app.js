// Array Methods. MAP.
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Teléfono', precio: 150},
    {nombre: 'Ratón', precio: 25},
    {nombre: 'Auriculares', precio: 10},
    {nombre: 'Licencia Windows', precio: 110}
]
//.map() es igual que .forEach(), pero se CREA UN NUEVO ARREGLO y se usa RETURN.
const carritoFinal = carrito.map(function(producto) {
    return `Producto: ${producto.nombre} - Valor: ${producto.precio} €`;
});

console.table(carritoFinal);
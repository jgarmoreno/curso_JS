// Array Methods. FOR EACH.
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Teléfono', precio: 150},
    {nombre: 'Ratón', precio: 25},
    {nombre: 'Auriculares', precio: 10},
    {nombre: 'Licencia Windows', precio: 110}
]
// Se puede recorrer mediante for
for(let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio} €`);
}

// Hacerlo mediante For each.
carrito.forEach(function(producto) {
    console.log(`Nombre: ${producto.nombre} - Valor del producto: ${producto.precio} €`);
});
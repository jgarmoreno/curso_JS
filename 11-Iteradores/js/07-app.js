// For Of // Itera sobre ARRAYS
const pendientes = ['tareas', 'comer', 'trabajar', 'Estudiar js'];

pendientes.forEach((elemento, i) => console.log(`${i} : ${elemento}`));

const carrito = [
    {nombre: 'Monitor', precio: 230},
    {nombre: 'Teléfono', precio: 120},
    {nombre: 'Audífonos', precio: 30},
    {nombre: 'Escritorio', precio: 280},
    {nombre: 'Silla', precio: 76}
]
const arreglo1 = carrito.forEach((producto,i) => console.log(`Se ha seleccionado ID:${i}; Producto: ${producto.nombre} con un precio de ${producto.precio} €`));

for(let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito) {
    console.log(producto.nombre);
}
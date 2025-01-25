// For Each
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


const arreglo2 = carrito.map((producto,i) => `ID: ${i}, Producto: ${producto.nombre}, Precio: ${producto.precio} €`);

console.log(arreglo1);
console.log(arreglo2); // Si no se quita el console.log, no devuelve nada. Marcará undefined.

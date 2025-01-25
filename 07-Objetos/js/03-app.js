// Agregar nuevas propiedades al objeto o eliminarlas 
const producto = {
    nombre: 'Monitor 23 pulgadas',
    precio: 120,
    disponible: true
}
console.log(producto)

// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';
console.log(producto);

// Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);
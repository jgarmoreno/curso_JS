// Añadir un objeto dentro de otro objeto
const producto = {
    nombre: 'Monitor 23 pulgadas',
    precio: 120,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medidas);
console.log(producto.informacion.fabricacion.pais);
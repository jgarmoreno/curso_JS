// Obtener VALORES DE UN OBJETO dentro de OTRO OBJETO y asignarlos a VARIABLES
// Object DESTRUCTURING 
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
// Si hay un objeto dentro de otro objeto y se intenta acceder, no se puede acceder por puntos.
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion); 
console.log(fabricacion);
console.log(pais)

// const { nombre, informacion, informacion: { fabricacion }, informacion: { fabricacion: { pais } } } = producto;

// informacion => obtiene todo el objeto con medidas y fabricacion. Crea la variable fabricación como objeto. 
// console.log(informacion); 
// informacion: { fabricacion } => Obtiene el objeto de fabricacion. Crea la variable fabricacion como objeto.
// console.log(fabricacion); Esto no permite acceder a console.log(informacion)
// informacion: { fabricacion: { pais } } => Obtiene el valor de país y crea la variable de país.
// console.log(pais). De nuevo, obtiene el valor de país y le crea una variable. Solo para país, no para los objetos anteriores.
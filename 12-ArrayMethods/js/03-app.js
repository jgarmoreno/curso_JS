// .reduce. Tomar gran cantidad de datos y unirlos en un resultado
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Forma "manual"
let total = 0;

carrito.forEach(producto => total += producto.precio);
console.log(total);


// Reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // Inicializa en el total, y luego se hace iteración para obtener producto, e ir sumando. Por eso tampoco es +=, porque se va sumando al anterior. El cero es el valor en el que inicializa la cuenta

console.log(resultado);
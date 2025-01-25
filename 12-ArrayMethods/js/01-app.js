//.some(). Es como un includes() **algo existe dentro de un arreglo** pero para arreglos con objetos, no con índices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if(mes === 'Enero') {
        console.log('Enero existe');
    }
})
const resultado = meses.includes('Diciembre'); // Retorna booleano
console.log(resultado);



// .some(). Sigue la forma de arrow function. PARA ARREGLOS DE OBJETOS

const resultado2 = carrito.some((producto) => {
    return producto.nombre === 'Celular';
});
console.log(resultado2);

// En arreglo de índices
const existe = meses.some((mes) => {
    return mes === 'Febrero';
})

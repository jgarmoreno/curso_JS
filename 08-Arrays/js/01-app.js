// Array -> agrupar varios elementos o variables. No tiene valores, solo llaves o el nombre de la var.
const numeros = [
    10,20,30
];

// Otra manera de llamar los arreglos
const meses = new Array('Enero', 'Febrero', 'Marzo');

console.log(numeros);
console.log(meses);

// Acceder a la posición según el índice
console.log(numeros[0]);
console.log(meses[2]);

// Un arreglo que contiene datos de todo tipo
const deTodo = ['Hola', 10, 'si', null, {nombre: 'juan', trabajo: 'programador'}, [1,2,3]];
console.log(deTodo);

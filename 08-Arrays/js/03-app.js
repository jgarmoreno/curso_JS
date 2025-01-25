// ARRAY METHODS. Cómo acceder a TODOS LOS ELEMENTOS del arreglo cuando tiene un tamaño variable
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.log(meses);

// Cuánto mide el arreglo mediante .length y for()
console.log(meses.length);

for(let i = 0; i < meses.length; i++) {
    console.log(i); // Da el índice
    console.log(meses[i]); // Da el valor asociado
}
// Concat, unir arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];

const resultado = meses.concat(meses2, meses3); // Puedes concatenar los que quieras.

console.log(resultado); // Hace concat, une ambos arreglos.

// Con el Spread Operator
const resultado2 = [...meses, ...meses2];
console.log((resultado2)); // Hace lo mismo.


const resultado3 = meses.concat(meses2, meses3, 'Otro mes'); // Se puede añadir como string tb

console.log(resultado3);

// Con el Spread Operator
const resultado4 = [...meses, ...meses2, 'Otro mes'];
console.log((resultado4));
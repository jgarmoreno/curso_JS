// Igual a: == // Igual a y del mismo tipo: === // Diferente a: !=
const numero1 = 20;
const numero2 = '20';
const numero3 = 30;

// Revisar si dos números son iguales
console.log(numero1 == numero3); // false
console.log(numero1 == numero2); // true. No influye el tipo de dato si son solo dos iguales.

console.log(numero1 === numero3); // false. Compara el tipo de dato.
console.log(typeof numero1); // number
console.log(typeof numero2); // string

// Para solucionarlo
console.log(numero1 === Number.parseInt(numero2)); // true. Convierte el string a número.


// Comparar si son diferentes
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2); // true
console.log(numero1 != numero2); // false. No son diferentes (no tiene en cuenta el tipo de dato)
console.log(numero1 !== numero2); // true. Son diferentes, el tipado es diferente.
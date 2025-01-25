// Convertir de string a número entero y número decimal. Comprobar si es un número es entero.
const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20;

console.log(numero1);// 20 como string.
console.log(Number.parseInt(numero1));// 20 convertido a número. Para integers.
console.log(Number.parseFloat(numero2));// 20.2 convertido a número. Para floats.

console.log(Number.parseInt(numero3));// NaN. No se puede convertir a número.

// Revisar si un número es entero o no.
console.log(Number.isInteger(numero4));// true. Es un número entero.
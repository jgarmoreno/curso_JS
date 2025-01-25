// DESTRUCTURING de ARRAYS
const numeros = [
    10,
    20,
    30,
    40,
    50
];

const [primero, ,tercero] = numeros;
console.log(primero);
console.log(tercero);

const [ , , , ,quinto] = numeros;
console.log(quinto);

const numeros2 = [
    10,
    20,
    30,
    40,
    50
];

// Si quiero obtener el primero y segundo, y el resto como array
const [primero2, , ...tercero2] = numeros2;

console.log(primero2);
console.log(tercero2);


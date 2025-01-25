// Repeat y Split
const producto = 'Monitor de 20 pulgadas';

// Repetir una cadena de texto
const texto = 'en promoción '.repeat(3);
console.log(texto);
console.log(`${producto} ${texto}!!!! OMFG!!!!`);

// Split, dividir un string
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar música, escribir, programar';
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo JavaScript #JSModernoConJuan';
console.log(tweet.split('#')[0].trim());
console.log(tweet.split('#')[1]);




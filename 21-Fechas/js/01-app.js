// FECHAS

const diaHoy = new Date();

let valor;

valor = diaHoy;

// ** GET ** //

// Traer el año actual
valor = diaHoy.getFullYear(); // 2025

// Traer el mes actual
valor = diaHoy.getMonth(); // Enero es 0, Febrero es 2...

// Traer el minuto actual
valor = diaHoy.getMinutes(); // 27

// Traer el minuto actual
valor = diaHoy.getHours(); // 17

// Traer el minuto actual
valor1 = diaHoy.getTime(); // Segundos desde el 1 de enero de 1970 hasta ahora
valor2 = Date.now(); // Segundos desde el 1 de enero de 1970 hasta ahora // No requiere instanciar // Mismo resultado


// ** SET ** //

valor = diaHoy.setFullYear(2010); // Da segundos desde 1970 al año que pusiste

console.log(valor);
console.log(valor1);
console.log(valor2);
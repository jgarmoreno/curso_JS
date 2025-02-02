// MomentJS para elegir los formatos de fecha que se deseen
const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('DD/MM/YYYY HH:mm:ss A')); // 02/02/2025 17:39:24 PM
console.log(moment().format('LLLL')); // domingo, 2 de febrero de 2025 17:39
console.log(moment().add(3, 'days').calendar()); // miércoles a las 17:39


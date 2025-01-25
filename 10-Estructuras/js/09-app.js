// Operador ternario
const autenticado = true;
const autenticado2 = false;

console.log(autenticado ? 'El usuario está autenticado' : 'El usuario no está autenticado');
console.log(autenticado ? 'El usuario está autenticado' : null);

// Dos condiciones
const puedePagar = false;

console.log(autenticado && puedePagar ? 'Está autenticado y puede pagar' : 'No está autenticado y no puede pagar');
console.log(autenticado || puedePagar ? 'Está autenticado o puede pagar' : 'No está autenticado o no puede pagar');

// if anidado dentro de un ternario (ternario dentro de un ternario)

console.log(autenticado ? puedePagar ? 'Está autenticado y puede pagar' : 'Está autenticado pero no puede pagar' : 'No está autenticado');

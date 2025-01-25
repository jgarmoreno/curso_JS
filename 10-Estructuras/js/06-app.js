// && and
const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Sí es usuario y puede pagar');
} else if (!usuario && !puedePagar) {
    console.log('No tienes cuenta ni saldo');
} else if(!usuario) {
    console.log('No tienes un usuario creado');
} else if(!puedePagar) {
    console.log('No tienes saldo');
}

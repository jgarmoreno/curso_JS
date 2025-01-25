// Comunicación entre funciones
iniciarApp(); // Se puede porque es declaración de función no expresión

function iniciarApp() {
    console.log('Iniciando app...');
    segundaFunción();
}

function segundaFunción() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Juan');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando...');
    console.log(`El usuario ${usuario} ha sido autenticado exitosamente.`);
}
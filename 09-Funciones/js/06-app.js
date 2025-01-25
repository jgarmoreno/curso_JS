// Parámetros por default
function saludar(nombre = 'Desconocido', apellido = 'Sin Apellido') {
    console.log(`Hola ${nombre} ${apellido}, bienvenido otra vez.`);
}
saludar('Pedro');
saludar(undefined, 'González'); // Si no quiero enseñar el primero, solo se puede poner undefined por que si no pone González como el primer argumento.